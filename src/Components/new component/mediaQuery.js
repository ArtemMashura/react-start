import { useLayoutEffect } from "react";
import { useState } from "react";

const queries = [
    "(max-width: 766px)",
    "(min-width: 767px) and (max-width: 1199px)",
    "(min-width: 1200px)"
]

function useMediaQuery(defaultMatches) {
    const mediaQueryLists = queries.map(query => matchMedia(query))
    const getValues = () => mediaQueryLists.map(mql => mql.matches);
    const [values, setValues] = useState(getValues)

    useLayoutEffect(() => {
        const handler = () => setValues(getValues)
        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler))
        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler))
    })

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {})
    // const [matches, setMatches] = useState(defaultMatches)
    
    // var media;
    // useEffect(() => {
    //     const [mobile, laptop, desktop] = window.matchMedia(queries)
    //     if (mobile)
        
    //     if (media.matches !== matches) setMatches(media.matches)
    //     const listener = () => setMatches(media)
    //     media.addListener(listener)

    //     return () => media.removeListener(listener)
    // }, [matches])
    
    // return matches
}

export default useMediaQuery;