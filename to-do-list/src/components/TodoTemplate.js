import React from 'react';
import './TodoTemplate.scss';

//함수형 컴포넌트
const TodoTemplate = ({children}) => {//비구조화 할당
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;