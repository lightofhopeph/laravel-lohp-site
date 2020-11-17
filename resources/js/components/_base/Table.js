import React, {useState, useEffect} from 'react';
import Pagination from './table/Pagination';
import PageSelectSize from './table/PageSelectSize';
import {gql, useQuery} from '@apollo/client';

const Table = ({
    dlimit = 10,
    showLimit = true,
    className,
    search_key = null,
    category = {},
    status = -1,
    toggleRefetch,
    header,
    content,
    isTable = false,
    query,
    params,
    order = `CREATED_AT`,
    sort = `ASC`,
    inputType = 'PostCategoryList',
    getData,
}) => {
    const [limit, setLimit] = useState(dlimit);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [total, setTotal] = useState(0);

    const GET_DATA = gql`
      query ${query}($search_key: String, $input: ${inputType}, $status: Int) {
        ${query}(
          first: ${limit},
          page: ${currentPage}
          search_key: $search_key
          input: $input
          status: $status
          orderBy: [
            { field: ${order}, order: ${sort} }
          ]
        ) {
          data {
            ${params}
          }
          paginatorInfo {
            hasMorePages
            lastPage
            currentPage
            total
          }
        }
      }
    `;

    const {loading, error, data, refetch} = useQuery(GET_DATA, {
        variables: {search_key, input: {...category}, status},
    });

    useEffect(() => {
        refetch();
        setCurrentPage(1);
    }, [toggleRefetch]);

    useEffect(() => {
        if (data) {
            setTotal(data[query].paginatorInfo.total);
            setCurrentPage(data[query].paginatorInfo.currentPage);
            setLastPage(data[query].paginatorInfo.lastPage);
            getData(data[query].data);
        }
    }, [data]);

    const changeLimit = value => {
        setCurrentPage(1);
        setLimit(value);
    };

    if (loading) {
        return (
            <div className={`w-full flex items-center justify-center`}>
                <div> Loading items... </div>
            </div>
        );
    }

    return (
        <>
            <section>
                {!total ? (
                    <div className="block flex flex-col h-64 items-center justify-center text-base text-gray-400 w-full">
                        <span className="block mt-2">No results found</span>
                    </div>
                ) : (
                    <>
                        <section className={`text-left w-full ${className}`}>
                            {isTable ? (
                                <>
                                    <table>
                                        {header}
                                        {content}
                                    </table>
                                </>
                            ) : (
                                <>{content}</>
                            )}
                        </section>
                        <div
                            className={`flex justify-center relative w-full mt-8`}>
                            <Pagination
                                onPageChange={setCurrentPage}
                                currentPage={currentPage}
                                lastPage={lastPage}
                            />

                            {showLimit && (
                                <PageSelectSize onClick={changeLimit} />
                            )}
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Table;
