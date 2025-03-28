import { useState } from 'react'

export default function TestFormAsk({ ask, index, register }) {
  const [currentValue, setCurrentValue] = useState('5')

  return (
    <div className="mb-3 w-100">
      <label htmlFor={`ask${index}`} className="form-label mb-3">
        - {ask}
      </label>
      <div className="d-flex justify-content-between">
        <strong>{currentValue}</strong>
        <strong>10</strong>
      </div>
      <input
        type="range"
        className="form-range"
        min="1"
        max="10"
        step="1"
        onInput={(e) => setCurrentValue(e.target.value)}
        defaultValue={currentValue}
        id={`ask${index}`}
        {...register(`ask${index}`)}
      />
    </div>
  )
}
