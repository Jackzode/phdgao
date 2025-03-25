'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';


interface ZoomableImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({
    src,
    alt = '',
    width = 600,
    height = 300,
    className,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`cursor-zoom-in rounded-md object-contain ${className || ''}`}
                    onClick={() => setOpen(true)}
                />
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src }]}

                styles={{
                    container: {
                        backgroundColor: 'rgba(255,255,255,0.95)', // 非全屏时更柔和
                    },
                    slide: {
                        maxWidth: '80vw',
                        maxHeight: '90vh',
                    },
                }}
                carousel={{ finite: true }}
                animation={{ fade: 200 }}
                controller={{ closeOnPullDown: true }}
                on={{ click: () => setOpen(false) }}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
                toolbar={{ buttons: ["close"] }}
            />
        </>
    );
};
