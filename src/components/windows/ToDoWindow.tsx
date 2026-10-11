import React from 'react';
import styled from 'styled-components';
import { DraggableWindow } from './DraggableWindow';

const ToDoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border: 1px solid #00FFB3;
  border-radius: 8px;
  padding: 15px;
  color: #B3B3B3;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
`;

const TaskItem = styled.div`
  background: #333;
  border-radius: 4px;
  padding: 15px;
`;

const TaskTitle = styled.h3`
  color: #00FFB3;
  margin: 0 0 10px 0;
  font-size: 16px;
`;

const TaskDescription = styled.p`
  margin: 0 0 15px 0;
  font-size: 14px;
`;

const TaskFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FieldLabel = styled.label`
  font-size: 12px;
  color: #666;
`;

const FieldInput = styled.input`
  background: #2A2A2A;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px;
  color: #B3B3B3;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #00FFB3;
  }
`;

const ActionButton = styled.button`
  background: #00FFB3;
  color: #1A1A1A;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #00E6A0;
  }
`;

const ToDoWindow: React.FC<{ index: number }> = ({ index }) => {
  const tasks = [
    {
      id: 1,
      title: 'Стейкинг TRD',
      description: 'Заблокируйте свои TRD токены для получения пассивного дохода',
      fields: [
        { label: 'Количество токенов', type: 'number', placeholder: 'Введите количество' },
        { label: 'Срок блокировки', type: 'select', options: ['30 дней', '90 дней', '180 дней'] }
      ]
    },
    {
      id: 2,
      title: 'Покупка NFT',
      description: 'Приобретите эксклюзивный NFT для доступа к премиум функциям',
      fields: [
        { label: 'Выберите NFT', type: 'select', options: ['MultyPass', 'VIP Access', 'Premium Card'] },
        { label: 'Метод оплаты', type: 'select', options: ['TRD', 'BTC', 'ETH'] }
      ]
    }
  ];

  return (
    <DraggableWindow
      title="To Do"
      initialPosition={{ x: 500, y: 50 }}
      index={index}
    >
      <ToDoContainer>
        <TaskList>
          {tasks.map(task => (
            <TaskItem key={task.id}>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskDescription>{task.description}</TaskDescription>
              <TaskFields>
                {task.fields.map((field, index) => (
                  <Field key={index}>
                    <FieldLabel>{field.label}</FieldLabel>
                    {field.type === 'select' ? (
                      <FieldInput as="select">
                        {field.options?.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </FieldInput>
                    ) : (
                      <FieldInput type={field.type} placeholder={field.placeholder} />
                    )}
                  </Field>
                ))}
                <ActionButton>Выполнить</ActionButton>
              </TaskFields>
            </TaskItem>
          ))}
        </TaskList>
      </ToDoContainer>
    </DraggableWindow>
  );
};

export default ToDoWindow; 