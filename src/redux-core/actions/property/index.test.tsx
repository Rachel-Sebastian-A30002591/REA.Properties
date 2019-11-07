
import * as action from '../../actions/property'
import { Property, PROPERTY_FETCH_SUCCESS, PROPERTY_FETCH_FAILED } from '../../types/property';




const property: Property = {
  price: '$726,500',
  agency: {
    logo: 'https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif',
    brandingColors: {
      primary: '#ffe512'
    }
  },
  id: 1,
  mainImage: 'https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
}


it('calls the clearSomethingInModal function', () => {

  const addMock = jest.spyOn(action, 'fetchProperties');
   action.fetchProperties();
  expect(addMock).toHaveBeenCalled();
})