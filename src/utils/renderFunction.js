import React, { createElement } from "react";
import Section from "../components/Section";
import Row from "../components/Row";
import Column from "../components/Column";
import Title from "../components/Title";
import Text from "../components/Text";
import Image from "../components/Image";
import SubscriptionForm from "../components/SubscriptionForm";
import Button from "../components/Button";
const keysToComponentMap = {
  Section,
  Row,
  Column,
  Title,
  Text,
  Image,
  SubscriptionForm,
  Button,
};
const renderComponent = (element) => {
  const { name } = element;
  // if (typeof keysToComponentMap[name] !== "undefined") {
  return createElement(
    keysToComponentMap[name.includes(" ") ? name.replace(/\s/g, "") : name],
    {
      style: element.style,
      attr: element.attr,
      form: element.form,
      element: element,
    },
    Array.isArray(element.content)
      ? element.content.map((row) => renderComponent(row))
      : element.content
  );
  // }
};

export default renderComponent;
