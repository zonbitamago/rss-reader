import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page/Page";
import * as electronUtil from "./util/electronUtil";

const rootDom = document.getElementById("root-dom");
ReactDOM.render(<Page electronUtil={electronUtil} />, rootDom);
