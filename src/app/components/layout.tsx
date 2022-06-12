import { Component } from 'solid-js'

export const Layout: Component = props => {
  return (
    <div className="text-white">
      <header className="flex px-4 py-4 border border-white">
        <div className="ml-auto">
          <nav className="items-center hidden gap-6 lg:flex">
            <a className="text-xl">เกี่ยวกับหมอหมึก</a>
            <a className="text-xl">บทความ</a>
            <a className="text-xl">จองคิว</a>
          </nav>
          <button class="flex m lg:hidden w-12 h-12 justify-center items-center rounded-lg border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="iconify iconify--radix-icons"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div>{props.children}</div>
    </div>
  )
}
