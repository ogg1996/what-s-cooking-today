import styled from 'styled-components';

const StyeldCategory = styled.div`
  display: flex;
  gap: 5px;
`;
const ItemBtn = styled.button`
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

export default function Category({ selected, setSelected }) {
  const category = ['전체', '한식', '중식', '일식', '양식', '기타'];
  return (
    <StyeldCategory>
      {category.map(item => (
        <ItemBtn
          type="button"
          key={item}
          selected={selected === item}
          onClick={() => setSelected(item)}
        >
          {item}
        </ItemBtn>
      ))}
    </StyeldCategory>
  );
}
