import React from 'react'
import Button from './Button'
import Form from './Form'
import Input from './Input'
import Label from './Label'

function SubscriptionForm({ form }) {
  return (
    <Form style={form.style} form={form}>
    {form.fields.items.map((field) => (
      <>
        <Label>{field.label}</Label>
        <Input field={field} style={form.fields.style} />
      </>
    ))}
    <Button style={form.submitButton.style} element={form.submitButton}>
      {form.submitButton.content}
    </Button>
  </Form>
  )
}

export default SubscriptionForm