import { jest } from '@jest/globals';
import { render, screen, React } from "@testing-library/react";
import Main ,{initializeTimes, updateTimes} from './Main';

test('Renders the BookingForm heading', () => {
    render(<Main />);
    const headingElement = screen.getByText("Reserve now");
    expect(headingElement).toBeInTheDocument();
})

test('Available times', () => {
    const expectedTimes = {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};

    const result = initializeTimes();

    expect(result).toEqual(expectedTimes);
})

describe('updateTimes function', () => {
    it('should dispatch the correct action when called', () => {

      const mockDispatch = jest.fn();


      const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];


      updateTimes('18:00',mockDispatch);


      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_AVAILABLE_TIMES',
        payload: expectedTimes,
      });
    });
  });
