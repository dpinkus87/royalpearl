import React from "react";
import CatalogItem from "../CatalogItem";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


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

  it("add active class to clicked image item", async () => {
    const rickRollGif = 'https://media.tenor.com/nBt6RZkFJh8AAAAi/never-gonna.gif';
    const rickRollGif2 = 'https://gfycat.com/gifs/tag/rickroll';
    const rickRollGif3 = 'https://gfycat.com/uncomfortablebeneficialcoyote';
    const images = [rickRollGif, rickRollGif2, rickRollGif3];
    const name = 'McKay\'s McBaller Jesus Piece';
    const category = 'Bling Bling';

  
    render(<CatalogItem images={images} name={name} category={category} />);
    const nextButton = screen.getByRole("button", { class: 'carousel-control-next' });

    const firstImage = screen.getAllByRole("img")[0];
    const secondImage = screen.getAllByRole("img")[1];
    
    expect(firstImage.firstChild).toHaveClass('active')
    
    fireEvent.click(nextButton);
    
    expect(firstImage.firstChild).not.toHaveClass('active')
    expect(secondImage.firstChild).toHaveClass('active')

  })
  });
