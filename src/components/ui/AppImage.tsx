'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
    style?: React.CSSProperties;
    [key: string]: any;
}

const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png',
    loading = 'lazy',
    unoptimized = false,
    style,
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const isExternalUrl = useMemo(() => typeof imageSrc === 'string' && imageSrc.startsWith('http'), [imageSrc]);
    const resolvedUnoptimized = unoptimized || isExternalUrl;

    const handleError = useCallback(() => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
    }, [hasError, imageSrc, fallbackSrc]);

    const imageClassName = useMemo(() => {
        const classes = [className];
        if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
        return classes.filter(Boolean).join(' ');
    }, [className, onClick]);

    // Determine loading strategy
    const loadingProps = useMemo(() => {
        if (priority) {
            // For external/unoptimized images, use loading="eager" instead of priority
            // to avoid generating a preload link with a URL that won't match the actual request
            if (resolvedUnoptimized) {
                return { loading: 'eager' as const };
            }
            return { priority: true };
        }
        return { loading };
    }, [priority, resolvedUnoptimized, loading]);

    const baseProps = {
        src: imageSrc,
        alt,
        className: imageClassName,
        quality,
        placeholder,
        unoptimized: resolvedUnoptimized,
        onError: handleError,
        onClick,
        style,
        ...(blurDataURL && placeholder === 'blur' ? { blurDataURL } : {}),
        ...loadingProps,
    };

    if (fill) {
        return (
            <Image
                {...baseProps}
                fill
                sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                {...props}
            />
        );
    }

    return (
        <Image
            {...baseProps}
            width={width || 400}
            height={height || 300}
            sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            {...props}
        />
    );
});

AppImage.displayName = 'AppImage';

export default AppImage;