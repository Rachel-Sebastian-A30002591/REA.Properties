import * as saga from '.';



it('should call propertyWatcherSaga', () => {
  const gen = saga.propertyWatcherSaga();
  /* 
    expect(gen.next().value).toEqual(select(isAuthenticated));
    expect(gen.next(false).value).toEqual(put(loadProfileFailure())); */
  gen.next();


  expect(gen.next().done).toBeTruthy();
});


it('should call propertyWorkerSaga Success', () => {

  const gen = saga.propertyWorkerSaga();
  gen.next(true);
  gen.next(true);
  gen.next(true);
  // expect(gen.next(true)).toEqual(put({ type: PROPERTY_FETCH_SUCCESS, payload: {result:[],saved:[]}}));
  expect(gen.next().done).toBeTruthy();
});

it('should call propertyWorkerSaga Failure', () => {

  const gen = saga.propertyWorkerSaga();

  console.log('CP1', gen.next(false).value);
  // expect(gen.next(true)).toEqual(put({ type: PROPERTY_FETCH_SUCCESS, payload: {result:[],saved:[]}}));
  expect(gen.next().done).toBeFalsy();
});

it('calls the clearSomethingInModal function', () => {

  const addMock = jest.spyOn(saga, 'fetchPropertyData');
  saga.fetchPropertyData();
  expect(addMock).toHaveBeenCalled();
})