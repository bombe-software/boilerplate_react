import React, { Component } from 'react';
import axios from 'axios';
import { Form, Field } from "react-final-form";

import { renderTextField } from './generic/generic_form';

class Formulario extends Component {

    constructor(props){
        super(props);
        this.some = this.some.bind(this);
    }

    componentWillMount(){
        this.some();
    }

    async some() {
        /*
        axios.get('https://randomuser.me/api/', {
            params: {
                results: 10,
                inc: 'gender'
            }
        }).then(function ({data: {results}}) {
            alert('Prueba axios: ' + results[0].gender);
        }).catch(function (error) {
            alert('Ve la consola');
            console.log(error);
        });
        */
    }

    async onSubmit(values) {
        const { email } = values;
        alert(email)
    };

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.onSubmit}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Ingrese su email";
                        }
                        return errors;
                    }}
                    render={({ handleSubmit, reset, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="email"
                                component={renderTextField}
                                placeholder="Todo listo ;)"
                            />
                            <input type="submit" value="Enviar" />
                        </form>
                    )}
                />
            </ div>
        );
    }
}

export default Formulario;
