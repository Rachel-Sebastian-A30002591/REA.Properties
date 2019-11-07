import React from "react";
import ReactDOM from "react-dom";
import PropertyCard from "../property-card";
import { PropertyTypes } from "../../enums/property-type";
import { Property } from "../../redux-core/types";
import { shallow, configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const property: Property = {
  price: "$726,500",
  agency: {
    logo:
      "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
    brandingColors: {
      primary: "#ffe512"
    }
  },
  id: 1,
  mainImage:
    "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
};

const handleClick = (type: string, property: Property) => {};

it("renders without crashing with action button as Add", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PropertyCard
      property={property}
      type={PropertyTypes.Add}
      actionButton={true}
      onActionClick={handleClick}
    ></PropertyCard>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing without action button as Add", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PropertyCard
      property={property}
      type={PropertyTypes.Add}
      actionButton={false}
      onActionClick={handleClick}
    ></PropertyCard>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing with action button as Remove", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PropertyCard
      property={property}
      type={PropertyTypes.Remove}
      actionButton={true}
      onActionClick={handleClick}
    ></PropertyCard>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Test click event Add", () => {
  const mockCallBack = jest.fn();
  const button = shallow(
    <PropertyCard
      property={property}
      type={PropertyTypes.Add}
      actionButton={true}
      onActionClick={handleClick}
    ></PropertyCard>
  );
  button.find("button").simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(0);
});

it("Test click event Add", () => {
  const mockCallBack = jest.fn();
  const button = shallow(
    <PropertyCard
      property={property}
      type={PropertyTypes.Remove}
      actionButton={true}
      onActionClick={handleClick}
    ></PropertyCard>
  );
  button.find("button").simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(0);
});
