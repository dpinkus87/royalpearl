import React from "react";
import CatalogItem from "../CatalogItem";
import { fireEvent, render, screen } from "@testing-library/react";


let localStorageMock;
const ogLocalStorage = global.localStorage;


describe("CatalogItem", () => {


  beforeEach(() => {
    localStorageMock = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };


    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true
    });
  });


  afterEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: ogLocalStorage,
      writable: true
    });
  });


  it("should add item to localStorage", async () => {
    const rickRollGif = 'https://media.tenor.com/nBt6RZkFJh8AAAAi/never-gonna.gif';
    const images = [rickRollGif, rickRollGif, rickRollGif];
    const name = 'McKay\'s McBaller Jesus Piece';
    const category = 'Bling Bling';


    render(<CatalogItem images={images} name={name} category={category} />);
    
    const button = screen.getByTestId("button");
    fireEvent.click(button);


    expect(localStorageMock.setItem).toHaveBeenCalledWith("items", JSON.stringify([name]));
  });

  it("should change images", async () => {
    const rickRollGif = 'https://media.tenor.com/nBt6RZkFJh8AAAAi/never-gonna.gif';
    const images = [rickRollGif, rickRollGif, rickRollGif];
    const name = 'McKay\'s McBaller Jesus Piece';
    const category = 'Bling Bling';

    render(<CatalogItem images={images} name={name} category={category} />);

    const firstImage = screen.getAllByRole("img")[0];
    expect(firstImage).toMatchSnapshot();

    const carouselButton = screen.getByTestId("button");
    fireEvent.click(carouselButton);

    const secondImage = screen.getAllByRole("img")[1];
    expect(secondImage).toMatchSnapshot();

    fireEvent.click(carouselButton);

    const thirdImage = screen.getAllByRole("img")[2];
    expect(thirdImage).toMatchSnapshot();
  })
  });
