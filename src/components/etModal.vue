<template>
  <q-modal v-model="isModalOpened" :content-css="{minWidth:'75vw', minHeight:'80vh'}">
    <q-modal-layout>
        <q-toolbar slot="header" color="tertiary">
          <q-btn
            flat
            round
            dense
            v-close-overlay
            inverted
            icon="keyboard_arrow_left"
            class="q-mr-sm"
          />
          <q-btn color="orange-10">
            <q-icon name="save" size="25px"/>
            <q-spinner-pie slot="loading" size="25px"/>
          </q-btn>
          <q-toolbar-title>
            {{getEditingRow.name}}
          </q-toolbar-title>
        </q-toolbar>
        <div class="layout-padding">
          <q-field class="q-mb-md" :key="field.name" v-for="field in getFields" v-if="!field.hidden" :label-width="3" :icon="field.icon" :label="field.label" :helper="field.desc" error-label="Some error">
            <q-input :value="getEditingRow[field.name]" :type="field.type" color="orange-10" />
          </q-field>
        </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    type: {
      default: 'xxx',
      type: String,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('product', ['getFields', 'getEditingRow']),
    isModalOpened: {
      get() {
        return this.$store.getters[this.type + '/getIsModalOpened']
      },
      set(val) {
        this.$store.commit(this.type + '/setIsModalOpened', val)
      },
    },
  },
}
</script>

<style>
</style>
