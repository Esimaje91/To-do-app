import React from "react";
import Container from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import AddTodo from "../Components/add_todo/AddTodo";
import Todo_list from "../Components/Todo_list/Todolist";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <Todo_list />
      <Footer />
    </Container>
  );
}
