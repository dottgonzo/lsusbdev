#!/usr/bin/env node
import Usb from "../index";

Usb().then(function (data) {
  console.log(data);
});
