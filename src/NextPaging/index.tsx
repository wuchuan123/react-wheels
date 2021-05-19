import React from 'react';
import ReactNextPaging from './hooks/react-next-paging-hook';

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '1em',
  padding: 10,
  margin: 5,
  width: 70,
};

const PaginacionTabla = ({
  itemsperpage,
  nocolumns,
  items,
  pagesspan,
}: any) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled,
      }: any) => (
        <tbody>
          {items.slice(initialitem, lastitem).map((item: any) => {
            return item;
          })}
          {noitems > 0
            ? [
                <tr key={'pagingrow' + 100}>
                  <td colSpan={nocolumns} style={{ textAlign: 'center' }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {'<<'}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {'<'}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray,
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage == page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {'>'}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {'>>'}
                    </button>
                  </td>
                </tr>,
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};

export default PaginacionTabla;
