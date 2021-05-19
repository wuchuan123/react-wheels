import React from 'react';

function composeEventHandlers(...fns: any[]) {
  return (event: any, ...args: any[]) =>
    fns.some(fn => {
      fn && fn(event, ...args);
      event.persist();
    });
}

export const getNoPages = (items = [], itemsperpage: any) => {
  return Math.ceil(items.length / itemsperpage);
};

export const getHalfPagesArray = (pagesforarray: any) => {
  return Math.floor(pagesforarray / 2);
};

export const isNoPagesLargerPagesSpan = (nopages: any, pagesspan: any) => {
  return nopages > pagesspan;
};

export const isNoEven = (no: number) => {
  return no % 2 === 0;
};

export const getIniPageofArray = (
  nopages: any,
  pagesspan: any,
  page: any,
  inipagearray: any,
) => {
  if (isNoPagesLargerPagesSpan(nopages, pagesspan)) {
    if (page <= nopages) {
      let halfspan = getHalfPagesArray(pagesspan);
      if (page >= halfspan + inipagearray) {
        let newini = page - halfspan > 0 ? page - halfspan : 1;
        if (newini + pagesspan <= nopages) {
          return newini;
        } else {
          return nopages - pagesspan + 1;
        }
      } else {
        if (page > 0) {
          return page - halfspan > 0 ? page - halfspan : 1;
        } else {
          return 1;
        }
      }
    }
  }
  return inipagearray;
};

class ReactNextPaging extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const newState = this.generateStateFromProps(props);
    this.state = { ...newState };
  }

  static defaultProps = {
    itemsperpage: 10,
    pagesspan: 10,
    pagesforarray: 10,
    inipagearray: 1,
    items: [],
  };

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if (
      this.props.items.length !== prevProps.items.length ||
      this.props.itemsperpage !== prevProps.itemsperpage ||
      this.props.pagesspan !== prevProps.pagesspan
    ) {
      const { currentpage } = prevState;
      const newState = this.generateStateFromProps(this.props, currentpage);
      this.setState({ ...newState });
    }
  }

  generateStateFromProps = (props: any, currentpage = 1) => {
    const { items, itemsperpage, pagesspan } = props;
    let newnopages = getNoPages(items, itemsperpage);
    let newcurrentpage = currentpage;
    if (currentpage > newnopages) {
      newcurrentpage = 1;
    }
    let newinitialitem = (newcurrentpage - 1) * itemsperpage;
    let newlastitem = newcurrentpage * itemsperpage;
    let pagesforarray = isNoPagesLargerPagesSpan(newnopages, pagesspan)
      ? pagesspan
      : newnopages;

    return {
      pagesspan: pagesspan,
      inipagearray: 1,
      pagesforarray: pagesforarray,
      nopages: newnopages,
      noitems: items.length,
      initialitem: newinitialitem,
      lastitem: newlastitem,
      currentpage: newcurrentpage,
      goBackBdisabled: this.goBackButtonState(newcurrentpage),
      goFastBackBdisabled: this.goFastBackButtonState(newcurrentpage),
      goFwdBdisabled: this.goFwdButtonState(newcurrentpage, newnopages),
      goFastFwdBdisabled: this.goFastFwdButtonState(newcurrentpage, newnopages),
    };
  };

  computeBackLimits = (prevpage: any) => {
    let { itemsperpage } = this.props;
    let newinitialitem = (prevpage - 1) * itemsperpage;
    let newlastitem = prevpage * itemsperpage;
    // console.log(
    //   `computeBackLimits() newinitialitem: ${newinitialitem} newlastitem: ${newlastitem}`
    // );
    return { newinitialitem, newlastitem };
  };

  computeFwdLimits = (nextpage: any) => {
    let { itemsperpage } = this.props;
    let newinitialitem = (nextpage - 1) * itemsperpage;
    let newlastitem = nextpage * itemsperpage;
    return { newinitialitem, newlastitem };
  };

  computeSelectedPageLimits = (selpage: any) => {
    let { itemsperpage } = this.props;
    let newinitialitem = (selpage - 1) * itemsperpage;
    let newlastitem = selpage * itemsperpage;
    // console.log(
    //   `computeFwdLimits() newinitialitem: ${newinitialitem} newlastitem: ${newlastitem}`
    // );
    return { newinitialitem, newlastitem };
  };

  goToPage = (page: any, event: any) => {
    let { currentpage, nopages, pagesspan, inipagearray } = this.state;
    if (page > 0 && page <= nopages) {
      // let prevpage = currentpage - 1;
      let newlimits = this.computeSelectedPageLimits(page);
      // let inipagearray = getIniPageofArray(nopages, pagesspan, currentpage);
      // console.log({ titulo: "nopages", valor: nopages });
      // console.log({ titulo: "pagesspan", valor: pagesspan });
      // console.log({ titulo: "page", valor: page });
      let newinipagearray = getIniPageofArray(
        nopages,
        pagesspan,
        page,
        inipagearray,
      );
      // console.log({ titulo: "goToPage->inipagearray", valor: inipagearray });
      // console.log(`goBack() new page: ${prevpage}`);
      this.setState({
        inipagearray: newinipagearray,
        currentpage: page,
        initialitem: newlimits.newinitialitem,
        lastitem: newlimits.newlastitem,
        goBackBdisabled: this.goBackButtonState(page),
        goFastBackBdisabled: this.goFastBackButtonState(page),
        goFwdBdisabled: this.goFwdButtonState(page, nopages),
        goFastFwdBdisabled: this.goFastFwdButtonState(page, nopages),
      });
    }
  };

  goBack = () => {
    // console.log(`goBack()`);
    let { currentpage, nopages, pagesspan, inipagearray } = this.state;
    if (currentpage > 1) {
      let prevpage = currentpage - 1;
      let newlimits = this.computeBackLimits(prevpage);
      let newinipagearray = getIniPageofArray(
        nopages,
        pagesspan,
        prevpage,
        inipagearray,
      );
      // console.log(`goBack() new page: ${prevpage}`);
      this.setState({
        currentpage: prevpage,
        inipagearray: newinipagearray,
        initialitem: newlimits.newinitialitem,
        lastitem: newlimits.newlastitem,
        goBackBdisabled: this.goBackButtonState(prevpage),
        goFastBackBdisabled: this.goFastBackButtonState(prevpage),
        goFwdBdisabled: this.goFwdButtonState(prevpage, nopages),
        goFastFwdBdisabled: this.goFastFwdButtonState(prevpage, nopages),
      });
    }
  };

  goFastBack = () => {
    // console.log(`goBack()`);
    let { currentpage, nopages, pagesspan, inipagearray } = this.state;
    if (currentpage > 1) {
      let prevpage = 1;
      let newlimits = this.computeBackLimits(prevpage);
      let newinipagearray = getIniPageofArray(
        nopages,
        pagesspan,
        prevpage,
        inipagearray,
      );
      // console.log(`goBack() new page: ${prevpage}`);
      this.setState({
        currentpage: prevpage,
        inipagearray: newinipagearray,
        initialitem: newlimits.newinitialitem,
        lastitem: newlimits.newlastitem,
        goBackBdisabled: this.goBackButtonState(prevpage),
        goFastBackBdisabled: this.goFastBackButtonState(prevpage),
        goFwdBdisabled: this.goFwdButtonState(prevpage, nopages),
        goFastFwdBdisabled: this.goFastFwdButtonState(prevpage, nopages),
      });
    }
  };

  goFwd = () => {
    // console.log(`goFwd()`);
    let { nopages, currentpage, pagesspan, inipagearray } = this.state;
    if (currentpage < nopages) {
      let nextpage = currentpage + 1;
      let newlimits = this.computeFwdLimits(nextpage);
      let newinipagearray = getIniPageofArray(
        nopages,
        pagesspan,
        nextpage,
        inipagearray,
      );
      // console.log(`goFwd() new page: ${nextpage}`);
      this.setState({
        currentpage: nextpage,
        inipagearray: newinipagearray,
        initialitem: newlimits.newinitialitem,
        lastitem: newlimits.newlastitem,
        goBackBdisabled: this.goBackButtonState(nextpage),
        goFastBackBdisabled: this.goFastBackButtonState(nextpage),
        goFwdBdisabled: this.goFwdButtonState(nextpage, nopages),
        goFastFwdBdisabled: this.goFastFwdButtonState(nextpage, nopages),
      });
    }
  };

  goFastFwd = () => {
    // console.log(`goFwd()`);
    let { nopages, currentpage, pagesspan, inipagearray } = this.state;
    if (currentpage < nopages) {
      let nextpage = nopages * 1;
      let newlimits = this.computeFwdLimits(nextpage);
      let newinipagearray = getIniPageofArray(
        nopages,
        pagesspan,
        nextpage,
        inipagearray,
      );
      // console.log(`goFwd() new page: ${nextpage}`);
      this.setState({
        currentpage: nextpage,
        inipagearray: newinipagearray,
        initialitem: newlimits.newinitialitem,
        lastitem: newlimits.newlastitem,
        goBackBdisabled: this.goBackButtonState(nextpage),
        goFastBackBdisabled: this.goFastBackButtonState(nextpage),
        goFwdBdisabled: this.goFwdButtonState(nextpage, nopages),
        goFastFwdBdisabled: this.goFastFwdButtonState(nextpage, nopages),
      });
    }
  };

  goBackButtonState = (prevpage: number) => {
    if (prevpage <= 1) {
      return true;
    } else {
      return false;
    }
  };

  goFastBackButtonState = (prevpage: number) => {
    return prevpage <= 1;
  };

  goFwdButtonState = (nextpage: number, nopages: number) => {
    return nextpage >= nopages;
  };

  goFastFwdButtonState = (nextpage: number, nopages: number) => {
    return nextpage >= nopages;
  };

  getBackButtonProps = ({ onClick, ...rest }: any = {}) => {
    const eventHandlers = {
      onClick: composeEventHandlers(onClick, this.goBack),
    };
    return {
      role: 'button',
      ...eventHandlers,
      ...rest,
    };
  };

  getFastBackButtonProps = ({ onClick, ...rest }: any = {}) => {
    const eventHandlers = {
      onClick: composeEventHandlers(onClick, this.goFastBack),
    };
    return {
      role: 'button',
      ...eventHandlers,
      ...rest,
    };
  };

  getFwdButtonProps = ({ onClick, ...rest }: any = {}) => {
    const eventHandlers = {
      onClick: composeEventHandlers(onClick, this.goFwd),
    };
    return {
      role: 'button',
      ...eventHandlers,
      ...rest,
    };
  };

  getFastFwdButtonProps = ({ onClick, ...rest }: any = {}) => {
    const eventHandlers = {
      onClick: composeEventHandlers(onClick, this.goFastFwd),
    };
    return {
      role: 'button',
      ...eventHandlers,
      ...rest,
    };
  };

  getSelPageButtonProps = ({ onClick, page, ...rest }: any = {}) => {
    const eventHandlers = {
      onClick: composeEventHandlers(onClick, (event: React.MouseEvent) =>
        this.goToPage(page, event),
      ),
    };
    return {
      role: 'button',
      ...eventHandlers,
      ...rest,
    };
  };

  getStateAndHelpers(): any {
    const {
      nopages,
      inipagearray,
      currentpage,
      pagesforarray,
      noitems,
      initialitem,
      lastitem,
      goBackBdisabled,
      goFastBackBdisabled,
      goFwdBdisabled,
      goFastFwdBdisabled,
    } = this.state;
    const {
      getBackButtonProps,
      getFastBackButtonProps,
      getFwdButtonProps,
      getFastFwdButtonProps,
      getSelPageButtonProps,
    } = this;
    return {
      // prop getters
      getBackButtonProps,
      getFastBackButtonProps,
      getFwdButtonProps,
      getFastFwdButtonProps,
      getSelPageButtonProps,

      // state
      nopages,
      pagesforarray,
      inipagearray,
      currentpage,
      noitems,
      initialitem,
      lastitem,
      goBackBdisabled,
      goFastBackBdisabled,
      goFwdBdisabled,
      goFastFwdBdisabled,
    };
  }

  render() {
    // @ts-ignore
    return this.props.children(this.getStateAndHelpers());
  }
}

export default ReactNextPaging;
