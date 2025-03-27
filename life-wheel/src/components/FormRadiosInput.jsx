export default function FormRadiosInput({ name, askId, inputRef }) {
  let inputs = []

  function FormRadio({ name, i }) {
    return (
      <div class="form-check form-check-inline">
        <input
          ref={inputRef}
          class="form-check-input"
          type="radio"
          name={name + 'ask' + askId}
          id={'inlineRadio' + i}
          value={i}
        />
        <label class="form-check-label" for={'inlineRadio' + i}>
          {i}
        </label>
      </div>
    )
  }

  for (let i = 1; i <= 10; i++) {
    inputs.push(i)
  }
  return (
    <>
      {inputs.map((input) => (
        <FormRadio name={name} i={input} />
      ))}
    </>
  )
}
