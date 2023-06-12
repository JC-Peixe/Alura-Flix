import { Container } from "@mui/material";
import React, { useState } from "react";
import {
    FieldContainer,
    FormStyled,
    Invalid,
    TitleForm,
  } from "../../Form";
import TextSmall from "../../Form/TextSmall";
import TextLarge from "../../Form/TextLarge";
import ColorInput from "../../Form/ColorInput";
import ButtonsForm from "../../Form/ButtonsForm";

import CategoriesList from "../../CategoriesList";
import { MarginLarge } from "../../UI";

export default function NewCategory ({
    categoryData,
    submitFunction,
    deleteCategory,
    editCategory,
    deleteVideo,
    sortCategory,
  }){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("#000000");
    const [error, setError] = useState("");
  
    function renderInvalid(name, value, setFunction, label) {
      let newError = {};
  
      if (value.replace(/\s/g, "") === "") {
        newError[name] = <Invalid>{label} é obrigatório.</Invalid>;
        setFunction("");
      } else newError[name] = "";
  
      setError({ ...error, ...newError });
    }
  
    function clearInputs() {
      setName("");
      setDescription("");
      setColor("#000000");
      setError("");
    }
  
    function checkRepeatCategory(category) {
      let repeat = false;
  
      categoryData.map((data) => {
        if (data.category === category) {
          setError({ name: <Invalid>Categoria já existente.</Invalid> });
          repeat = true;
        }
        return data;
      });
  
      return repeat;
    }
    return(<main>
        <FormStyled
          onSubmit={(e) => {
            e.preventDefault();
  
            if (!checkRepeatCategory(name)) {
              submitFunction(name, color, description);
              clearInputs();
              window.scrollTo(0, document.body.scrollHeight);
            }
          }}
        >
          <TitleForm>Nova Categoria</TitleForm>
          <Container>
            <FieldContainer>
              <TextSmall
                name="name"
                label="Nome"
                type="text"
                value={name}
                setFunction={setName}
                invalidFunction={renderInvalid}
              />
              {error.name}
            </FieldContainer>
  
            <ColorInput value={color} setFunction={setColor} />
          </Container>
  
          <FieldContainer>
            <TextLarge
              name="description"
              label="Descrição"
              type="text"
              value={description}
              setFunction={setDescription}
              invalidFunction={renderInvalid}
            />
            {error.description}
          </FieldContainer>
  
          <ButtonsForm clearFunction={clearInputs} />
        </FormStyled>
  
        <CategoriesList
          data={categoryData}
          deleteCategory={deleteCategory}
          editCategory={editCategory}
          deleteVideo={deleteVideo}
          sortCategory={sortCategory}
        />
        <MarginLarge />
      </main>)
}