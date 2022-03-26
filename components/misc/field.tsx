import { useState, useEffect } from "react";

type FieldArgs = {
    initValue: string
    label: string
    placeholder: string
    errorText: string
    inputType: string
    onChanged: (val: string) => void
    isValid: boolean,
    isTextArea?: boolean
    rows?: number
    columns?: number
    height?: number
}

const Field = ({ props }: { props: FieldArgs }) => {
    const [field, setField] = useState(props.initValue)
    const [showError, setShowError] = useState(false)
    var fasterField = props.initValue

    const fieldChanged = (event: any) => {
        fasterField = event.target.value
        setField(event.target.value)
        props.onChanged(event.target.value)
        if (fasterField !== "") {
            setShowError(true)
        }
    }

    const showMessage = () => {
        if (!props.isValid && showError) {
            return true
        } else {
            return false
        }
    }

    if (props.isTextArea ?? false) {
        return <div className="space-y-1 w-full">
            <div className="flex space-x-4 items-center justify-between">
                <h3 className="font-bold text-md ml-4 text-txtdk-400">
                    {props.label}
                </h3>
                {showMessage() ? <h3 className="text-red-300 font-medium text-md">{props.errorText}</h3> : <></>}
            </div>
            <textarea className={`${showMessage() ? "focus:border-red-300" : "focus:border-primary"} py-2 px-4 w-full bg-bgdk-800 rounded-md border-transparent border text-txt focus:outline-none overflow-y-scroll h-[500px]`} onChange={fieldChanged} placeholder={props.placeholder} rows={props.rows ?? 8} cols={props.columns ?? 50}></textarea>
        </div>
    } else {
        return (
            <div className="space-y-1 w-full">
                <div className="flex space-x-4 items-center justify-between">
                    <h3 className="font-bold text-md ml-4 text-txtdk-400">
                        {props.label}
                    </h3>
                    {showMessage() ? <h3 className="text-red-300 font-medium text-md">{props.errorText}</h3> : <></>}
                </div>
                <input className={`${showMessage() ? "focus:border-red-300" : "focus:border-primary"} py-2 px-4 w-full bg-bgdk-800 rounded-md border-transparent border text-txt focus:outline-none`} placeholder={props.placeholder} type={props.inputType} value={field} onChange={fieldChanged} />
            </div>
        )
    }
}

export default Field