import React, { useContext, useState } from 'react'
import "./create.css"
import List from './list'
import Context from './context'

function Create() {

    const [form, setform] = useState({ name: "", coin: "" })
    const [list, setlist] = useState([])

    const update = (e) => {
        const { name, value } = e.target;
        setform((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const submit = (e) => {
        e.preventDefault()
        setlist((prevlist) => [...prevlist, form])
    }
    return (
        <Context.Provider value={list}>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-sm-12">

                        <div class="form-card1">
                            <div class="form-card2">
                                <form class="form" onSubmit={submit}>
                                    <p class="form-heading">Get In Touch</p>

                                    <div class="form-field">
                                        <input required="" placeholder="Name" class="input-field" type="text" value={form.name} onChange={update} name='name' />
                                    </div>


                                    <div class="form-field">
                                        <input required="" placeholder="Coin" class="input-field" type="text" value={form.coin} onChange={update} name='coin' />
                                    </div>


                                    <button class="sendMessage-btn" type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <List />
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

export default Create