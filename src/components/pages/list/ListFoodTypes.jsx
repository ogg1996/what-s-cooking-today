import foodTypes from '@assets/foodTypes';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyeldListFoodTypes = styled.div`
  display: flex;
  gap: 5px;
`;

const LinkBtn = styled(Link)`
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

export default function ListFoodTypes() {
  const param = useParams();

  return (
    <StyeldListFoodTypes>
      {foodTypes.map(type => (
        <LinkBtn
          to={`/list/${type.en}`}
          key={`list-${type.en}`}
          selected={param.type === type.en}
        >
          {type.kr}
        </LinkBtn>
      ))}
    </StyeldListFoodTypes>
  );
}
