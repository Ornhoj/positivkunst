import React from 'react'
import { FaChevronRight } from "react-icons/fa"
import {BlockDecoratorProps, defineArrayMember, defineField, defineType} from 'sanity'

const floatRender = (props: BlockDecoratorProps) => (<span style={{float: 'right'}}>{props.children}</span>)

export default defineType({
  name: 'rte',
  type: 'array',
  title: 'Rich Text Editor',
  of: [
    defineArrayMember({
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        // {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          // {title: 'Float', value: 'float', blockEditor: {icon: floatIcon, render: floatRender}}
          {title: 'Float', value: 'float', component: floatRender, icon: FaChevronRight }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({scheme: ['tel', 'mailto', 'http', 'https']})
              })
            ]
          }
        ]
      }
    })
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   type: 'image',
    //   options: {hotspot: true}
    // }
  ]
})
