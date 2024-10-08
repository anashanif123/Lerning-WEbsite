import React from 'react';
import styled from 'styled-components';
import { FaChalkboardTeacher, FaList, FaUserFriends } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const UserCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;

  &:first-child {
    background-color: #4c6ef5;
  }

  &:last-child {
    background-color: #f03e3e;
  }
`;

const DescriptionSection = styled.div`
  max-width: 500px;
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const Heading = styled.h2`
  color: #2b2d42;
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    color: #3f8efc;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
  }
`;

const ClassroomInterface = () => {
  return (
    <Container>
      {/* Video Section */}
      <VideoSection>
        <VideoGrid>
          <UserCard>
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="User"
              style={{
                borderRadius: '50%',
                marginBottom: '1rem',
                width: '60px',
                height: '60px',
              }}
            />
            <p>Jenny Parker</p>
          </UserCard>
          <UserCard>
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="User"
              style={{
                borderRadius: '50%',
                marginBottom: '1rem',
                width: '60px',
                height: '60px',
              }}
            />
            <p>Brian Cross</p>
          </UserCard>
          <UserCard>
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="User"
              style={{
                borderRadius: '50%',
                marginBottom: '1rem',
                width: '60px',
                height: '60px',
              }}
            />
            <p>Adam Lopez</p>
          </UserCard>
          <UserCard>
            <img
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="User"
              style={{
                borderRadius: '50%',
                marginBottom: '1rem',
                width: '60px',
                height: '60px',
              }}
            />
            <p>Patricia Mendoza</p>
          </UserCard>
        </VideoGrid>
        <ButtonGroup>
          <Button>Present</Button>
          <Button>Call</Button>
        </ButtonGroup>
      </VideoSection>

      {/* Description Section */}
      <DescriptionSection>
        <Heading>A <span>user interface</span> designed for the classroom</Heading>
        <List>
          <ListItem>
            <FaList />
            Teachers don't get lost in the grid view and have a dedicated Podium space.
          </ListItem>
          <ListItem>
            <FaChalkboardTeacher />
            TA's and presenters can be moved to the front of the class.
          </ListItem>
          <ListItem>
            <FaUserFriends />
            Teachers can easily see all students and class data at one time.
          </ListItem>
        </List>
      </DescriptionSection>
    </Container>
  );
};

export default ClassroomInterface;
