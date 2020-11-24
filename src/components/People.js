import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Row, Col } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { loadPeople } from '../actions/people';

const Loading = (props) => {
  return (
    <div className="centered">
      <SyncOutlined spin style={{ fontSize: 40 }} />
    </div>
  );
}

const People = (props) => {
  const { people, loading, loadPeople } = props;
  const [nextPage, setNextPage] = useState(1);
  
  useEffect(() => {
    loadPeople();
  }, [loadPeople]);

  if (loading && !people.length) {
    return (
      <Loading />
    );
  }
 
  return (
    <React.Fragment>
      {people && people.length ? (
        <Row gutter={16}>
          {people.map((man, index) => (
            <Col key={index} span={8} style={{marginBottom: 16}}>
              <Card title={man.name} className="people-card">
                <p>Рост: {man.height}</p>
                <p>Вес: {man.mass}</p>
                <p>Год рождения: {man.birth_year}</p>
              </Card>
            </Col>
          ))}
          <Col key="button" span={8} className={`last-column ${nextPage > 1 ? 'hidden' : ''}`}>
            {!loading ? (
              <Button className="load-more-btn" onClick={() => {
                loadPeople(nextPage + 1)
                setNextPage(nextPage + 1);
              }}>
                Загрузить ещё
              </Button>
            ) : (
              <SyncOutlined spin style={{ marginBottom: 24 }}/>
            )}
          </Col>
        </Row>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const peopleState = state.people;
  return {
    people: peopleState.list,
    loading: peopleState.loading,
  }
}

export default connect(mapStateToProps, {
  loadPeople,
})(People);
