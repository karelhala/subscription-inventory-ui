import { getBaseName, getPartialRouteFromPath } from '..';

describe('utilities/getBaseName', () => {
  it('should find the right base name on Stable', () => {
    expect(getBaseName('/insights/foo/bar/baz')).toEqual('/insights/foo');
    expect(getBaseName('/rhcs/bar/bar/baz')).toEqual('/rhcs/bar');
  });

  it('should find the right base name on Beta', () => {
    expect(getBaseName('/beta/insights/foo/bar/baz')).toEqual('/beta/insights/foo');
    expect(getBaseName('/beta/test/fff/bar/baz')).toEqual('/beta/test/fff');
  });

  it('should find the right base name not on Beta with a shorter url', () => {
    expect(getBaseName('/insights')).toEqual('/insights/');
  });
});

describe('getPartialRouteFromPath method', () => {
  it('gets the root partial correctly', () => {
    expect(getPartialRouteFromPath('/insights/subscriptions/inventory')).toEqual('/');
  });

  it('gets the root partial correctly with a trailing slash', () => {
    expect(getPartialRouteFromPath('/insights/subscriptions/inventory/')).toEqual('/');
  });

  it('gets the oops route correctly', () => {
    expect(getPartialRouteFromPath('/insights/subscriptions/inventory/oops')).toEqual('/oops');
  });
});
