import React from "react";
import { storiesOf } from "@storybook/react";

import DomainIcon from "./DomainIcon";

storiesOf("Atoms/DomainIcon", module).add("DomainIcon", () => (
  <DomainIcon src="http://www.google.com/s2/favicons?domain=qiita.com" />
));
