import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Jsx7 from "./components/03-jsx/jsx7";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props-1/greetings";
import Products from "./components/07-props-2/products";
import Clock2 from "./components/08-clock2/clock2";
import Gallery from "./components/09-image/gallery";
import Image from "./components/09-image/image";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Icon from "./components/12-icons/icon";
import Events from "./components/13-events/events";
import Shop from "./components/14-products/shop";
import State from "./components/15-usestate/state";
import Stateless from "./components/15-usestate/stateless";
import Counter from "./components/16-counter/counter";
import Birthday from "./components/17-birthday/birthday";
import UseEffect1 from "./components/18-useeffect/useeffect1";
import UseEffect2 from "./components/18-useeffect/useeffect2";
import Clock3 from "./components/19-clock3/clock3";
import CountryFilter from "./components/20-country-filter/country-filter";
import Scroll from "./components/21-useref/scroll";
import UseRef from "./components/21-useref/useref";
import ClassComp from "./components/22-class-type-component/class-comp";
import UserCards from "./components/23-fetch-users/user-cards";
import Countries from "./components/24-axios-countries/countries";
import ParentComp from "./components/25-child-to-parent/parent-comp";
import Form1 from "./components/26-forms/form1";
import Form2 from "./components/26-forms/form2";
import Form3 from "./components/26-forms/form3";
import Form4 from "./components/26-forms/form4";
import Form5 from "./components/26-forms/form5";
import Form6 from "./components/26-forms/form6";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Container fluid>
        <Row>
          <Col sm={2}>
            <Menu />
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/hello-world" element={<HelloWorld />} />
              <Route path="/hello-react" element={<HelloReact />} />
              <Route path="/jsx1" element={<Jsx1 />} />
              <Route path="/jsx2" element={<Jsx2 />} />
              <Route path="/jsx3" element={<Jsx3 />} />
              <Route path="/jsx4" element={<Jsx4 />} />
              <Route path="/jsx5" element={<Jsx5 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      {/*         
        
     
        <Jsx6 />
        <Jsx7/>
        <Style1/>
        <Style2/>
        <Style3/>
        <Style4/>
        <Clock1/>
        <Greetings/>
        <Products/>
        <Clock2 textColor="#56ff33" bgColor="#0012C3"/>
        <Image/>
        <Gallery/>
        <ProfileCard avatar="profile.jpg" name="Ali Gel" location="Turkey, Istanbul" shot="3" followers="23432" following="234"/>
        <BootstrapStatic/>
        <BootstrapDynamic/>
        <Icon/>
        <Events/>
        <Shop/>
        <Stateless/>
        <State/>
        <Counter/>
        <Birthday/>
        <UseEffect1/>
        <Clock3/>
        <UseEffect2/>
        <CountryFilter/>
        <UseRef/>
        <Scroll/>
        <ClassComp/>
        <UserCards/>
        <Countries/>
        <ParentComp/>
        <Form1/>
        <Form2/>
        <Form3/>
        <Form4/>
        <Form5/>
        <Form6/>
 */}
    </BrowserRouter>
  );
};
export default App;
