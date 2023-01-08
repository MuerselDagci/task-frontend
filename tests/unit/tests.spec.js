import { mount } from '@vue/test-utils'
import TasksCardList from "@/components/TasksCardList";


describe('Testing TaskCardList.vue', () => {
  it('render task', () => {
    // when
    const wrapper = mount(TasksCardList, {
      propsData: {
        tasks: [
          {
            id:2,
            titel: '',
            beschreibung: '',
            status: '',
            wiederholung: '',
            duedate: '',
            mitarbeiter: ''
          },
          {
            id:3,
            titel: '',
            beschreibung: '',
            status: '',
            wiederholung: '',
            duedate: '',
            mitarbeiter: ''
          }
        ]
      }
    })
    const TaskCardList = wrapper.findAllComponents(TaskCardList)
    expect(TaskCard.length).toBe(2)
  })
  it('filters tasks by status', () => {
    const wrapper = shallowMount(TasksCardList, {
      propsData: {
        tasks: [
          { id: 1, status: 'task' },
          { id: 2, status: 'task' },
          { id: 3, status: 'büro' }
        ],
        SearchTerm: ''
      }
    })

    wrapper.setData({ localSearchTerm: 'task' })
    const filteredTasks = wrapper.vm.filteredTasks

    expect(filteredTasks).toContainEqual({ id: 1, status: 'task' })
    expect(filteredTasks).toContainEqual({ id: 3, status: 'büro' })
  })

  it('delete task', () => {

    const wrapper = shallowMount(TasksCardList, {
      propsData: {
        tasks: [
          { id: 1, status: 'task1' },
          { id: 2, status: 'task2' },
          { id: 3, status: 'task3' }
        ],
        SearchTerm: ''
      }
    })

    wrapper.vm.deleteTask({ id: 2, status: 'task2' })


    expect(wrapper.vm.tasks).toHaveLength(2)
    expect(wrapper.vm.tasks).not.toContainEqual({ id: 2, status: 'task2' })
  })
})
