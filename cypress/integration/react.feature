@regresion
Feature: Ingresar a la pagina REACT
I want to login in React page 
    @loginReact
    Scenario: React Login
        Given que Yeison quiere ingresar a la pagina de React
        |url                                                 |
        |http://react-redux.realworld.io/#/login?_k=cur8bs   |
        When el escribes sus credenciales
        |username               | password      |
        |yfarias@gmail.com      | yfarias1      |
        Then el debria ver el mensaje "Your Feed" 
