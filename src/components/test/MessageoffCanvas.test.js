import React, { useState } from "react";
import CatalogItem, { image, name, category } from "../CatalogItem";
import { fireEvent, render, screen } from "@testing-library/react";


describe("CatalogItem", () => {
  it("should add item to localStorage", () => {
    const localStorageMock = jest.fn((key, item) => {
        window.localStorage.setItem(key, JSON.stringify(item));
      });

    const catalogItem = <CatalogItem image={image} name={name} category={category} />;
    const { getByText } = render(<div>catalogItem</div>);
    const button = screen.getByTestId("button");
    fireEvent.click(button);

    expect(localStorageMock).toHaveBeenCalledWith("items", JSON.stringify([name]));
  });
});
