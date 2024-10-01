import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function PlatFormSupport() {
  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem' }}>Platform Support</h1>

      <Row 
        className="d-flex justify-content-around align-items-center" 
        style={{ marginTop: "50px" }} // Reduced top margin for mobile
      >
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
            <path d="M19.61,4.808c1.035-1.294,1.737-3.032,1.552-4.808-1.515,.075-3.363,.999-4.433,2.295-.961,1.109-1.811,2.92-1.59,4.621,1.7,.147,3.399-.85,4.471-2.108"></path>
            <path d="M21.143,7.248c-2.469-.147-4.569,1.401-5.748,1.401s-2.986-1.327-4.939-1.292c-2.542,.037-4.901,1.475-6.191,3.761-2.653,4.573-.7,11.357,1.88,15.081,1.253,1.843,2.763,3.872,4.753,3.799,1.88-.074,2.617-1.217,4.902-1.217s2.947,1.217,4.937,1.18c2.064-.037,3.354-1.844,4.607-3.688,1.437-2.101,2.026-4.129,2.063-4.24-.037-.037-3.98-1.549-4.016-6.084-.037-3.797,3.095-5.603,3.243-5.716-1.769-2.616-4.533-2.911-5.491-2.985"></path>
          </svg>
          <p style={{ fontSize: '1rem' }}>Mac OS</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
            <path d="M3,3H15.381V15.381H3V3Z"></path>
            <path d="M16.619,3h12.381V15.381h-12.381V3Z"></path>
            <path d="M3,16.619H15.381v12.381H3v-12.381Z"></path>
            <path d="M16.619,16.619h12.381v12.381h-12.381v-12.381Z"></path>
          </svg>
          <p style={{ fontSize: '1rem' }}>Windows</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M16.001,31.632c-2.787,0-5.346-.933-6.993-2.326-.837,.25-1.907,.652-2.582,1.151-.578,.427-.506,.861-.402,1.037,.457,.772,7.844,.493,9.977,.253v-.114Z" opacity=".4"></path><path d="M16.001,31.632c2.788,0,5.346-.933,6.994-2.326,.836,.25,1.907,.652,2.582,1.151,.578,.427,.506,.861,.401,1.037-.457,.772-7.844,.493-9.977,.253v-.114Z" opacity=".4"></path><path d="M14.651,6.639c.044,.554-.26,1.046-.678,1.099-.419,.054-.793-.351-.838-.905-.044-.554,.26-1.046,.677-1.099,.42-.054,.795,.352,.839,.905"></path><path d="M17.31,6.824c.086-.153,.668-.959,1.874-.666,.317,.077,.463,.191,.494,.235,.046,.066,.058,.16,.012,.286-.092,.25-.281,.244-.386,.195-.068-.032-.908-.591-1.682,.244-.053,.057-.149,.077-.239,.009-.09-.068-.127-.207-.074-.303"></path><path d="M26.016,13.435s-4.299,1.357-9.999,1.396h-.034c-5.691-.038-9.985-1.391-9.999-1.396l-1.44,3.594c1.6,.483,3.371,.889,5.141,1.187v4.674s2.21,.446,4.424,.137v-4.3c.651,.037,1.28,.053,1.874,.046h.034c3.375,.041,7.838-.659,11.439-1.745l-1.44-3.594Z" opacity=".4"></path><path d="M28.525,20.046c-.285-.918-.675-1.989-1.069-3.017-1.214,.366-2.527,.688-3.862,.953,.195,1.245,.304,2.773,.196,4.572-.293,4.902-3.204,7.984-7.698,8.028h-.183c-4.494-.045-7.405-3.126-7.698-8.028-.107-1.799,.001-3.328,.196-4.572-1.336-.265-2.649-.587-3.864-.953-.394,1.028-.784,2.099-1.069,3.017-1.361,4.379-.92,6.191-.584,6.232,.72,.087,2.804-3.296,2.804-3.296,0,3.438,3.104,8.717,10.212,8.765,.032,0,.157,0,.188,0,7.108-.048,10.212-5.327,10.212-8.765,0,0,2.083,3.383,2.804,3.296,.336-.041,.777-1.853-.584-6.232Z"></path><path d="M15.983,14.831h.034c5.701-.039,9.999-1.396,9.999-1.396,.001-.042,.019-.749,.019-1.114C26.035,6.176,23.134,0,16,0,8.866,0,5.965,6.176,5.965,12.321c0,.365,.018,1.072,.019,1.114,.015,.005,4.308,1.357,9.999,1.396Zm.9-8.37c.052-1.402,.879-2.504,1.846-2.461,.968,.044,1.709,1.216,1.656,2.618-.052,1.401-.879,2.504-1.846,2.46-.967-.044-1.709-1.215-1.656-2.618Zm-3.611-2.461c.967-.043,1.793,1.059,1.846,2.461,.053,1.402-.689,2.575-1.656,2.618-.968,.044-1.795-1.059-1.847-2.46-.052-1.402,.689-2.575,1.657-2.618Zm-3.377,7.058c.259-.573,2.863-1.211,6.088-1.211h.035c3.225,0,5.829,.638,6.088,1.211,.012,.025,.019,.052,.019,.081,0,.041-.014,.079-.036,.111-.218,.318-3.11,1.888-6.071,1.888h-.035c-2.961,0-5.853-1.57-6.071-1.888-.021-.032-.036-.069-.036-.11,0-.029,.007-.057,.019-.082Z"></path></svg>      
          <p style={{ fontSize: '1rem' }}>Linux</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M23.364,18.448c-.736,0-1.333-.595-1.333-1.33,0-.735,.596-1.33,1.332-1.331s1.333,.595,1.333,1.33c0,.734-.597,1.33-1.332,1.331m-14.728,0c-.736,0-1.333-.595-1.333-1.33s.596-1.33,1.332-1.331c.736,0,1.333,.595,1.333,1.33,0,.734-.597,1.33-1.332,1.331m15.206-8.013l2.663-4.605c.153-.265,.063-.603-.202-.756-.265-.153-.604-.062-.757,.202h0l-2.697,4.663c-2.062-.94-4.378-1.463-6.849-1.463s-4.787,.524-6.849,1.463l-2.696-4.663c-.153-.265-.492-.355-.757-.203-.265,.153-.356,.491-.203,.756h0l2.663,4.605C3.585,12.918,.458,17.54,0,23H32c-.458-5.46-3.585-10.082-8.158-12.565"></path></svg>
        <p style={{ fontSize: '1rem' }}>Android</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M19.61,4.808c1.035-1.294,1.737-3.032,1.552-4.808-1.515,.075-3.363,.999-4.433,2.295-.961,1.109-1.811,2.92-1.59,4.621,1.7,.147,3.399-.85,4.471-2.108"></path><path d="M21.143,7.248c-2.469-.147-4.569,1.401-5.748,1.401s-2.986-1.327-4.939-1.292c-2.542,.037-4.901,1.475-6.191,3.761-2.653,4.573-.7,11.357,1.88,15.081,1.253,1.843,2.763,3.872,4.753,3.799,1.88-.074,2.617-1.217,4.902-1.217s2.947,1.217,4.937,1.18c2.064-.037,3.354-1.844,4.607-3.688,1.437-2.101,2.026-4.129,2.063-4.24-.037-.037-3.98-1.549-4.016-6.084-.037-3.797,3.095-5.603,3.243-5.716-1.769-2.616-4.533-2.911-5.491-2.985"></path></svg>
        <p style={{ fontSize: '1rem' }}>IOS</p>
        </Col>
      </Row>
    </Container>
  );
}
