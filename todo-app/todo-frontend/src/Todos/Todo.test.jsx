import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Todo from './Todo'

describe('Todo', () => {
  it('renders a pending todo and handles its actions', () => {
    const todo = { _id: '1', text: 'Learn Docker', done: false }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

    expect(screen.getByText('Learn Docker')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Set as done' }))
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }))

    expect(completeTodo).toHaveBeenCalledWith(todo)
    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })
})