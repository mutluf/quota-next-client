"use client"
import React from 'react'
import styles from './createbutton.module.css'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider} from "@nextui-org/react";
import Image from 'next/image'
import Pen from '../../../../public/pen.png'

const CreateButton = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
     
      <Divider/>
      <Button onPress={onOpen} className={styles.button}>
        <Image className={styles.img} src={Pen} alt='' />
        <Modal className={styles.modal} isOpen={isOpen} onOpenChange={onOpenChange}
        placement='center'
        shadow='lg'
        radius='lg'
        disableAnimation= {false}
        backdrop='blur'
        isKeyboardDismissDisabled= {true}
        isDismissable= {false}
        >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.

                  sldkjf
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </Button>
    </div>
  )
}

export default CreateButton
