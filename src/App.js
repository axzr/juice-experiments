import styled from "styled-components";

import "./styles.css";

import Sidebar from "./windows/Sidebar";
import Main from "./windows/Main";
import LogView from "./windows/LogView";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  background: green;
`;

const LayoutSidebar = styled.div`
  width: 20%;
  min-width: 25ch;

  background: blue;
`;

const LayoutBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LayoutMain = styled.div`
  height: calc(100vh - 20ch);

  background: yellow;
`;

const LayoutLogView = styled.div`
  height: 20ch;

  background: cyan;
`;

export default function App() {
  return (
    <Layout>
      <LayoutSidebar>
        <Sidebar />
      </LayoutSidebar>
      <LayoutBody>
        <LayoutMain>
          <Main />
        </LayoutMain>
        <LayoutLogView>
          <LogView />
        </LayoutLogView>
      </LayoutBody>
    </Layout>
  );
}
