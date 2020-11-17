import React from 'react';

const Pagination = ({currentPage, lastPage, onPageChange}) => {
    const isFirstPage = () => {
        return currentPage === 1;
    };

    const isLastPage = () => {
        return currentPage === lastPage;
    };

    const dspBtns = () => {
        const n = lastPage;
        const i = currentPage;
        /* eslint-disable */
        if (n <= 9)
            return (n => {
                const arr = Array(n);
                while (n) {
                    arr[n - 1] = n--;
                }
                return arr;
            })(n);
        if (i <= 5) return [1, 2, 3, 4, 5, 6, 7, 0, n]; // 0 represents `···`
        if (i >= n - 4)
            return [1, 0, n - 6, n - 5, n - 4, n - 3, n - 2, n - 1, n];
        return [1, 0, i - 2, i - 1, i, i + 1, i + 2, 0, n];
        /* eslint-enable */
    };

    const handleClick = n => {
        onPageChange(n);
    };

    const turnPage = page => {
        onPageChange(page);
    };

    return (
        <div className={`flex items-center mb-3 lg:mb-0`}>
            <ul className="pagination" name="Pagination">
                {!isFirstPage() && (
                    <li
                        className="page-item"
                        onClick={() => turnPage(currentPage - 1)}>
                        <button className="page-link">
                            <svg className={`feather-icon w-full`}>
                                <use
                                    xlinkHref={`/assets/svg/feather-sprite.svg#chevron-left`}
                                />
                            </svg>
                        </button>
                    </li>
                )}

                {dspBtns().map((button, i) => (
                    <li
                        key={i}
                        className={`page-item ${
                            button === currentPage ? 'active' : ''
                        }`}>
                        {button ? (
                            <button
                                className="page-link"
                                onClick={() => handleClick(button)}>
                                {button}
                            </button>
                        ) : (
                            <button className="page-link">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        )}
                    </li>
                ))}

                {!isLastPage() && (
                    <li
                        className="page-item"
                        onClick={() => turnPage(currentPage + 1)}>
                        <button className="page-link">
                            <svg className={`feather-icon w-full`}>
                                <use
                                    xlinkHref={`/assets/svg/feather-sprite.svg#chevron-right`}
                                />
                            </svg>
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
