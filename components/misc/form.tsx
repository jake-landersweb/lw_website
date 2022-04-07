import { useState } from "react"
import Field from "./field"

type FormProps = {
    title: string
}

const Form = ({ props }: { props: FormProps }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const nameIsValid = () => {
        return name !== ""
    }
    const emailIsValid = () => {
        return email !== ""
    }
    const messageIsValid = () => {
        return message !== ""
    }

    const sendMessage = () => {

    }

    return <>
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">
                {props.title}
            </h2>
            <div className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Field props={{
                        initValue: "",
                        label: "Name",
                        placeholder: "Name",
                        errorText: "Name cannot be empty",
                        inputType: "",
                        onChanged: function (val: string) {
                            console.log(val)
                            setName(val)
                        },
                        isValid: nameIsValid(),
                    }} />
                    <Field props={{
                        initValue: "",
                        label: "Email",
                        placeholder: "user@email.com",
                        errorText: "Email cannot be empty",
                        inputType: "",
                        onChanged: function (val: string) {
                            console.log(val)
                            setEmail(val)
                        },
                        isValid: emailIsValid(),
                    }} />
                </div>
                <Field props={{
                    initValue: "",
                    label: "Your Vision",
                    placeholder: "Rule the world ...",
                    errorText: "Vision cannot be empty",
                    inputType: "",
                    onChanged: function (val: string) {
                        console.log(val)
                        setMessage(val)
                    },
                    isValid: messageIsValid(),
                    isTextArea: true,
                    rows: 20,
                }} />
                <div className="grid place-items-center">
                    <button>
                        <h3 className="bg-primary text-bgdk-900 px-4 py-2 rounded-md hover:opacity-50 transition-opacity">
                            Send Message
                        </h3>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Form