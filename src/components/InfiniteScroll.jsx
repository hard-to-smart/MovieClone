import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const InfiniteScroll = ({ fetchMoreData, hasMore }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 200 && !isLoading) {
            setIsLoading(true);
            fetchMoreData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore,isLoading]);

    return (
        <>
            {isLoading && <Spinner />}
        </>
    );
};

export default InfiniteScroll;