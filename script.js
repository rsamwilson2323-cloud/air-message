function init() {

  const colors = [
    {
      a: 'navy',
      b: '#fff',
      c: '#f3e412',
      d: '#0482d6',
    },
    {
      a: '#f83b3b',
      b: 'pink',
      c: 'yellow',
      d: '#fc65c9',
    },
    {
      a: '#fff',
      b: '#3b3bca',
      c: '#9953f5',
      d: '#67fdf1',
    },
    {
      a: 'navy',
      b: '#a6e1fc',
      c: '#9df312',
      d: '#ffef5d',
    }
  ]

  const planeSvg = () =>{
    const { a, b, c, d } = colors[Math.floor(Math.random() * colors.length)]
    return `<svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 52 26"><path fill="${a}" d="M 35 2h1v1h-1v-1"/> <path fill="${a}" d="M 42 2h1v1h-1v-1"/> <path fill="${a}" d="M 9 3h1v1h-1v-1"/> <path fill="${a}" d="M 16 3h1v1h-1v-1"/> <path fill="${a}" d="M 34 3h1v6h-1v-6"/> <path fill="${b}" d="M 35 3h1v1h1v1h4v-1h1v-1h1v6h-1v1h-6v-1h-1v-6"/> <path fill="${a}" d="M 36 3h1v1h-1v-1"/> <path fill="${a}" d="M 41 3h1v1h-1v-1"/> <path fill="${a}" d="M 43 3h1v6h-1v-6"/> <path fill="${a}" d="M 8 4h1v6h-1v-6"/> <path fill="${b}" d="M 9 4h1v1h1v1h4v-1h1v-1h1v6h-1v1h-6v-1h-1v-6"/> <path fill="${a}" d="M 10 4h1v1h-1v-1"/> <path fill="${a}" d="M 15 4h1v1h-1v-1"/> <path fill="${a}" d="M 17 4h1v6h-1v-6"/> <path fill="${a}" d="M 37 4h4v1h-4v-1"/> <path fill="${a}" d="M 11 5h4v1h-4v-1"/> <path fill="${c}" d="M 23 6h2v6h-1v-1h-1v-1h-3v-1h1v-1h1v-1h1v-1"/> <path fill="${a}" d="M 36 6h1v2h-1v-2"/> <path fill="${a}" d="M 41 6h1v2h-1v-2"/> <path fill="${c}" d="M 49 6h2v6h-1v-1h-1v-1h-3v-1h1v-1h1v-1h1v-1"/> <path fill="${a}" d="M 10 7h1v2h-1v-2"/> <path fill="${a}" d="M 15 7h1v2h-1v-2"/> <path fill="${a}" d="M 38 8h2v1h-2v-1"/> <path fill="${a}" d="M 12 9h2v1h-2v-1"/> <path fill="${a}" d="M 35 9h1v1h-1v-1"/> <path fill="${a}" d="M 42 9h1v1h-1v-1"/> <path fill="${d}" d="M 5 10h3v1h1v1h1v1h6v-1h1v-1h1v-1h5v1h1v1h1v2h-4v1h1v1h1v1h-1v1h-5v-3h-1v-1h-6v1h-1v3h-6v-1h-1v-1h-1v-3h1v-1h1v-1h2v-1"/> <path fill="${c}" d="M 8 10h1v1h-1v-1"/> <path fill="${a}" d="M 9 10h1v1h-1v-1"/> <path fill="${a}" d="M 16 10h1v1h-1v-1"/> <path fill="${c}" d="M 17 10h1v1h-1v-1"/> <path fill="${d}" d="M 31 10h3v1h1v1h1v1h6v-1h1v-1h1v-1h5v1h1v1h1v2h-4v1h1v1h1v1h-1v1h-5v-3h-1v-1h-6v1h-1v3h-6v-1h-1v-1h-1v-3h1v-1h1v-1h2v-1"/> <path fill="${c}" d="M 34 10h1v1h-1v-1"/> <path fill="${b}" d="M 35 10h1v1h-1v-1"/> <path fill="${a}" d="M 36 10h6v1h-6v-1"/> <path fill="${b}" d="M 42 10h1v1h-1v-1"/> <path fill="${c}" d="M 43 10h1v1h-1v-1"/> <path fill="${c}" d="M 9 11h1v1h-1v-1"/> <path fill="${a}" d="M 10 11h6v1h-6v-1"/> <path fill="${c}" d="M 16 11h1v1h-1v-1"/> <path fill="${c}" d="M 35 11h1v1h-1v-1"/> <path fill="${b}" d="M 36 11h6v1h-6v-1"/> <path fill="${c}" d="M 42 11h1v1h-1v-1"/> <path fill="${c}" d="M 10 12h6v1h-6v-1"/> <path fill="${c}" d="M 36 12h6v1h-6v-1"/> <path fill="${c}" d="M 10 14h6v1h1v7h-1v1h-3v-1h-1v-1h-1v-1h-1v-1h-1v-4h1v-1"/> <path fill="${c}" d="M 21 14h4v4h-1v-1h-1v-1h-1v-1h-1v-1"/> <path fill="${c}" d="M 36 14h6v1h1v7h-1v1h-3v-1h-1v-1h-1v-1h-1v-1h-1v-4h1v-1"/> <path fill="${c}" d="M 47 14h4v4h-1v-1h-1v-1h-1v-1h-1v-1"/></svg>`
  }

  const rope = () =>{
    const a = '#fff'
    return `
    <div class="rope">
      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 26 26">
        <path fill="${a}" d="M 24 9h1v1h-1v-1"/> <path fill="${a}" d="M 23 10h1v1h-1v-1"/> <path fill="${a}" d="M 22 11h1v1h-1v-1"/> <path fill="${a}" d="M 21 12h1v1h-1v-1"/> <path fill="${a}" d="M 1 13h20v1h-20v-1"/> <path fill="${a}" d="M 21 14h1v1h-1v-1"/> <path fill="${a}" d="M 22 15h1v1h-1v-1"/> <path fill="${a}" d="M 23 16h1v1h-1v-1"/> <path fill="${a}" d="M 24 17h1v1h-1v-1"/>
      </svg>
    </div>`
  }
  
  const planeTimer = []
  const wrapper = document.querySelector('.wrapper')
  const cellD = 60
  const topValues = [0.5,1.5,2.5,3.5]
  let bannerContent = 'Hi,#write#something#in#the#box#and#click#\'create\''
  const banners = []
  let spriteId = 0
  let topIndex = 3
  let count = 0
  let bannerIndex = 0
  
  const animate = (actor, frame, cellD) =>{
    const leftV = +(actor.style.left).replace('px','')
    let newLeftV = leftV - cellD
    newLeftV = newLeftV < ((-1 * (frame - 1)) * cellD) ? 0 : newLeftV
    actor.style.left = `${newLeftV}px`
  }
  
  const bop = (actors, index) =>{
    const actor = actors[index]
    const motion = 6
    const topV = actor.dataset.top ? actor.dataset.top : motion
    const newTopV = +topV === motion ? -motion : motion
    actor.style.top = `${newTopV}px`
    actor.dataset.top = newTopV
    if (actor.classList.contains('front')) actor.childNodes[3].style.transform = `rotate(${newTopV / (motion / -2)}deg)`
    setTimeout(()=>{
      const newIndex = index >= (actors.length - 1) ? 0 : index + 1
      bop(actors,newIndex)
    },120)
  }

  const mapModules = words =>{
    return words.map(word =>{
      return `
      <div class="message module module_${spriteId}">
        ${word}
      </div>
      `
    }).join('')
  }

  const createPlane = sentence =>{
    const plane = document.createElement('div')
    spriteId++
    plane.classList.add('plane_wrapper')
    plane.innerHTML = `
    <div class="front module module_${spriteId}">
      <div class="sprite_container">
        <div class="sprite sprite_${spriteId}">
          ${planeSvg()}
        </div>    
      </div>
      ${rope()}
    </div>    
    ${mapModules(sentence.split(' '))}
    `
    wrapper.append(plane)
    const sprite = document.querySelector(`.sprite_${spriteId}`)
    setInterval(()=>{
      animate(sprite, 2, cellD)
    },200)
    const modules = document.querySelectorAll(`.module_${spriteId}`)
    bop(modules,0)
    topIndex = (topIndex + 1) < topValues.length
      ? topIndex + 1
      : 0

    if (count === banners.length) {
      topIndex = 0
      count = 0
      return
    }
    plane.style.top = `${topValues[topIndex] * plane.offsetHeight + (20 * topValues[topIndex])}px`

    plane.style.left = '100%'
    plane.style.transition = '6s ease'
    
    planeTimer[bannerIndex].timerOne = setTimeout(()=>{
      plane.style.left = '10%'
    },100)
    planeTimer[bannerIndex].timerTwo = setTimeout(()=>{
      plane.style.left = `-${plane.offsetWidth + 200}px`
    },8000)
    planeTimer[bannerIndex].timerThree = setTimeout(()=>{
      wrapper.removeChild(plane)
      const planeNo = document.querySelectorAll('.plane_wrapper').length
      if ((count === banners.length && planeNo < banners.length)){
        topIndex = 3
        count = 0
        createPlanes()
      }
    }, 30000)
  }

  const calcWrapIndex = () =>{
    const flexWrapper = document.querySelector('.flex_wrapper')
    const wrapIndex = []
    flexWrapper.innerHTML = bannerContent.split('#').map(word=>{
      return `
        <div class="message_ghost">
          ${word}
        </div>
      `
    }).join('')
    const messageGhosts = document.querySelectorAll('.message_ghost')
    messageGhosts.forEach((message,i)=>{
      if (i === (messageGhosts.length - 1)) return
      if (message.getBoundingClientRect().y < messageGhosts[i + 1].getBoundingClientRect().y){
        wrapIndex.push(i)
      }
    })
    return wrapIndex
  }
  
  const splitTextForBanners = () =>{
    //* banners populated based on page width
    banners.length = 0
    const word = []
    const wrapIndex = calcWrapIndex()
    let hashCount = -1
    bannerContent.split('').forEach((letter,i)=>{
      if (letter === '#') hashCount++
      word.push(letter)
      if ((wrapIndex.find(i=>i === hashCount) && letter === '#')){
        banners.push(word.join(''))
        word.length = 0
      }
      if (i === (bannerContent.length - 1)) banners.push(word.join(''))
    })
  }

  const createTimers = () =>{
    planeTimer.length = 0
    banners.forEach(()=>{
      planeTimer.push({
        timerOne: null,
        timerTwo: null,
        timerThree: null,
      })
    })
  }
  
  const createPlanes = () =>{  
    const bannerText = banners[bannerIndex].split('').reverse().join('')[0] === '#'
      ? banners[bannerIndex]
      : banners[bannerIndex] += '#'

    if (bannerText !== '#') createPlane(bannerText.replaceAll('#',' '))
    bannerIndex = (bannerIndex + 1) < banners.length
      ? bannerIndex + 1
      : 0 

    if (bannerIndex === 0) spriteId = 0

    count++
    setTimeout(()=>{
      if (count === banners.length) return
      createPlanes()
    },3000)
  }

  const resetPlanes = () =>{
    planeTimer.forEach(timers=>{
      clearTimeout(timers.timerOne)
      clearTimeout(timers.timerTwo)
      clearTimeout(timers.timerThree)
    })
    wrapper.innerHTML = ''
    spriteId = 0
    topIndex = 3
    count = 0
    bannerIndex = 0
    splitTextForBanners()
    createTimers()
    createPlanes()
  }
  
  splitTextForBanners()
  createTimers()
  createPlanes()

  window.addEventListener('resize', resetPlanes)
  
  
  //* create new message
  const textarea = document.querySelector('textarea')
  const createButton = document.querySelector('button')
  textarea.addEventListener('change',()=>{
    bannerContent = textarea.value.replaceAll('#','&num;').replaceAll(' ','#')
  })
  createButton.addEventListener('click',resetPlanes)

}

window.addEventListener('DOMContentLoaded', init)