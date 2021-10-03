import React from 'react'
import { BottomTabBar } from 'react-navigation-tabs';

export const TabBarBottom = (props: any) => {
    let newProps = props;
    function getActiveRouteState (route: any): any {
      if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
          return route;
      }
  
      const childActiveRoute = route.routes[route.index]
      return getActiveRouteState(childActiveRoute);
    }
    const route = getActiveRouteState(props.navigation.state).routeName

      newProps = Object.assign(
        {},
        props,
        {
          activeTintColor: '#A10D99',
          inactiveTintColor: '#94949D',
          inactiveBackgroundColor: '#fff',
          activeBackgroundColor: '#fff', 
          style: {
            display: route == 'Photo' ? 'none' : 'flex',
            bottom: 0
          }
        },
      );


    return <BottomTabBar {...newProps} />
  };