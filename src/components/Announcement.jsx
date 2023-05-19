import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        JUST NOW! Free delivery3-5 workdays on orders above €69
    </Container>
  )
}

export default Announcement
