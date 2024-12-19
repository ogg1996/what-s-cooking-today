import foodTypes from '@assets/foodTypes';
import styled from 'styled-components';

const StyeldSuggestFoodTypes = styled.div`
  display: flex;
  gap: 5px;
`;
const OptionBtn = styled.button`
  width: 52px;
  height: 32px;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  border-radius: 30px;
  border: 1px solid ${props => (props.selected ? '#e74c3c' : '#c4c4c4')};
  background-color: ${props => (props.selected ? '#e74c3c' : '#fefbf8')};
  color: ${props => (props.selected ? '#fefbf8' : '#3c3733')};
  cursor: pointer;
`;

export default function SuggestFoodTypes({ selected, setSelected }) {
  return (
    <StyeldSuggestFoodTypes>
      {foodTypes.map(type => (
        <OptionBtn
          type="button"
          key={type}
          selected={selected === type.kr}
          onClick={() => setSelected(type.kr)}
        >
          {type.kr}
        </OptionBtn>
      ))}
    </StyeldSuggestFoodTypes>
  );
}
