import { MOBILE, IPAD } from '../utils/viewports';
import { isClient } from '../utils/window';
import * as React from 'react';

const ViewportContext = React.createContext({
    height: 0,
    width: 0,
});

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
    const [width, setWidth] = React.useState(isClient ? window.innerWidth : 0);
    const [height, setHeight] = React.useState(isClient ? window.innerHeight : 0);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;
};

export const useViewport = () => {
    const { width } = React.useContext(ViewportContext);

    const isMobile = width < MOBILE;
    const isIpad = width < IPAD;

    return { isMobile, isIpad };
};
