import * as $ from 'jquery'
import Post from '@models/post'
import './styles/style.css'
import json from '@/assets/json.json'
import image from '@/assets/front.png'


const post = new Post('Webpack Post Title', image)

$('pre').html(post.toString())

// console.log('Post to string: ', post.toString())
// console.log('JSON:', JSON.stringify(json))