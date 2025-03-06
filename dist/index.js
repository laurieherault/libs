// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = import.meta.require;

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {
    }
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    function isValidElementType(type) {
      return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) ? true : false;
    }
    function disabledLog() {
    }
    function disableLogs() {
      if (disabledDepth === 0) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (disabledDepth === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (prefix === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry)
        return "";
      var frame = componentFrameCache.get(fn);
      if (frame !== undefined)
        return frame;
      reentry = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      typeof fn === "function" && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (type == null)
        return "";
      if (typeof type === "function") {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if (typeof type === "string")
        return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return type = describeNativeComponentFrame(type.render, false), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {
            }
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props);
      newKey._store.validated = oldElement._store.validated;
      return newKey;
    }
    function validateChildKeys(node, parentType) {
      if (typeof node === "object" && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
        if (isArrayImpl(node))
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (i = getIteratorFn(node), typeof i === "function" && i !== node.entries && (i = i.call(node), i !== node))
          for (;!(node = i.next()).done; )
            isValidElement(node.value) && validateExplicitKey(node.value, parentType);
      }
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && element.key == null && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && element._owner != null && element._owner !== getOwner() && (childOwner = null, typeof element._owner.tag === "number" ? childOwner = getComponentNameFromType(element._owner.type) : typeof element._owner.name === "string" && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function() {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "", owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = `

Check the render method of \`` + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = `

Check the top-level render call using <` + parentType + ">.");
      return info;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {
    }
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null
    }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = true;
    var prefix, suffix, reentry = false;
    var componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map);
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$2) {
                  ReactSharedInternals.thrownErrors.push(error$2);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props);
      for (key = 2;key < arguments.length; key++)
        validateChildKeys(arguments[key], props.type);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      if (isValidElementType(type))
        for (var i = 2;i < arguments.length; i++)
          validateChildKeys(arguments[i], type);
      else {
        i = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        if (type === null)
          var typeString = "null";
        else
          isArrayImpl(type) ? typeString = "array" : type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
        console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, i);
      }
      var propName;
      i = {};
      typeString = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      typeString && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, typeString, undefined, undefined, getOwner(), i);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      isValidElementType(type) || console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return resolveDispatcher().useEffect(create, deps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.0.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {
  } else {
    module.exports = react_development;
  }
});

// node_modules/@noble/hashes/_assert.js
var require__assert = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.anumber = anumber;
  exports.abytes = abytes;
  exports.ahash = ahash;
  exports.aexists = aexists;
  exports.aoutput = aoutput;
  function anumber(n2) {
    if (!Number.isSafeInteger(n2) || n2 < 0)
      throw new Error("positive integer expected, got " + n2);
  }
  function isBytes(a2) {
    return a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array";
  }
  function abytes(b2, ...lengths) {
    if (!isBytes(b2))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b2.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b2.length);
  }
  function ahash(h2) {
    if (typeof h2 !== "function" || typeof h2.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    anumber(h2.outputLen);
    anumber(h2.blockLen);
  }
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error("digestInto() expects output buffer of length at least " + min);
    }
  }
});

// node_modules/@noble/hashes/_u64.js
var require__u64 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = undefined;
  exports.fromBig = fromBig;
  exports.split = split;
  exports.add = add;
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n2, le3 = false) {
    if (le3)
      return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
    return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
  }
  function split(lst, le3 = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i2 = 0;i2 < lst.length; i2++) {
      const { h: h2, l: l2 } = fromBig(lst[i2], le3);
      [Ah[i2], Al[i2]] = [h2, l2];
    }
    return [Ah, Al];
  }
  var toBig = (h2, l2) => BigInt(h2 >>> 0) << _32n | BigInt(l2 >>> 0);
  exports.toBig = toBig;
  var shrSH = (h2, _l, s2) => h2 >>> s2;
  exports.shrSH = shrSH;
  var shrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
  exports.shrSL = shrSL;
  var rotrSH = (h2, l2, s2) => h2 >>> s2 | l2 << 32 - s2;
  exports.rotrSH = rotrSH;
  var rotrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
  exports.rotrSL = rotrSL;
  var rotrBH = (h2, l2, s2) => h2 << 64 - s2 | l2 >>> s2 - 32;
  exports.rotrBH = rotrBH;
  var rotrBL = (h2, l2, s2) => h2 >>> s2 - 32 | l2 << 64 - s2;
  exports.rotrBL = rotrBL;
  var rotr32H = (_h, l2) => l2;
  exports.rotr32H = rotr32H;
  var rotr32L = (h2, _l) => h2;
  exports.rotr32L = rotr32L;
  var rotlSH = (h2, l2, s2) => h2 << s2 | l2 >>> 32 - s2;
  exports.rotlSH = rotlSH;
  var rotlSL = (h2, l2, s2) => l2 << s2 | h2 >>> 32 - s2;
  exports.rotlSL = rotlSL;
  var rotlBH = (h2, l2, s2) => l2 << s2 - 32 | h2 >>> 64 - s2;
  exports.rotlBH = rotlBH;
  var rotlBL = (h2, l2, s2) => h2 << s2 - 32 | l2 >>> 64 - s2;
  exports.rotlBL = rotlBL;
  function add(Ah, Al, Bh, Bl) {
    const l2 = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
  }
  var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  exports.add3L = add3L;
  var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  exports.add3H = add3H;
  var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  exports.add4L = add4L;
  var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  exports.add4H = add4H;
  var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  exports.add5L = add5L;
  var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  exports.add5H = add5H;
  var u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  exports.default = u64;
});

// node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.crypto = undefined;
  var nc = __require("crypto");
  exports.crypto = nc && typeof nc === "object" && "webcrypto" in nc ? nc.webcrypto : nc && typeof nc === "object" && ("randomBytes" in nc) ? nc : undefined;
});

// node_modules/@noble/hashes/utils.js
var require_utils = __commonJS((exports) => {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.isLE = undefined;
  exports.isBytes = isBytes;
  exports.u8 = u8;
  exports.u32 = u32;
  exports.createView = createView;
  exports.rotr = rotr;
  exports.rotl = rotl;
  exports.byteSwap = byteSwap;
  exports.byteSwap32 = byteSwap32;
  exports.bytesToHex = bytesToHex;
  exports.hexToBytes = hexToBytes;
  exports.asyncLoop = asyncLoop;
  exports.utf8ToBytes = utf8ToBytes;
  exports.toBytes = toBytes;
  exports.concatBytes = concatBytes;
  exports.checkOpts = checkOpts;
  exports.wrapConstructor = wrapConstructor;
  exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
  exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
  exports.randomBytes = randomBytes;
  var crypto_1 = require_cryptoNode();
  var _assert_js_1 = require__assert();
  function isBytes(a2) {
    return a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array";
  }
  function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  }
  function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
  }
  exports.isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
  function byteSwap(word) {
    return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
  }
  exports.byteSwapIfBE = exports.isLE ? (n2) => n2 : (n2) => byteSwap(n2);
  function byteSwap32(arr) {
    for (let i2 = 0;i2 < arr.length; i2++) {
      arr[i2] = byteSwap(arr[i2]);
    }
  }
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
  function bytesToHex(bytes) {
    (0, _assert_js_1.abytes)(bytes);
    let hex = "";
    for (let i2 = 0;i2 < bytes.length; i2++) {
      hex += hexes[bytes[i2]];
    }
    return hex;
  }
  var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
      return ch - asciis._0;
    if (ch >= asciis.A && ch <= asciis.F)
      return ch - (asciis.A - 10);
    if (ch >= asciis.a && ch <= asciis.f)
      return ch - (asciis.a - 10);
    return;
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0;ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === undefined || n2 === undefined) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  var nextTick = async () => {
  };
  exports.nextTick = nextTick;
  async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i2 = 0;i2 < iters; i2++) {
      cb(i2);
      const diff = Date.now() - ts;
      if (diff >= 0 && diff < tick)
        continue;
      await (0, exports.nextTick)();
      ts += diff;
    }
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error("utf8ToBytes expected string, got " + typeof str);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    (0, _assert_js_1.abytes)(data);
    return data;
  }
  function concatBytes(...arrays) {
    let sum = 0;
    for (let i2 = 0;i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      (0, _assert_js_1.abytes)(a2);
      sum += a2.length;
    }
    const res = new Uint8Array(sum);
    for (let i2 = 0, pad = 0;i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      res.set(a2, pad);
      pad += a2.length;
    }
    return res;
  }

  class Hash2 {
    clone() {
      return this._cloneInto();
    }
  }
  exports.Hash = Hash2;
  function checkOpts(defaults, opts) {
    if (opts !== undefined && {}.toString.call(opts) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
  }
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
      return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === "function") {
      return crypto_1.crypto.randomBytes(bytesLength);
    }
    throw new Error("crypto.getRandomValues must be defined");
  }
});

// node_modules/@noble/hashes/sha3.js
var require_sha3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = undefined;
  exports.keccakP = keccakP;
  var _assert_js_1 = require__assert();
  var _u64_js_1 = require__u64();
  var utils_js_1 = require_utils();
  var SHA3_PI = [];
  var SHA3_ROTL = [];
  var _SHA3_IOTA = [];
  var _0n = /* @__PURE__ */ BigInt(0);
  var _1n = /* @__PURE__ */ BigInt(1);
  var _2n = /* @__PURE__ */ BigInt(2);
  var _7n = /* @__PURE__ */ BigInt(7);
  var _256n = /* @__PURE__ */ BigInt(256);
  var _0x71n = /* @__PURE__ */ BigInt(113);
  for (let round = 0, R3 = _1n, x3 = 1, y2 = 0;round < 24; round++) {
    [x3, y2] = [y2, (2 * x3 + 3 * y2) % 5];
    SHA3_PI.push(2 * (5 * y2 + x3));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t2 = _0n;
    for (let j3 = 0;j3 < 7; j3++) {
      R3 = (R3 << _1n ^ (R3 >> _7n) * _0x71n) % _256n;
      if (R3 & _2n)
        t2 ^= _1n << (_1n << /* @__PURE__ */ BigInt(j3)) - _1n;
    }
    _SHA3_IOTA.push(t2);
  }
  var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
  var rotlH = (h2, l2, s2) => s2 > 32 ? (0, _u64_js_1.rotlBH)(h2, l2, s2) : (0, _u64_js_1.rotlSH)(h2, l2, s2);
  var rotlL = (h2, l2, s2) => s2 > 32 ? (0, _u64_js_1.rotlBL)(h2, l2, s2) : (0, _u64_js_1.rotlSL)(h2, l2, s2);
  function keccakP(s2, rounds = 24) {
    const B3 = new Uint32Array(5 * 2);
    for (let round = 24 - rounds;round < 24; round++) {
      for (let x3 = 0;x3 < 10; x3++)
        B3[x3] = s2[x3] ^ s2[x3 + 10] ^ s2[x3 + 20] ^ s2[x3 + 30] ^ s2[x3 + 40];
      for (let x3 = 0;x3 < 10; x3 += 2) {
        const idx1 = (x3 + 8) % 10;
        const idx0 = (x3 + 2) % 10;
        const B0 = B3[idx0];
        const B1 = B3[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B3[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B3[idx1 + 1];
        for (let y2 = 0;y2 < 50; y2 += 10) {
          s2[x3 + y2] ^= Th;
          s2[x3 + y2 + 1] ^= Tl;
        }
      }
      let curH = s2[2];
      let curL = s2[3];
      for (let t2 = 0;t2 < 24; t2++) {
        const shift = SHA3_ROTL[t2];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t2];
        curH = s2[PI];
        curL = s2[PI + 1];
        s2[PI] = Th;
        s2[PI + 1] = Tl;
      }
      for (let y2 = 0;y2 < 50; y2 += 10) {
        for (let x3 = 0;x3 < 10; x3++)
          B3[x3] = s2[y2 + x3];
        for (let x3 = 0;x3 < 10; x3++)
          s2[y2 + x3] ^= ~B3[(x3 + 2) % 10] & B3[(x3 + 4) % 10];
      }
      s2[0] ^= SHA3_IOTA_H[round];
      s2[1] ^= SHA3_IOTA_L[round];
    }
    B3.fill(0);
  }

  class Keccak extends utils_js_1.Hash {
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      (0, _assert_js_1.anumber)(outputLen);
      if (0 >= this.blockLen || this.blockLen >= 200)
        throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200);
      this.state32 = (0, utils_js_1.u32)(this.state);
    }
    keccak() {
      if (!utils_js_1.isLE)
        (0, utils_js_1.byteSwap32)(this.state32);
      keccakP(this.state32, this.rounds);
      if (!utils_js_1.isLE)
        (0, utils_js_1.byteSwap32)(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      (0, _assert_js_1.aexists)(this);
      const { blockLen, state } = this;
      data = (0, utils_js_1.toBytes)(data);
      const len = data.length;
      for (let pos = 0;pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i2 = 0;i2 < take; i2++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      (0, _assert_js_1.aexists)(this, false);
      (0, _assert_js_1.abytes)(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length;pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes) {
      (0, _assert_js_1.anumber)(bytes);
      return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
      (0, _assert_js_1.aoutput)(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  }
  exports.Keccak = Keccak;
  var gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
  exports.sha3_224 = gen(6, 144, 224 / 8);
  exports.sha3_256 = gen(6, 136, 256 / 8);
  exports.sha3_384 = gen(6, 104, 384 / 8);
  exports.sha3_512 = gen(6, 72, 512 / 8);
  exports.keccak_224 = gen(1, 144, 224 / 8);
  exports.keccak_256 = gen(1, 136, 256 / 8);
  exports.keccak_384 = gen(1, 104, 384 / 8);
  exports.keccak_512 = gen(1, 72, 512 / 8);
  var genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
  exports.shake128 = genShake(31, 168, 128 / 8);
  exports.shake256 = genShake(31, 136, 256 / 8);
});

// node_modules/@paralleldrive/cuid2/src/index.js
var require_src = __commonJS((exports, module) => {
  var { sha3_512: sha3 } = require_sha3();
  var defaultLength = 24;
  var bigLength = 32;
  var createEntropy = (length = 4, random = Math.random) => {
    let entropy = "";
    while (entropy.length < length) {
      entropy = entropy + Math.floor(random() * 36).toString(36);
    }
    return entropy;
  };
  function bufToBigInt(buf) {
    let bits = 8n;
    let value = 0n;
    for (const i2 of buf.values()) {
      const bi = BigInt(i2);
      value = (value << bits) + bi;
    }
    return value;
  }
  var hash = (input = "") => {
    return bufToBigInt(sha3(input)).toString(36).slice(1);
  };
  var alphabet = Array.from({ length: 26 }, (x3, i2) => String.fromCharCode(i2 + 97));
  var randomLetter = (random) => alphabet[Math.floor(random() * alphabet.length)];
  var createFingerprint = ({
    globalObj = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {},
    random = Math.random
  } = {}) => {
    const globals = Object.keys(globalObj).toString();
    const sourceString = globals.length ? globals + createEntropy(bigLength, random) : createEntropy(bigLength, random);
    return hash(sourceString).substring(0, bigLength);
  };
  var createCounter = (count) => () => {
    return count++;
  };
  var initialCountMax = 476782367;
  var init = ({
    random = Math.random,
    counter = createCounter(Math.floor(random() * initialCountMax)),
    length = defaultLength,
    fingerprint = createFingerprint({ random })
  } = {}) => {
    return function cuid2() {
      const firstLetter = randomLetter(random);
      const time = Date.now().toString(36);
      const count = counter().toString(36);
      const salt = createEntropy(length, random);
      const hashInput = `${time + salt + count + fingerprint}`;
      return `${firstLetter + hash(hashInput).substring(1, length)}`;
    };
  };
  var createId = init();
  var isCuid = (id, { minLength = 2, maxLength = bigLength } = {}) => {
    const length = id.length;
    const regex = /^[0-9a-z]+$/;
    try {
      if (typeof id === "string" && length >= minLength && length <= maxLength && regex.test(id))
        return true;
    } finally {
    }
    return false;
  };
  exports.getConstants = () => ({ defaultLength, bigLength });
  exports.init = init;
  exports.createId = createId;
  exports.bufToBigInt = bufToBigInt;
  exports.createCounter = createCounter;
  exports.createFingerprint = createFingerprint;
  exports.isCuid = isCuid;
});

// src/index.ts
import { DateTime } from "luxon";

// src/hooks/useDidUpdateEffect/index.ts
var import_react = __toESM(require_react(), 1);
var useDidUpdateEffect = (callback, dependencies) => {
  const isInitialMount = import_react.useRef(true);
  import_react.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      callback();
    }
  }, dependencies);
};

// src/hooks/useEvent/index.ts
var import_react2 = __toESM(require_react(), 1);
function useEvent(eventName, handler, element = window) {
  const savedHandler = import_react2.useRef(handler);
  import_react2.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  import_react2.useEffect(() => {
    if (!element?.addEventListener)
      throw new Error("Element does not support addEventListener");
    const eventListener = (event) => {
      savedHandler.current(event);
    };
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

// src/hooks/useMount/index.ts
var import_react3 = __toESM(require_react(), 1);
var useMount = (callback) => {
  import_react3.useEffect(() => {
    callback();
  }, []);
};

// src/hooks/useUnmount/index.ts
var import_react4 = __toESM(require_react(), 1);
var useUnmount = (callback) => {
  import_react4.useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};
// node_modules/@dpaskhin/unique/lib/index.js
function uniqueFactory(fn, options = {}) {
  let {
    store = /* @__PURE__ */ new Set,
    maxRetries = 50,
    maxTime = 50,
    exclude = [],
    stringifier = JSON.stringify
  } = options;
  return exclude = exclude.map((value) => stringifier(value)), function(...args) {
    let result, currentIterations = 0, startTime = Date.now();
    for (;; ) {
      let duration = Date.now() - startTime;
      if (duration >= maxTime)
        throw new UniqueError(`Exceeded maxTime (${maxTime})`, store.size, duration, currentIterations);
      if (currentIterations >= maxRetries)
        throw new UniqueError(`Exceeded maxTries (${maxRetries})`, store.size, duration, currentIterations);
      result = fn.apply(null, args);
      let tmpResult = stringifier(result);
      if (currentIterations++, !store.has(tmpResult) && !exclude.includes(tmpResult)) {
        store.add(tmpResult);
        break;
      }
    }
    return result;
  };
}
var GLOBAL_STORE = /* @__PURE__ */ new Set;
function unique(fnOrValue, argsOrOptions, options = {}) {
  return typeof fnOrValue == "function" ? uniqueFactory(fnOrValue, Object.assign({}, options, { store: options.store || GLOBAL_STORE })).apply(null, argsOrOptions || []) : uniqueFactory(() => fnOrValue, Object.assign({}, argsOrOptions || (argsOrOptions = {}), {
    store: argsOrOptions.store || GLOBAL_STORE,
    maxRetries: 1
  }))();
}
var UniqueError = class extends Error {
  constructor(code, size, duration, iterations) {
    super(`${code} - store size: ${size}, retried: ${iterations}, duration: ${duration}ms`), this.name = "UniqueError";
  }
};

// node_modules/@faker-js/faker/dist/chunk-6AAYEFVP.js
var e = [{ name: "Aegean Airlines", iataCode: "A3" }, { name: "Aeroflot", iataCode: "SU" }, { name: "Aerolineas Argentinas", iataCode: "AR" }, { name: "Aeromexico", iataCode: "AM" }, { name: "Air Algerie", iataCode: "AH" }, { name: "Air Arabia", iataCode: "G9" }, { name: "Air Canada", iataCode: "AC" }, { name: "Air China", iataCode: "CA" }, { name: "Air Europa", iataCode: "UX" }, { name: "Air France-KLM", iataCode: "AF" }, { name: "Air India", iataCode: "AI" }, { name: "Air Mauritius", iataCode: "MK" }, { name: "Air New Zealand", iataCode: "NZ" }, { name: "Air Niugini", iataCode: "PX" }, { name: "Air Tahiti", iataCode: "VT" }, { name: "Air Tahiti Nui", iataCode: "TN" }, { name: "Air Transat", iataCode: "TS" }, { name: "AirAsia X", iataCode: "D7" }, { name: "AirAsia", iataCode: "AK" }, { name: "Aircalin", iataCode: "SB" }, { name: "Alaska Airlines", iataCode: "AS" }, { name: "Alitalia", iataCode: "AZ" }, { name: "All Nippon Airways", iataCode: "NH" }, { name: "Allegiant Air", iataCode: "G4" }, { name: "American Airlines", iataCode: "AA" }, { name: "Asiana Airlines", iataCode: "OZ" }, { name: "Avianca", iataCode: "AV" }, { name: "Azul Linhas Aereas Brasileiras", iataCode: "AD" }, { name: "Azur Air", iataCode: "ZF" }, { name: "Beijing Capital Airlines", iataCode: "JD" }, { name: "Boliviana de Aviacion", iataCode: "OB" }, { name: "British Airways", iataCode: "BA" }, { name: "Cathay Pacific", iataCode: "CX" }, { name: "Cebu Pacific Air", iataCode: "5J" }, { name: "China Airlines", iataCode: "CI" }, { name: "China Eastern Airlines", iataCode: "MU" }, { name: "China Southern Airlines", iataCode: "CZ" }, { name: "Condor", iataCode: "DE" }, { name: "Copa Airlines", iataCode: "CM" }, { name: "Delta Air Lines", iataCode: "DL" }, { name: "Easyfly", iataCode: "VE" }, { name: "EasyJet", iataCode: "U2" }, { name: "EcoJet", iataCode: "8J" }, { name: "Egyptair", iataCode: "MS" }, { name: "El Al", iataCode: "LY" }, { name: "Emirates Airlines", iataCode: "EK" }, { name: "Ethiopian Airlines", iataCode: "ET" }, { name: "Etihad Airways", iataCode: "EY" }, { name: "EVA Air", iataCode: "BR" }, { name: "Fiji Airways", iataCode: "FJ" }, { name: "Finnair", iataCode: "AY" }, { name: "Flybondi", iataCode: "FO" }, { name: "Flydubai", iataCode: "FZ" }, { name: "FlySafair", iataCode: "FA" }, { name: "Frontier Airlines", iataCode: "F9" }, { name: "Garuda Indonesia", iataCode: "GA" }, { name: "Go First", iataCode: "G8" }, { name: "Gol Linhas Aereas Inteligentes", iataCode: "G3" }, { name: "Hainan Airlines", iataCode: "HU" }, { name: "Hawaiian Airlines", iataCode: "HA" }, { name: "IndiGo Airlines", iataCode: "6E" }, { name: "Japan Airlines", iataCode: "JL" }, { name: "Jeju Air", iataCode: "7C" }, { name: "Jet2", iataCode: "LS" }, { name: "JetBlue Airways", iataCode: "B6" }, { name: "JetSMART", iataCode: "JA" }, { name: "Juneyao Airlines", iataCode: "HO" }, { name: "Kenya Airways", iataCode: "KQ" }, { name: "Korean Air", iataCode: "KE" }, { name: "Kulula.com", iataCode: "MN" }, { name: "LATAM Airlines", iataCode: "LA" }, { name: "Lion Air", iataCode: "JT" }, { name: "LOT Polish Airlines", iataCode: "LO" }, { name: "Lufthansa", iataCode: "LH" }, { name: "Libyan Airlines", iataCode: "LN" }, { name: "Linea Aerea Amaszonas", iataCode: "Z8" }, { name: "Malaysia Airlines", iataCode: "MH" }, { name: "Nordwind Airlines", iataCode: "N4" }, { name: "Norwegian Air Shuttle", iataCode: "DY" }, { name: "Oman Air", iataCode: "WY" }, { name: "Pakistan International Airlines", iataCode: "PK" }, { name: "Pegasus Airlines", iataCode: "PC" }, { name: "Philippine Airlines", iataCode: "PR" }, { name: "Qantas Group", iataCode: "QF" }, { name: "Qatar Airways", iataCode: "QR" }, { name: "Republic Airways", iataCode: "YX" }, { name: "Royal Air Maroc", iataCode: "AT" }, { name: "Ryanair", iataCode: "FR" }, { name: "S7 Airlines", iataCode: "S7" }, { name: "SAS", iataCode: "SK" }, { name: "Satena", iataCode: "9R" }, { name: "Saudia", iataCode: "SV" }, { name: "Shandong Airlines", iataCode: "SC" }, { name: "Sichuan Airlines", iataCode: "3U" }, { name: "Singapore Airlines", iataCode: "SQ" }, { name: "Sky Airline", iataCode: "H2" }, { name: "SkyWest Airlines", iataCode: "OO" }, { name: "South African Airways", iataCode: "SA" }, { name: "Southwest Airlines", iataCode: "WN" }, { name: "SpiceJet", iataCode: "SG" }, { name: "Spirit Airlines", iataCode: "NK" }, { name: "Spring Airlines", iataCode: "9S" }, { name: "SriLankan Airlines", iataCode: "UL" }, { name: "Star Peru", iataCode: "2I" }, { name: "Sun Country Airlines", iataCode: "SY" }, { name: "SunExpress", iataCode: "XQ" }, { name: "TAP Air Portugal", iataCode: "TP" }, { name: "Thai AirAsia", iataCode: "FD" }, { name: "Thai Airways", iataCode: "TG" }, { name: "TUI Airways", iataCode: "BY" }, { name: "Tunisair", iataCode: "TU" }, { name: "Turkish Airlines", iataCode: "TK" }, { name: "Ukraine International", iataCode: "PS" }, { name: "United Airlines", iataCode: "UA" }, { name: "Ural Airlines", iataCode: "U6" }, { name: "VietJet Air", iataCode: "VJ" }, { name: "Vietnam Airlines", iataCode: "VN" }, { name: "Virgin Atlantic Airways", iataCode: "VS" }, { name: "Virgin Australia", iataCode: "VA" }, { name: "VivaAerobus", iataCode: "VB" }, { name: "VOEPASS Linhas Aereas", iataCode: "2Z" }, { name: "Volaris", iataCode: "Y4" }, { name: "WestJet", iataCode: "WS" }, { name: "Wingo", iataCode: "P5" }, { name: "Wizz Air", iataCode: "W6" }];
var a = [{ name: "Aerospatiale/BAC Concorde", iataTypeCode: "SSC" }, { name: "Airbus A300", iataTypeCode: "AB3" }, { name: "Airbus A310", iataTypeCode: "310" }, { name: "Airbus A310-200", iataTypeCode: "312" }, { name: "Airbus A310-300", iataTypeCode: "313" }, { name: "Airbus A318", iataTypeCode: "318" }, { name: "Airbus A319", iataTypeCode: "319" }, { name: "Airbus A319neo", iataTypeCode: "31N" }, { name: "Airbus A320", iataTypeCode: "320" }, { name: "Airbus A320neo", iataTypeCode: "32N" }, { name: "Airbus A321", iataTypeCode: "321" }, { name: "Airbus A321neo", iataTypeCode: "32Q" }, { name: "Airbus A330", iataTypeCode: "330" }, { name: "Airbus A330-200", iataTypeCode: "332" }, { name: "Airbus A330-300", iataTypeCode: "333" }, { name: "Airbus A330-800neo", iataTypeCode: "338" }, { name: "Airbus A330-900neo", iataTypeCode: "339" }, { name: "Airbus A340", iataTypeCode: "340" }, { name: "Airbus A340-200", iataTypeCode: "342" }, { name: "Airbus A340-300", iataTypeCode: "343" }, { name: "Airbus A340-500", iataTypeCode: "345" }, { name: "Airbus A340-600", iataTypeCode: "346" }, { name: "Airbus A350", iataTypeCode: "350" }, { name: "Airbus A350-900", iataTypeCode: "359" }, { name: "Airbus A350-1000", iataTypeCode: "351" }, { name: "Airbus A380", iataTypeCode: "380" }, { name: "Airbus A380-800", iataTypeCode: "388" }, { name: "Antonov An-12", iataTypeCode: "ANF" }, { name: "Antonov An-24", iataTypeCode: "AN4" }, { name: "Antonov An-26", iataTypeCode: "A26" }, { name: "Antonov An-28", iataTypeCode: "A28" }, { name: "Antonov An-30", iataTypeCode: "A30" }, { name: "Antonov An-32", iataTypeCode: "A32" }, { name: "Antonov An-72", iataTypeCode: "AN7" }, { name: "Antonov An-124 Ruslan", iataTypeCode: "A4F" }, { name: "Antonov An-140", iataTypeCode: "A40" }, { name: "Antonov An-148", iataTypeCode: "A81" }, { name: "Antonov An-158", iataTypeCode: "A58" }, { name: "Antonov An-225 Mriya", iataTypeCode: "A5F" }, { name: "Boeing 707", iataTypeCode: "703" }, { name: "Boeing 717", iataTypeCode: "717" }, { name: "Boeing 720B", iataTypeCode: "B72" }, { name: "Boeing 727", iataTypeCode: "727" }, { name: "Boeing 727-100", iataTypeCode: "721" }, { name: "Boeing 727-200", iataTypeCode: "722" }, { name: "Boeing 737 MAX 7", iataTypeCode: "7M7" }, { name: "Boeing 737 MAX 8", iataTypeCode: "7M8" }, { name: "Boeing 737 MAX 9", iataTypeCode: "7M9" }, { name: "Boeing 737 MAX 10", iataTypeCode: "7MJ" }, { name: "Boeing 737", iataTypeCode: "737" }, { name: "Boeing 737-100", iataTypeCode: "731" }, { name: "Boeing 737-200", iataTypeCode: "732" }, { name: "Boeing 737-300", iataTypeCode: "733" }, { name: "Boeing 737-400", iataTypeCode: "734" }, { name: "Boeing 737-500", iataTypeCode: "735" }, { name: "Boeing 737-600", iataTypeCode: "736" }, { name: "Boeing 737-700", iataTypeCode: "73G" }, { name: "Boeing 737-800", iataTypeCode: "738" }, { name: "Boeing 737-900", iataTypeCode: "739" }, { name: "Boeing 747", iataTypeCode: "747" }, { name: "Boeing 747-100", iataTypeCode: "741" }, { name: "Boeing 747-200", iataTypeCode: "742" }, { name: "Boeing 747-300", iataTypeCode: "743" }, { name: "Boeing 747-400", iataTypeCode: "744" }, { name: "Boeing 747-400D", iataTypeCode: "74J" }, { name: "Boeing 747-8", iataTypeCode: "748" }, { name: "Boeing 747SP", iataTypeCode: "74L" }, { name: "Boeing 747SR", iataTypeCode: "74R" }, { name: "Boeing 757", iataTypeCode: "757" }, { name: "Boeing 757-200", iataTypeCode: "752" }, { name: "Boeing 757-300", iataTypeCode: "753" }, { name: "Boeing 767", iataTypeCode: "767" }, { name: "Boeing 767-200", iataTypeCode: "762" }, { name: "Boeing 767-300", iataTypeCode: "763" }, { name: "Boeing 767-400", iataTypeCode: "764" }, { name: "Boeing 777", iataTypeCode: "777" }, { name: "Boeing 777-200", iataTypeCode: "772" }, { name: "Boeing 777-200LR", iataTypeCode: "77L" }, { name: "Boeing 777-300", iataTypeCode: "773" }, { name: "Boeing 777-300ER", iataTypeCode: "77W" }, { name: "Boeing 787", iataTypeCode: "787" }, { name: "Boeing 787-8", iataTypeCode: "788" }, { name: "Boeing 787-9", iataTypeCode: "789" }, { name: "Boeing 787-10", iataTypeCode: "781" }, { name: "Canadair Challenger", iataTypeCode: "CCJ" }, { name: "Canadair CL-44", iataTypeCode: "CL4" }, { name: "Canadair Regional Jet 100", iataTypeCode: "CR1" }, { name: "Canadair Regional Jet 200", iataTypeCode: "CR2" }, { name: "Canadair Regional Jet 700", iataTypeCode: "CR7" }, { name: "Canadair Regional Jet 705", iataTypeCode: "CRA" }, { name: "Canadair Regional Jet 900", iataTypeCode: "CR9" }, { name: "Canadair Regional Jet 1000", iataTypeCode: "CRK" }, { name: "De Havilland Canada DHC-2 Beaver", iataTypeCode: "DHP" }, { name: "De Havilland Canada DHC-2 Turbo-Beaver", iataTypeCode: "DHR" }, { name: "De Havilland Canada DHC-3 Otter", iataTypeCode: "DHL" }, { name: "De Havilland Canada DHC-4 Caribou", iataTypeCode: "DHC" }, { name: "De Havilland Canada DHC-6 Twin Otter", iataTypeCode: "DHT" }, { name: "De Havilland Canada DHC-7 Dash 7", iataTypeCode: "DH7" }, { name: "De Havilland Canada DHC-8-100 Dash 8 / 8Q", iataTypeCode: "DH1" }, { name: "De Havilland Canada DHC-8-200 Dash 8 / 8Q", iataTypeCode: "DH2" }, { name: "De Havilland Canada DHC-8-300 Dash 8 / 8Q", iataTypeCode: "DH3" }, { name: "De Havilland Canada DHC-8-400 Dash 8Q", iataTypeCode: "DH4" }, { name: "De Havilland DH.104 Dove", iataTypeCode: "DHD" }, { name: "De Havilland DH.114 Heron", iataTypeCode: "DHH" }, { name: "Douglas DC-3", iataTypeCode: "D3F" }, { name: "Douglas DC-6", iataTypeCode: "D6F" }, { name: "Douglas DC-8-50", iataTypeCode: "D8T" }, { name: "Douglas DC-8-62", iataTypeCode: "D8L" }, { name: "Douglas DC-8-72", iataTypeCode: "D8Q" }, { name: "Douglas DC-9-10", iataTypeCode: "D91" }, { name: "Douglas DC-9-20", iataTypeCode: "D92" }, { name: "Douglas DC-9-30", iataTypeCode: "D93" }, { name: "Douglas DC-9-40", iataTypeCode: "D94" }, { name: "Douglas DC-9-50", iataTypeCode: "D95" }, { name: "Douglas DC-10", iataTypeCode: "D10" }, { name: "Douglas DC-10-10", iataTypeCode: "D1X" }, { name: "Douglas DC-10-30", iataTypeCode: "D1Y" }, { name: "Embraer 170", iataTypeCode: "E70" }, { name: "Embraer 175", iataTypeCode: "E75" }, { name: "Embraer 190", iataTypeCode: "E90" }, { name: "Embraer 195", iataTypeCode: "E95" }, { name: "Embraer E190-E2", iataTypeCode: "290" }, { name: "Embraer E195-E2", iataTypeCode: "295" }, { name: "Embraer EMB.110 Bandeirante", iataTypeCode: "EMB" }, { name: "Embraer EMB.120 Brasilia", iataTypeCode: "EM2" }, { name: "Embraer Legacy 600", iataTypeCode: "ER3" }, { name: "Embraer Phenom 100", iataTypeCode: "EP1" }, { name: "Embraer Phenom 300", iataTypeCode: "EP3" }, { name: "Embraer RJ135", iataTypeCode: "ER3" }, { name: "Embraer RJ140", iataTypeCode: "ERD" }, { name: "Embraer RJ145 Amazon", iataTypeCode: "ER4" }, { name: "Ilyushin IL18", iataTypeCode: "IL8" }, { name: "Ilyushin IL62", iataTypeCode: "IL6" }, { name: "Ilyushin IL76", iataTypeCode: "IL7" }, { name: "Ilyushin IL86", iataTypeCode: "ILW" }, { name: "Ilyushin IL96-300", iataTypeCode: "I93" }, { name: "Ilyushin IL114", iataTypeCode: "I14" }, { name: "Lockheed L-182 / 282 / 382 (L-100) Hercules", iataTypeCode: "LOH" }, { name: "Lockheed L-188 Electra", iataTypeCode: "LOE" }, { name: "Lockheed L-1011 Tristar", iataTypeCode: "L10" }, { name: "Lockheed L-1049 Super Constellation", iataTypeCode: "L49" }, { name: "McDonnell Douglas MD11", iataTypeCode: "M11" }, { name: "McDonnell Douglas MD80", iataTypeCode: "M80" }, { name: "McDonnell Douglas MD81", iataTypeCode: "M81" }, { name: "McDonnell Douglas MD82", iataTypeCode: "M82" }, { name: "McDonnell Douglas MD83", iataTypeCode: "M83" }, { name: "McDonnell Douglas MD87", iataTypeCode: "M87" }, { name: "McDonnell Douglas MD88", iataTypeCode: "M88" }, { name: "McDonnell Douglas MD90", iataTypeCode: "M90" }, { name: "Sukhoi Superjet 100-95", iataTypeCode: "SU9" }, { name: "Tupolev Tu-134", iataTypeCode: "TU3" }, { name: "Tupolev Tu-154", iataTypeCode: "TU5" }, { name: "Tupolev Tu-204", iataTypeCode: "T20" }, { name: "Yakovlev Yak-40", iataTypeCode: "YK4" }, { name: "Yakovlev Yak-42", iataTypeCode: "YK2" }];
var r = [{ name: "Adelaide International Airport", iataCode: "ADL" }, { name: "Adolfo Suarez Madrid-Barajas Airport", iataCode: "MAD" }, { name: "Aeroparque Jorge Newbery Airport", iataCode: "AEP" }, { name: "Afonso Pena International Airport", iataCode: "CWB" }, { name: "Alfonso Bonilla Aragon International Airport", iataCode: "CLO" }, { name: "Amsterdam Airport Schiphol", iataCode: "AMS" }, { name: "Arturo Merino Benitez International Airport", iataCode: "SCL" }, { name: "Auckland International Airport", iataCode: "AKL" }, { name: "Beijing Capital International Airport", iataCode: "PEK" }, { name: "Belem Val de Cans International Airport", iataCode: "BEL" }, { name: "Belo Horizonte Tancredo Neves International Airport", iataCode: "CNF" }, { name: "Berlin-Tegel Airport", iataCode: "TXL" }, { name: "Bole International Airport", iataCode: "ADD" }, { name: "Brasilia-Presidente Juscelino Kubitschek International Airport", iataCode: "BSB" }, { name: "Brisbane International Airport", iataCode: "BNE" }, { name: "Brussels Airport", iataCode: "BRU" }, { name: "Cairns Airport", iataCode: "CNS" }, { name: "Cairo International Airport", iataCode: "CAI" }, { name: "Canberra Airport", iataCode: "CBR" }, { name: "Capetown International Airport", iataCode: "CPT" }, { name: "Charles de Gaulle International Airport", iataCode: "CDG" }, { name: "Charlotte Douglas International Airport", iataCode: "CLT" }, { name: "Chengdu Shuangliu International Airport", iataCode: "CTU" }, { name: "Chhatrapati Shivaji International Airport", iataCode: "BOM" }, { name: "Chicago O'Hare International Airport", iataCode: "ORD" }, { name: "Chongqing Jiangbei International Airport", iataCode: "CKG" }, { name: "Christchurch International Airport", iataCode: "CHC" }, { name: "Copenhagen Kastrup Airport", iataCode: "CPH" }, { name: "Dallas Fort Worth International Airport", iataCode: "DFW" }, { name: "Daniel K. Inouye International Airport", iataCode: "HNL" }, { name: "Denver International Airport", iataCode: "DEN" }, { name: "Don Mueang International Airport", iataCode: "DMK" }, { name: "Dubai International Airport", iataCode: "DXB" }, { name: "Dublin Airport", iataCode: "DUB" }, { name: "Dusseldorf Airport", iataCode: "DUS" }, { name: "El Dorado International Airport", iataCode: "BOG" }, { name: "Eleftherios Venizelos International Airport", iataCode: "ATH" }, { name: "Faa'a International Airport", iataCode: "PPT" }, { name: "Fort Lauderdale Hollywood International Airport", iataCode: "FLL" }, { name: "Fortaleza Pinto Martins International Airport", iataCode: "FOR" }, { name: "Frankfurt am Main Airport", iataCode: "FRA" }, { name: "George Bush Intercontinental Houston Airport", iataCode: "IAH" }, { name: "Gold Coast Airport", iataCode: "OOL" }, { name: "Guarulhos - Governador Andre Franco Montoro International Airport", iataCode: "GRU" }, { name: "Hartsfield-Jackson Atlanta International Airport", iataCode: "ATL" }, { name: "Helsinki Vantaa Airport", iataCode: "HEL" }, { name: "Hobart International Airport", iataCode: "HBA" }, { name: "Hong Kong International Airport", iataCode: "HKG" }, { name: "Houari Boumediene Airport", iataCode: "ALG" }, { name: "Hurgada International Airport", iataCode: "HRG" }, { name: "Incheon International Airport", iataCode: "ICN" }, { name: "Indira Gandhi International Airport", iataCode: "DEL" }, { name: "Istanbul Airport", iataCode: "IST" }, { name: "Jacksons International Airport", iataCode: "POM" }, { name: "Jeju International Airport", iataCode: "CJU" }, { name: "John F Kennedy International Airport", iataCode: "JFK" }, { name: "Jorge Chavez International Airport", iataCode: "LIM" }, { name: "Jose Maria Cordova International Airport", iataCode: "MDE" }, { name: "Josep Tarradellas Barcelona-El Prat Airport", iataCode: "BCN" }, { name: "Kahului Airport", iataCode: "OGG" }, { name: "King Abdulaziz International Airport", iataCode: "JED" }, { name: "Kuala Lumpur International Airport", iataCode: "KUL" }, { name: "Kunming Changshui International Airport", iataCode: "KMG" }, { name: "La Tontouta International Airport", iataCode: "NOU" }, { name: "Leonardo da Vinci-Fiumicino Airport", iataCode: "FCO" }, { name: "London Heathrow Airport", iataCode: "LHR" }, { name: "Los Angeles International Airport", iataCode: "LAX" }, { name: "McCarran International Airport", iataCode: "LAS" }, { name: "Melbourne International Airport", iataCode: "MEL" }, { name: "Mexico City International Airport", iataCode: "MEX" }, { name: "Miami International Airport", iataCode: "MIA" }, { name: "Ministro Pistarini International Airport", iataCode: "EZE" }, { name: "Minneapolis-St Paul International/Wold-Chamberlain Airport", iataCode: "MSP" }, { name: "Mohammed V International Airport", iataCode: "CMN" }, { name: "Moscow Domodedovo Airport", iataCode: "DME" }, { name: "Munich Airport", iataCode: "MUC" }, { name: "Murtala Muhammed International Airport", iataCode: "LOS" }, { name: "Nadi International Airport", iataCode: "NAN" }, { name: "Nairobi Jomo Kenyatta International Airport", iataCode: "NBO" }, { name: "Narita International Airport", iataCode: "NRT" }, { name: "Newark Liberty International Airport", iataCode: "EWR" }, { name: "Ninoy Aquino International Airport", iataCode: "MNL" }, { name: "Noumea Magenta Airport", iataCode: "GEA" }, { name: "O. R. Tambo International Airport", iataCode: "JNB" }, { name: "Orlando International Airport", iataCode: "MCO" }, { name: "Oslo Lufthavn", iataCode: "OSL" }, { name: "Perth Airport", iataCode: "PER" }, { name: "Phoenix Sky Harbor International Airport", iataCode: "PHX" }, { name: "Recife Guararapes-Gilberto Freyre International Airport", iataCode: "REC" }, { name: "Rio de Janeiro Galeao International Airport", iataCode: "GIG" }, { name: "Salgado Filho International Airport", iataCode: "POA" }, { name: "Salvador Deputado Luis Eduardo Magalhaes International Airport", iataCode: "SSA" }, { name: "San Francisco International Airport", iataCode: "SFO" }, { name: "Santos Dumont Airport", iataCode: "SDU" }, { name: "Sao Paulo-Congonhas Airport", iataCode: "CGH" }, { name: "Seattle Tacoma International Airport", iataCode: "SEA" }, { name: "Shanghai Hongqiao International Airport", iataCode: "SHA" }, { name: "Shanghai Pudong International Airport", iataCode: "PVG" }, { name: "Shenzhen Bao'an International Airport", iataCode: "SZX" }, { name: "Sheremetyevo International Airport", iataCode: "SVO" }, { name: "Singapore Changi Airport", iataCode: "SIN" }, { name: "Soekarno-Hatta International Airport", iataCode: "CGK" }, { name: 'Stockholm-Arlanda Airport"', iataCode: "ARN" }, { name: "Suvarnabhumi Airport", iataCode: "BKK" }, { name: "Sydney Kingsford Smith International Airport", iataCode: "SYD" }, { name: "Taiwan Taoyuan International Airport", iataCode: "TPE" }, { name: "Tan Son Nhat International Airport", iataCode: "SGN" }, { name: "Tokyo Haneda International Airport", iataCode: "HND" }, { name: "Toronto Pearson International Airport", iataCode: "YYZ" }, { name: "Tunis Carthage International Airport", iataCode: "TUN" }, { name: "Vancouver International Airport", iataCode: "YVR" }, { name: "Vienna International Airport", iataCode: "VIE" }, { name: "Viracopos International Airport", iataCode: "VCP" }, { name: "Vnukovo International Airport", iataCode: "VKO" }, { name: "Wellington International Airport", iataCode: "WLG" }, { name: "Xi'an Xianyang International Airport", iataCode: "XIY" }, { name: "Zhukovsky International Airport", iataCode: "ZIA" }, { name: "Zurich Airport", iataCode: "ZRH" }];
var Za = { airline: e, airplane: a, airport: r };
var o = Za;
var n = ["American black bear", "Asian black bear", "Brown bear", "Giant panda", "Polar bear", "Sloth bear", "Spectacled bear", "Sun bear"];
var i = ["Abert's Towhee", "Acadian Flycatcher", "Acorn Woodpecker", "Alder Flycatcher", "Aleutian Tern", "Allen's Hummingbird", "Altamira Oriole", "American Avocet", "American Bittern", "American Black Duck", "American Coot", "American Crow", "American Dipper", "American Golden-Plover", "American Goldfinch", "American Kestrel", "American Oystercatcher", "American Pipit", "American Redstart", "American Robin", "American Tree Sparrow", "American White Pelican", "American Wigeon", "American Woodcock", "Ancient Murrelet", "Anhinga", "Anna's Hummingbird", "Antillean Nighthawk", "Antillean Palm Swift", "Aplomado Falcon", "Arctic Loon", "Arctic Tern", "Arctic Warbler", "Ash-throated Flycatcher", "Ashy Storm-Petrel", "Asian Brown Flycatcher", "Atlantic Puffin", "Audubon's Oriole", "Audubon's Shearwater", "Aztec Thrush", "Azure Gallinule", "Bachman's Sparrow", "Bachman's Warbler", "Bahama Mockingbird", "Bahama Swallow", "Bahama Woodstar", "Baikal Teal", "Baird's Sandpiper", "Baird's Sparrow", "Bald Eagle", "Baltimore Oriole", "Bananaquit", "Band-rumped Storm-Petrel", "Band-tailed Gull", "Band-tailed Pigeon", "Bank Swallow", "Bar-tailed Godwit", "Barn Owl", "Barn Swallow", "Barnacle Goose", "Barred Owl", "Barrow's Goldeneye", "Bay-breasted Warbler", "Bean Goose", "Bell's Vireo", "Belted Kingfisher", "Bendire's Thrasher", "Berylline Hummingbird", "Bewick's Wren", "Bicknell's Thrush", "Black Catbird", "Black Guillemot", "Black Noddy", "Black Oystercatcher", "Black Phoebe", "Black Rail", "Black Rosy-Finch", "Black Scoter", "Black Skimmer", "Black Storm-Petrel", "Black Swift", "Black Tern", "Black Turnstone", "Black Vulture", "Black-and-white Warbler", "Black-backed Wagtail", "Black-backed Woodpecker", "Black-bellied Plover", "Black-bellied Whistling-Duck", "Black-billed Cuckoo", "Black-billed Magpie", "Black-browed Albatross", "Black-capped Chickadee", "Black-capped Gnatcatcher", "Black-capped Petrel", "Black-capped Vireo", "Black-chinned Hummingbird", "Black-chinned Sparrow", "Black-crowned Night-Heron", "Black-faced Grassquit", "Black-footed Albatross", "Black-headed Grosbeak", "Black-headed Gull", "Black-legged Kittiwake", "Black-necked Stilt", "Black-tailed Gnatcatcher", "Black-tailed Godwit", "Black-tailed Gull", "Black-throated Blue Warbler", "Black-throated Gray Warbler", "Black-throated Green Warbler", "Black-throated Sparrow", "Black-vented Oriole", "Black-vented Shearwater", "Black-whiskered Vireo", "Black-winged Stilt", "Blackburnian Warbler", "Blackpoll Warbler", "Blue Bunting", "Blue Grosbeak", "Blue Grouse", "Blue Jay", "Blue Mockingbird", "Blue-footed Booby", "Blue-gray Gnatcatcher", "Blue-headed Vireo", "Blue-throated Hummingbird", "Blue-winged Teal", "Blue-winged Warbler", "Bluethroat", "Boat-tailed Grackle", "Bobolink", "Bohemian Waxwing", "Bonaparte's Gull", "Boreal Chickadee", "Boreal Owl", "Botteri's Sparrow", "Brambling", "Brandt's Cormorant", "Brant", "Brewer's Blackbird", "Brewer's Sparrow", "Bridled Tern", "Bridled Titmouse", "Bristle-thighed Curlew", "Broad-billed Hummingbird", "Broad-billed Sandpiper", "Broad-tailed Hummingbird", "Broad-winged Hawk", "Bronzed Cowbird", "Brown Booby", "Brown Creeper", "Brown Jay", "Brown Noddy", "Brown Pelican", "Brown Shrike", "Brown Thrasher", "Brown-capped Rosy-Finch", "Brown-chested Martin", "Brown-crested Flycatcher", "Brown-headed Cowbird", "Brown-headed Nuthatch", "Budgerigar", "Buff-bellied Hummingbird", "Buff-breasted Flycatcher", "Buff-breasted Sandpiper", "Buff-collared Nightjar", "Bufflehead", "Buller's Shearwater", "Bullock's Oriole", "Bumblebee Hummingbird", "Burrowing Owl", "Bushtit", "Cactus Wren", "California Condor", "California Gnatcatcher", "California Gull", "California Quail", "California Thrasher", "California Towhee", "Calliope Hummingbird", "Canada Goose", "Canada Warbler", "Canvasback", "Canyon Towhee", "Canyon Wren", "Cape May Warbler", "Caribbean Elaenia", "Carolina Chickadee", "Carolina Parakeet", "Carolina Wren", "Caspian Tern", "Cassin's Auklet", "Cassin's Finch", "Cassin's Kingbird", "Cassin's Sparrow", "Cassin's Vireo", "Cattle Egret", "Cave Swallow", "Cedar Waxwing", "Cerulean Warbler", "Chestnut-backed Chickadee", "Chestnut-collared Longspur", "Chestnut-sided Warbler", "Chihuahuan Raven", "Chimney Swift", "Chinese Egret", "Chipping Sparrow", "Chuck-will's-widow", "Chukar", "Cinnamon Hummingbird", "Cinnamon Teal", "Citrine Wagtail", "Clapper Rail", "Clark's Grebe", "Clark's Nutcracker", "Clay-colored Robin", "Clay-colored Sparrow", "Cliff Swallow", "Colima Warbler", "Collared Forest-Falcon", "Collared Plover", "Common Black-Hawk", "Common Chaffinch", "Common Crane", "Common Cuckoo", "Common Eider", "Common Goldeneye", "Common Grackle", "Common Greenshank", "Common Ground-Dove", "Common House-Martin", "Common Loon", "Common Merganser", "Common Moorhen", "Common Murre", "Common Nighthawk", "Common Pauraque", "Common Pochard", "Common Poorwill", "Common Raven", "Common Redpoll", "Common Ringed Plover", "Common Rosefinch", "Common Sandpiper", "Common Snipe", "Common Swift", "Common Tern", "Common Yellowthroat", "Connecticut Warbler", "Cook's Petrel", "Cooper's Hawk", "Cordilleran Flycatcher", "Corn Crake", "Cory's Shearwater", "Costa's Hummingbird", "Couch's Kingbird", "Crane Hawk", "Craveri's Murrelet", "Crescent-chested Warbler", "Crested Auklet", "Crested Caracara", "Crested Myna", "Crimson-collared Grosbeak", "Crissal Thrasher", "Cuban Martin", "Curlew Sandpiper", "Curve-billed Thrasher", "Dark-eyed Junco", "Dickcissel", "Double-crested Cormorant", "Double-striped Thick-knee", "Dovekie", "Downy Woodpecker", "Dunlin", "Dusky Flycatcher", "Dusky Thrush", "Dusky Warbler", "Dusky-capped Flycatcher", "Eared Grebe", "Eared Trogon", "Eastern Bluebird", "Eastern Kingbird", "Eastern Meadowlark", "Eastern Phoebe", "Eastern Screech-Owl", "Eastern Towhee", "Eastern Wood-Pewee", "Elegant Tern", "Elegant Trogon", "Elf Owl", "Emperor Goose", "Eskimo Curlew", "Eurasian Blackbird", "Eurasian Bullfinch", "Eurasian Collared-Dove", "Eurasian Coot", "Eurasian Curlew", "Eurasian Dotterel", "Eurasian Hobby", "Eurasian Jackdaw", "Eurasian Kestrel", "Eurasian Oystercatcher", "Eurasian Siskin", "Eurasian Tree Sparrow", "Eurasian Wigeon", "Eurasian Woodcock", "Eurasian Wryneck", "European Golden-Plover", "European Starling", "European Storm-Petrel", "European Turtle-Dove", "Evening Grosbeak", "Eyebrowed Thrush", "Falcated Duck", "Fan-tailed Warbler", "Far Eastern Curlew", "Ferruginous Hawk", "Ferruginous Pygmy-Owl", "Field Sparrow", "Fieldfare", "Fish Crow", "Five-striped Sparrow", "Flame-colored Tanager", "Flammulated Owl", "Flesh-footed Shearwater", "Florida Scrub-Jay", "Fork-tailed Flycatcher", "Fork-tailed Storm-Petrel", "Fork-tailed Swift", "Forster's Tern", "Fox Sparrow", "Franklin's Gull", "Fulvous Whistling-Duck", "Gadwall", "Gambel's Quail", "Garganey", "Gila Woodpecker", "Gilded Flicker", "Glaucous Gull", "Glaucous-winged Gull", "Glossy Ibis", "Golden Eagle", "Golden-cheeked Warbler", "Golden-crowned Kinglet", "Golden-crowned Sparrow", "Golden-crowned Warbler", "Golden-fronted Woodpecker", "Golden-winged Warbler", "Grace's Warbler", "Grasshopper Sparrow", "Gray Bunting", "Gray Catbird", "Gray Flycatcher", "Gray Hawk", "Gray Jay", "Gray Kingbird", "Gray Partridge", "Gray Silky-flycatcher", "Gray Vireo", "Gray Wagtail", "Gray-breasted Martin", "Gray-cheeked Thrush", "Gray-crowned Rosy-Finch", "Gray-crowned Yellowthroat", "Gray-headed Chickadee", "Gray-spotted Flycatcher", "Gray-tailed Tattler", "Great Auk", "Great Black-backed Gull", "Great Blue Heron", "Great Cormorant", "Great Crested Flycatcher", "Great Egret", "Great Frigatebird", "Great Gray Owl", "Great Horned Owl", "Great Kiskadee", "Great Knot", "Great Skua", "Great Spotted Woodpecker", "Great-tailed Grackle", "Greater Flamingo", "Greater Pewee", "Greater Prairie-chicken", "Greater Roadrunner", "Greater Scaup", "Greater Shearwater", "Greater White-fronted Goose", "Greater Yellowlegs", "Green Heron", "Green Jay", "Green Kingfisher", "Green Sandpiper", "Green Violet-ear", "Green-breasted Mango", "Green-tailed Towhee", "Green-winged Teal", "Greenish Elaenia", "Groove-billed Ani", "Gull-billed Tern", "Gyrfalcon", "Hairy Woodpecker", "Hammond's Flycatcher", "Harlequin Duck", "Harris's Hawk", "Harris's Sparrow", "Hawfinch", "Heermann's Gull", "Henslow's Sparrow", "Hepatic Tanager", "Herald Petrel", "Hermit Thrush", "Hermit Warbler", "Herring Gull", "Himalayan Snowcock", "Hoary Redpoll", "Hooded Merganser", "Hooded Oriole", "Hooded Warbler", "Hook-billed Kite", "Hoopoe", "Horned Grebe", "Horned Lark", "Horned Puffin", "House Finch", "House Sparrow", "House Wren", "Hudsonian Godwit", "Hutton's Vireo", "Iceland Gull", "Inca Dove", "Indigo Bunting", "Island Scrub-Jay", "Ivory Gull", "Ivory-billed Woodpecker", "Jabiru", "Jack Snipe", "Jungle Nightjar", "Juniper Titmouse", "Kentucky Warbler", "Key West Quail-Dove", "Killdeer", "King Eider", "King Rail", "Kirtland's Warbler", "Kittlitz's Murrelet", "La Sagra's Flycatcher", "Labrador Duck", "Ladder-backed Woodpecker", "Lanceolated Warbler", "Lapland Longspur", "Large-billed Tern", "Lark Bunting", "Lark Sparrow", "Laughing Gull", "Lawrence's Goldfinch", "Laysan Albatross", "Lazuli Bunting", "Le Conte's Sparrow", "Le Conte's Thrasher", "Leach's Storm-Petrel", "Least Auklet", "Least Bittern", "Least Flycatcher", "Least Grebe", "Least Sandpiper", "Least Storm-Petrel", "Least Tern", "Lesser Black-backed Gull", "Lesser Frigatebird", "Lesser Goldfinch", "Lesser Nighthawk", "Lesser Prairie-chicken", "Lesser Scaup", "Lesser White-fronted Goose", "Lesser Yellowlegs", "Lewis's Woodpecker", "Limpkin", "Lincoln's Sparrow", "Little Blue Heron", "Little Bunting", "Little Curlew", "Little Egret", "Little Gull", "Little Ringed Plover", "Little Shearwater", "Little Stint", "Loggerhead Kingbird", "Loggerhead Shrike", "Long-billed Curlew", "Long-billed Dowitcher", "Long-billed Murrelet", "Long-billed Thrasher", "Long-eared Owl", "Long-tailed Jaeger", "Long-toed Stint", "Louisiana Waterthrush", "Lucifer Hummingbird", "Lucy's Warbler", "MacGillivray's Warbler", "Magnificent Frigatebird", "Magnificent Hummingbird", "Magnolia Warbler", "Mallard", "Mangrove Cuckoo", "Manx Shearwater", "Marbled Godwit", "Marbled Murrelet", "Marsh Sandpiper", "Marsh Wren", "Masked Booby", "Masked Duck", "Masked Tityra", "McCown's Longspur", "McKay's Bunting", "Merlin", "Mew Gull", "Mexican Chickadee", "Mexican Jay", "Middendorff's Grasshopper-Warbler", "Mississippi Kite", "Mongolian Plover", "Monk Parakeet", "Montezuma Quail", "Mottled Duck", "Mottled Owl", "Mottled Petrel", "Mountain Bluebird", "Mountain Chickadee", "Mountain Plover", "Mountain Quail", "Mourning Dove", "Mourning Warbler", "Mugimaki Flycatcher", "Murphy's Petrel", "Muscovy Duck", "Mute Swan", "Narcissus Flycatcher", "Nashville Warbler", "Nelson's Sharp-tailed Sparrow", "Neotropic Cormorant", "Northern Beardless-Tyrannulet", "Northern Bobwhite", "Northern Cardinal", "Northern Flicker", "Northern Fulmar", "Northern Gannet", "Northern Goshawk", "Northern Harrier", "Northern Hawk Owl", "Northern Jacana", "Northern Lapwing", "Northern Mockingbird", "Northern Parula", "Northern Pintail", "Northern Pygmy-Owl", "Northern Rough-winged Swallow", "Northern Saw-whet Owl", "Northern Shoveler", "Northern Shrike", "Northern Waterthrush", "Northern Wheatear", "Northwestern Crow", "Nuttall's Woodpecker", "Nutting's Flycatcher", "Oak Titmouse", "Oldsquaw", "Olive Sparrow", "Olive Warbler", "Olive-backed Pipit", "Olive-sided Flycatcher", "Orange-crowned Warbler", "Orchard Oriole", "Oriental Cuckoo", "Oriental Greenfinch", "Oriental Pratincole", "Oriental Scops-Owl", "Oriental Turtle-Dove", "Osprey", "Ovenbird", "Pacific Golden-Plover", "Pacific Loon", "Pacific-slope Flycatcher", "Paint-billed Crake", "Painted Bunting", "Painted Redstart", "Pallas's Bunting", "Palm Warbler", "Parakeet Auklet", "Parasitic Jaeger", "Passenger Pigeon", "Pechora Pipit", "Pectoral Sandpiper", "Pelagic Cormorant", "Peregrine Falcon", "Phainopepla", "Philadelphia Vireo", "Pied-billed Grebe", "Pigeon Guillemot", "Pileated Woodpecker", "Pin-tailed Snipe", "Pine Bunting", "Pine Grosbeak", "Pine Siskin", "Pine Warbler", "Pink-footed Goose", "Pink-footed Shearwater", "Pinyon Jay", "Piping Plover", "Plain Chachalaca", "Plain-capped Starthroat", "Plumbeous Vireo", "Pomarine Jaeger", "Prairie Falcon", "Prairie Warbler", "Prothonotary Warbler", "Purple Finch", "Purple Gallinule", "Purple Martin", "Purple Sandpiper", "Pygmy Nuthatch", "Pyrrhuloxia", "Razorbill", "Red Crossbill", "Red Knot", "Red Phalarope", "Red-bellied Woodpecker", "Red-billed Pigeon", "Red-billed Tropicbird", "Red-breasted Flycatcher", "Red-breasted Merganser", "Red-breasted Nuthatch", "Red-breasted Sapsucker", "Red-cockaded Woodpecker", "Red-crowned Parrot", "Red-eyed Vireo", "Red-faced Cormorant", "Red-faced Warbler", "Red-flanked Bluetail", "Red-footed Booby", "Red-headed Woodpecker", "Red-legged Kittiwake", "Red-naped Sapsucker", "Red-necked Grebe", "Red-necked Phalarope", "Red-necked Stint", "Red-shouldered Hawk", "Red-tailed Hawk", "Red-tailed Tropicbird", "Red-throated Loon", "Red-throated Pipit", "Red-whiskered Bulbul", "Red-winged Blackbird", "Reddish Egret", "Redhead", "Redwing", "Reed Bunting", "Rhinoceros Auklet", "Ring-billed Gull", "Ring-necked Duck", "Ring-necked Pheasant", "Ringed Kingfisher", "Roadside Hawk", "Rock Dove", "Rock Ptarmigan", "Rock Sandpiper", "Rock Wren", "Rose-breasted Grosbeak", "Rose-throated Becard", "Roseate Spoonbill", "Roseate Tern", "Ross's Goose", "Ross's Gull", "Rough-legged Hawk", "Royal Tern", "Ruby-crowned Kinglet", "Ruby-throated Hummingbird", "Ruddy Duck", "Ruddy Ground-Dove", "Ruddy Quail-Dove", "Ruddy Turnstone", "Ruff", "Ruffed Grouse", "Rufous Hummingbird", "Rufous-backed Robin", "Rufous-capped Warbler", "Rufous-crowned Sparrow", "Rufous-winged Sparrow", "Rustic Bunting", "Rusty Blackbird", "Sabine's Gull", "Sage Grouse", "Sage Sparrow", "Sage Thrasher", "Saltmarsh Sharp-tailed Sparrow", "Sanderling", "Sandhill Crane", "Sandwich Tern", "Savannah Sparrow", "Say's Phoebe", "Scaled Quail", "Scaly-naped Pigeon", "Scarlet Ibis", "Scarlet Tanager", "Scissor-tailed Flycatcher", "Scott's Oriole", "Seaside Sparrow", "Sedge Wren", "Semipalmated Plover", "Semipalmated Sandpiper", "Sharp-shinned Hawk", "Sharp-tailed Grouse", "Sharp-tailed Sandpiper", "Shiny Cowbird", "Short-billed Dowitcher", "Short-eared Owl", "Short-tailed Albatross", "Short-tailed Hawk", "Short-tailed Shearwater", "Shy Albatross", "Siberian Accentor", "Siberian Blue Robin", "Siberian Flycatcher", "Siberian Rubythroat", "Sky Lark", "Slate-throated Redstart", "Slaty-backed Gull", "Slender-billed Curlew", "Smew", "Smith's Longspur", "Smooth-billed Ani", "Snail Kite", "Snow Bunting", "Snow Goose", "Snowy Egret", "Snowy Owl", "Snowy Plover", "Solitary Sandpiper", "Song Sparrow", "Sooty Shearwater", "Sooty Tern", "Sora", "South Polar Skua", "Southern Martin", "Spectacled Eider", "Spoonbill Sandpiper", "Spot-billed Duck", "Spot-breasted Oriole", "Spotted Dove", "Spotted Owl", "Spotted Rail", "Spotted Redshank", "Spotted Sandpiper", "Spotted Towhee", "Sprague's Pipit", "Spruce Grouse", "Stejneger's Petrel", "Steller's Eider", "Steller's Jay", "Steller's Sea-Eagle", "Stilt Sandpiper", "Stonechat", "Streak-backed Oriole", "Streaked Shearwater", "Strickland's Woodpecker", "Stripe-headed Tanager", "Sulphur-bellied Flycatcher", "Summer Tanager", "Surf Scoter", "Surfbird", "Swainson's Hawk", "Swainson's Thrush", "Swainson's Warbler", "Swallow-tailed Kite", "Swamp Sparrow", "Tamaulipas Crow", "Tawny-shouldered Blackbird", "Temminck's Stint", "Tennessee Warbler", "Terek Sandpiper", "Thayer's Gull", "Thick-billed Kingbird", "Thick-billed Murre", "Thick-billed Parrot", "Thick-billed Vireo", "Three-toed Woodpecker", "Townsend's Solitaire", "Townsend's Warbler", "Tree Pipit", "Tree Swallow", "Tricolored Blackbird", "Tricolored Heron", "Tropical Kingbird", "Tropical Parula", "Trumpeter Swan", "Tufted Duck", "Tufted Flycatcher", "Tufted Puffin", "Tufted Titmouse", "Tundra Swan", "Turkey Vulture", "Upland Sandpiper", "Varied Bunting", "Varied Thrush", "Variegated Flycatcher", "Vaux's Swift", "Veery", "Verdin", "Vermilion Flycatcher", "Vesper Sparrow", "Violet-crowned Hummingbird", "Violet-green Swallow", "Virginia Rail", "Virginia's Warbler", "Wandering Albatross", "Wandering Tattler", "Warbling Vireo", "Wedge-rumped Storm-Petrel", "Wedge-tailed Shearwater", "Western Bluebird", "Western Grebe", "Western Gull", "Western Kingbird", "Western Meadowlark", "Western Reef-Heron", "Western Sandpiper", "Western Screech-Owl", "Western Scrub-Jay", "Western Tanager", "Western Wood-Pewee", "Whimbrel", "Whip-poor-will", "Whiskered Auklet", "Whiskered Screech-Owl", "Whiskered Tern", "White Ibis", "White Wagtail", "White-breasted Nuthatch", "White-cheeked Pintail", "White-chinned Petrel", "White-collared Seedeater", "White-collared Swift", "White-crowned Pigeon", "White-crowned Sparrow", "White-eared Hummingbird", "White-eyed Vireo", "White-faced Ibis", "White-faced Storm-Petrel", "White-headed Woodpecker", "White-rumped Sandpiper", "White-tailed Eagle", "White-tailed Hawk", "White-tailed Kite", "White-tailed Ptarmigan", "White-tailed Tropicbird", "White-throated Needletail", "White-throated Robin", "White-throated Sparrow", "White-throated Swift", "White-tipped Dove", "White-winged Crossbill", "White-winged Dove", "White-winged Parakeet", "White-winged Scoter", "White-winged Tern", "Whooper Swan", "Whooping Crane", "Wild Turkey", "Willet", "Williamson's Sapsucker", "Willow Flycatcher", "Willow Ptarmigan", "Wilson's Phalarope", "Wilson's Plover", "Wilson's Storm-Petrel", "Wilson's Warbler", "Winter Wren", "Wood Duck", "Wood Sandpiper", "Wood Stork", "Wood Thrush", "Wood Warbler", "Worm-eating Warbler", "Worthen's Sparrow", "Wrentit", "Xantus's Hummingbird", "Xantus's Murrelet", "Yellow Bittern", "Yellow Grosbeak", "Yellow Rail", "Yellow Wagtail", "Yellow Warbler", "Yellow-bellied Flycatcher", "Yellow-bellied Sapsucker", "Yellow-billed Cuckoo", "Yellow-billed Loon", "Yellow-billed Magpie", "Yellow-breasted Bunting", "Yellow-breasted Chat", "Yellow-crowned Night-Heron", "Yellow-eyed Junco", "Yellow-faced Grassquit", "Yellow-footed Gull", "Yellow-green Vireo", "Yellow-headed Blackbird", "Yellow-legged Gull", "Yellow-nosed Albatross", "Yellow-rumped Warbler", "Yellow-throated Vireo", "Yellow-throated Warbler", "Yucatan Vireo", "Zenaida Dove", "Zone-tailed Hawk"];
var t = ["Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Balinese", "Bengal", "Birman", "Bombay", "British Shorthair", "Burmese", "Chartreux", "Chausie", "Cornish Rex", "Devon Rex", "Donskoy", "Egyptian Mau", "Exotic Shorthair", "Havana", "Highlander", "Himalayan", "Japanese Bobtail", "Korat", "Kurilian Bobtail", "LaPerm", "Maine Coon", "Manx", "Minskin", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Ojos Azules", "Oriental", "Persian", "Peterbald", "Pixiebob", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Serengeti", "Siamese", "Siberian", "Singapura", "Snowshoe", "Sokoke", "Somali", "Sphynx", "Thai", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van"];
var l = ["Amazon River Dolphin", "Arnoux's Beaked Whale", "Atlantic Humpbacked Dolphin", "Atlantic Spotted Dolphin", "Atlantic White-Sided Dolphin", "Australian Snubfin Dolphin", "Australian humpback Dolphin", "Blue Whale", "Bottlenose Dolphin", "Bryde\u2019s whale", "Burrunan Dolphin", "Chilean Dolphin", "Chinese River Dolphin", "Chinese White Dolphin", "Clymene Dolphin", "Commerson\u2019s Dolphin", "Costero", "Dusky Dolphin", "False Killer Whale", "Fin Whale", "Fraser\u2019s Dolphin", "Ganges River Dolphin", "Guiana Dolphin", "Heaviside\u2019s Dolphin", "Hector\u2019s Dolphin", "Hourglass Dolphin", "Humpback whale", "Indo-Pacific Bottlenose Dolphin", "Indo-Pacific Hump-backed Dolphin", "Irrawaddy Dolphin", "Killer Whale (Orca)", "La Plata Dolphin", "Long-Beaked Common Dolphin", "Long-finned Pilot Whale", "Longman's Beaked Whale", "Melon-headed Whale", "Northern Rightwhale Dolphin", "Omura\u2019s whale", "Pacific White-Sided Dolphin", "Pantropical Spotted Dolphin", "Peale\u2019s Dolphin", "Pygmy Killer Whale", "Risso\u2019s Dolphin", "Rough-Toothed Dolphin", "Sei Whale", "Short-Beaked Common Dolphin", "Short-finned Pilot Whale", "Southern Bottlenose Whale", "Southern Rightwhale Dolphin", "Sperm Whale", "Spinner Dolphin", "Striped Dolphin", "Tucuxi", "White-Beaked Dolphin"];
var s = ["Aberdeen Angus", "Abergele", "Abigar", "Abondance", "Abyssinian Shorthorned Zebu", "Aceh", "Achham", "Adamawa", "Adaptaur", "Afar", "Africangus", "Afrikaner", "Agerolese", "Alambadi", "Alatau", "Albanian", "Albera", "Alderney", "Alentejana", "Aleutian wild cattle", "Aliad Dinka", "Alistana-Sanabresa", "Allmogekor", "Alur", "American", "American Angus", "American Beef Friesian", "American Brown Swiss", "American Milking Devon", "American White Park", "Amerifax", "Amrit Mahal", "Amsterdam Island cattle", "Anatolian Black", "Andalusian Black", "Andalusian Blond", "Andalusian Grey", "Angeln", "Angoni", "Ankina", "Ankole", "Ankole-Watusi", "Aracena", "Arado", "Argentine Criollo", "Argentine Friesian", "Armorican", "Arouquesa", "Arsi", "Asturian Mountain", "Asturian Valley", "Aubrac", "Aulie-Ata", "Aure et Saint-Girons", "Australian Braford", "Australian Brangus", "Australian Charbray", "Australian Friesian Sahiwal", "Australian Lowline", "Australian Milking Zebu", "Australian Shorthorn", "Austrian Simmental", "Austrian Yellow", "Avile\xF1a-Negra Ib\xE9rica", "Av\xE9tonou", "Aweil Dinka", "Ayrshire", "Azaouak", "Azebuado", "Azerbaijan Zebu", "Azores", "Bachaur cattle", "Baherie cattle", "Bakosi cattle", "Balancer", "Baoule", "Bargur cattle", "Barros\xE3", "Barzona", "Bazadaise", "Beef Freisian", "Beefalo", "Beefmaker", "Beefmaster", "Begayt", "Belgian Blue", "Belgian Red", "Belgian Red Pied", "Belgian White-and-Red", "Belmont Red", "Belted Galloway", "Bernese", "Berrenda cattle", "Betizu", "Bianca Modenese", "Blaarkop", "Black Angus", "Black Baldy", "Black Hereford", "Blanca Cacere\xF1a", "Blanco Orejinegro BON", "Blonde d'Aquitaine", "Blue Albion", "Blue Grey", "Bohuskulla", "Bonsmara", "Boran", "Bo\u0161karin", "Braford", "Brahman", "Brahmousin", "Brangus", "Braunvieh", "Brava", "Breed", "British Friesian", "British White", "Brown Carpathian", "Brown Caucasian", "Brown Swiss", "Bue Lingo", "Burlina", "Bushuyev", "Butana cattle", "Bu\u0161a cattle", "Cachena", "Caldelana", "Camargue", "Campbell Island cattle", "Canadian Speckle Park", "Canadienne", "Canaria", "Canchim", "Caracu", "Carinthian Blondvieh", "Carora", "Charbray", "Charolais", "Chateaubriand", "Chiangus", "Chianina", "Chillingham cattle", "Chinese Black Pied", "Cholistani", "Coloursided White Back", "Commercial", "Corriente", "Corsican cattle", "Coste\xF1o con Cuernos", "Crioulo Lageano", "C\xE1rdena Andaluza", "Dajal", "Dangi cattle", "Danish Black-Pied", "Danish Jersey", "Danish Red", "Deep Red cattle", "Deoni", "Devon", "Dexter cattle", "Dhanni", "Doayo cattle", "Doela", "Drakensberger", "Droughtmaster", "Dulong'", "Dutch Belted", "Dutch Friesian", "Dwarf Lulu", "D\xF8lafe", "East Anatolian Red", "Eastern Finncattle", "Eastern Red Polled", "Enderby Island cattle", "English Longhorn", "Ennstaler Bergscheck", "Estonian Holstein", "Estonian Native", "Estonian Red cattle", "Finncattle", "Finnish Ayrshire", "Finnish Holstein-Friesian", "Fj\xE4ll", "Fleckvieh", "Florida Cracker cattle", "Fogera", "French Simmental", "Fribourgeoise", "Friesian Red and White", "Fulani Sudanese", "F\u0113ng Cattle", "Galician Blond", "Galloway cattle", "Gangatiri", "Gaolao", "Garvonesa", "Gascon cattle", "Gelbvieh", "Georgian Mountain cattle", "German Angus", "German Black Pied Dairy", "German Black Pied cattle", "German Red Pied", "Gir", "Glan cattle", "Gloucester", "Gobra", "Greek Shorthorn", "Greek Steppe", "Greyman cattle", "Gudali", "Guernsey cattle", "Guzer\xE1", "Hallikar4", "Hanwoo", "Hariana cattle", "Hart\xF3n del Valle", "Harzer Rotvieh", "Hays Converter", "Heck cattle", "Hereford", "Herens", "Highland cattle", "Hinterwald", "Holando-Argentino", "Holstein Friesian cattle", "Horro", "Hungarian Grey", "Hu\xE1ng Cattle", "Hybridmaster", "Iberian cattle", "Icelandic", "Illawarra cattle", "Improved Red and White", "Indo-Brazilian", "Irish Moiled", "Israeli Holstein", "Israeli Red", "Istoben cattle", "Istrian cattle", "Jamaica Black", "Jamaica Hope", "Jamaica Red", "Japanese Brown", "Jarmelista", "Javari cattle", "Jersey cattle", "Jutland cattle", "Kabin Buri cattle", "Kalmyk cattle", "Kamphaeng Saen cattle", "Kangayam", "Kankrej", "Karan Swiss", "Kasaragod Dwarf cattle", "Kathiawadi", "Kazakh Whiteheaded", "Kenana cattle", "Kenkatha cattle", "Kerry cattle", "Kherigarh", "Khillari cattle", "Kholomogory", "Korat Wagyu", "Kostroma cattle", "Krishna Valley cattle", "Kurgan cattle", "Kuri", "La Reina cattle", "Lakenvelder cattle", "Lampurger", "Latvian Blue", "Latvian Brown", "Latvian Danish Red", "Lebedyn", "Levantina", "Limia cattle", "Limousin", "Limpurger", "Lincoln Red", "Lineback", "Lithuanian Black-and-White", "Lithuanian Light Grey", "Lithuanian Red", "Lithuanian White-Backed", "Lohani cattle", "Lourdais", "Lucerna cattle", "Luing", "Madagascar Zebu", "Madura", "Maine-Anjou", "Malnad Gidda", "Malvi", "Mandalong Special", "Mantequera Leonesa", "Maramure\u015F Brown", "Marchigiana", "Maremmana", "Marinhoa", "Maronesa", "Masai", "Mashona", "Menorquina", "Mertolenga", "Meuse-Rhine-Issel", "Mewati", "Milking Shorthorn", "Minhota", "Mirandesa", "Mirkadim", "Moc\u0103ni\u0163\u0103", "Mollie", "Monchina", "Mongolian", "Montb\xE9liarde", "Morucha", "Murboden", "Murnau-Werdenfels", "Murray Grey", "Muturu", "N'Dama", "Nagori", "Negra Andaluza", "Nelore", "Nguni", "Nimari", "Normande", "North Bengal Grey", "Northern Finncattle", "Northern Shorthorn", "Norwegian Red", "Ongole", "Original Simmental", "Pajuna", "Palmera", "Pantaneiro", "Parda Alpina", "Parthenaise", "Pasiega", "Pembroke", "Philippine Native", "Pie Rouge des Plaines", "Piedmontese cattle", "Pineywoods", "Pinzgauer", "Pirenaica", "Podolac", "Podolica", "Polish Black-and-White", "Polish Red", "Poll Shorthorn", "Polled Hereford", "Polled Shorthorn", "Ponwar", "Preta", "Pulikulam", "Punganur", "Pustertaler Sprinzen", "Qinchaun", "Queensland Miniature Boran", "RX3", "Ramo Grande", "Randall", "Raramuri Criollo", "Rathi", "Raya", "Red Angus", "Red Brangus", "Red Chittagong", "Red Fulani", "Red Gorbatov", "Red Holstein", "Red Kandhari", "Red Mingrelian", "Red Poll", "Red Polled \xD8stland", "Red Sindhi", "Retinta", "Riggit Galloway", "Ringam\xE5la", "Rohjan", "Romagnola", "Romanian B\u0103l\u0163ata", "Romanian Steppe Gray", "Romosinuano", "Russian Black Pied", "R\xE4tisches Grauvieh", "Sahiwal", "Salers", "Salorn", "Sanga", "Sanhe", "Santa Cruz", "Santa Gertrudis", "Sayaguesa", "Schwyz", "Selembu", "Senepol", "Serbian Pied", "Serbian Steppe", "Sheko", "Shetland", "Shorthorn", "Siboney de Cuba", "Simbrah", "Simford", "Simmental", "Siri", "South Devon", "Spanish Fighting Bull", "Speckle Park", "Square Meater", "Sussex", "Swedish Friesian", "Swedish Polled", "Swedish Red Pied", "Swedish Red Polled", "Swedish Red-and-White", "Tabapu\xE3", "Tarentaise", "Tasmanian Grey", "Tauros", "Telemark", "Texas Longhorn", "Texon", "Thai Black", "Thai Fighting Bull", "Thai Friesian", "Thai Milking Zebu", "Tharparkar", "Tswana", "Tudanca", "Tuli", "Tulim", "Turkish Grey Steppe", "Tux-Zillertal", "Tyrol Grey", "Ukrainian Grey", "Umblachery", "Valdostana Castana", "Valdostana Pezzata Nera", "Valdostana Pezzata Rossa", "Vaynol", "Vechur8", "Vestland Fjord", "Vestland Red Polled", "Vianesa", "Volinian Beef", "Vorderwald", "Vosgienne", "V\xE4neko", "Waguli", "Wagyu", "Wangus", "Welsh Black", "Western Finncattle", "White C\xE1ceres", "White Fulani", "White Lamphun", "White Park", "Whitebred Shorthorn", "Xingjiang Brown", "Yakutian", "Yanbian", "Yanhuang", "Yurino", "Zebu", "\xC9vol\xE8ne cattle", "\u017Bubro\u0144"];
var d = ["African Slender-snouted Crocodile", "Alligator mississippiensis", "American Crocodile", "Australian Freshwater Crocodile", "Black Caiman", "Broad-snouted Caiman", "Chinese Alligator", "Cuban Crocodile", "Cuvier\u2019s Dwarf Caiman", "Dwarf Crocodile", "Gharial", "Morelet\u2019s Crocodile", "Mugger Crocodile", "New Guinea Freshwater Crocodile", "Nile Crocodile", "Orinoco Crocodile", "Philippine Crocodile", "Saltwater Crocodile", "Schneider\u2019s Smooth-fronted Caiman", "Siamese Crocodile", "Spectacled Caiman", "Tomistoma", "West African Crocodile", "Yacare Caiman"];
var u = ["Affenpinscher", "Afghan Hound", "Aidi", "Airedale Terrier", "Akbash", "Akita", "Alano Espa\xF1ol", "Alapaha Blue Blood Bulldog", "Alaskan Husky", "Alaskan Klee Kai", "Alaskan Malamute", "Alopekis", "Alpine Dachsbracke", "American Bulldog", "American Bully", "American Cocker Spaniel", "American English Coonhound", "American Foxhound", "American Hairless Terrier", "American Pit Bull Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Andalusian Hound", "Anglo-Fran\xE7ais de Petite V\xE9nerie", "Appenzeller Sennenhund", "Ariegeois", "Armant", "Armenian Gampr dog", "Artois Hound", "Australian Cattle Dog", "Australian Kelpie", "Australian Shepherd", "Australian Stumpy Tail Cattle Dog", "Australian Terrier", "Austrian Black and Tan Hound", "Austrian Pinscher", "Azawakh", "Bakharwal dog", "Banjara Hound", "Barbado da Terceira", "Barbet", "Basenji", "Basque Shepherd Dog", "Basset Art\xE9sien Normand", "Basset Bleu de Gascogne", "Basset Fauve de Bretagne", "Basset Hound", "Bavarian Mountain Hound", "Beagle", "Beagle-Harrier", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Shepherd", "Bergamasco Shepherd", "Berger Picard", "Bernese Mountain Dog", "Bhotia", "Bichon Fris\xE9", "Billy", "Black Mouth Cur", "Black Norwegian Elkhound", "Black Russian Terrier", "Black and Tan Coonhound", "Bloodhound", "Blue Lacy", "Blue Picardy Spaniel", "Bluetick Coonhound", "Boerboel", "Bohemian Shepherd", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Bosnian Coarse-haired Hound", "Boston Terrier", "Bouvier des Ardennes", "Bouvier des Flandres", "Boxer", "Boykin Spaniel", "Bracco Italiano", "Braque Francais", "Braque Saint-Germain", "Braque d'Auvergne", "Braque de l'Ari\xE8ge", "Braque du Bourbonnais", "Briard", "Briquet Griffon Vend\xE9en", "Brittany", "Broholmer", "Bruno Jura Hound", "Brussels Griffon", "Bucovina Shepherd Dog", "Bull Arab", "Bull Terrier", "Bulldog", "Bullmastiff", "Bully Kutta", "Burgos Pointer", "Cairn Terrier", "Campeiro Bulldog", "Can de Chira", "Canaan Dog", "Canadian Eskimo Dog", "Cane Corso", "Cane Paratore", "Cane di Oropa", "Cantabrian Water Dog", "Cardigan Welsh Corgi", "Carea Castellano Manchego", "Carolina Dog", "Carpathian Shepherd Dog", "Catahoula Leopard Dog", "Catalan Sheepdog", "Caucasian Shepherd Dog", "Cavalier King Charles Spaniel", "Central Asian Shepherd Dog", "Cesky Fousek", "Cesky Terrier", "Chesapeake Bay Retriever", "Chien Fran\xE7ais Blanc et Noir", "Chien Fran\xE7ais Blanc et Orange", "Chien Fran\xE7ais Tricolore", "Chihuahua", "Chilean Terrier", "Chinese Chongqing Dog", "Chinese Crested Dog", "Chinook", "Chippiparai", "Chongqing dog", "Chortai", "Chow Chow", "Cimarr\xF3n Uruguayo", "Cirneco dell'Etna", "Clumber Spaniel", "Colombian fino hound", "Coton de Tulear", "Cretan Hound", "Croatian Sheepdog", "Curly-Coated Retriever", "Cursinu", "Czechoslovakian Wolfdog", "C\xE3o Fila de S\xE3o Miguel", "C\xE3o da Serra de Aires", "C\xE3o de Castro Laboreiro", "C\xE3o de Gado Transmontano", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Danish-Swedish Farmdog", "Denmark Feist", "Dingo", "Doberman Pinscher", "Dogo Argentino", "Dogo Guatemalteco", "Dogo Sardesco", "Dogue Brasileiro", "Dogue de Bordeaux", "Drentse Patrijshond", "Drever", "Dunker", "Dutch Shepherd", "Dutch Smoushond", "East European Shepherd", "East Siberian Laika", "English Cocker Spaniel", "English Foxhound", "English Mastiff", "English Setter", "English Shepherd", "English Springer Spaniel", "English Toy Terrier", "Entlebucher Mountain Dog", "Estonian Hound", "Estrela Mountain Dog", "Eurasier", "Field Spaniel", "Fila Brasileiro", "Finnish Hound", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "French Bulldog", "French Spaniel", "Galgo Espa\xF1ol", "Galician Shepherd Dog", "Garafian Shepherd", "Gascon Saintongeois", "Georgian Shepherd", "German Hound", "German Longhaired Pointer", "German Pinscher", "German Roughhaired Pointer", "German Shepherd Dog", "German Shorthaired Pointer", "German Spaniel", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Go\u0144czy Polski", "Grand Anglo-Fran\xE7ais Blanc et Noir", "Grand Anglo-Fran\xE7ais Blanc et Orange", "Grand Anglo-Fran\xE7ais Tricolore", "Grand Basset Griffon Vend\xE9en", "Grand Bleu de Gascogne", "Grand Griffon Vend\xE9en", "Great Dane", "Greater Swiss Mountain Dog", "Greek Harehound", "Greek Shepherd", "Greenland Dog", "Greyhound", "Griffon Bleu de Gascogne", "Griffon Fauve de Bretagne", "Griffon Nivernais", "Gull Dong", "Gull Terrier", "Hamiltonst\xF6vare", "Hanover Hound", "Harrier", "Havanese", "Hierran Wolfdog", "Hokkaido", "Hovawart", "Huntaway", "Hygen Hound", "H\xE4llefors Elkhound", "Ibizan Hound", "Icelandic Sheepdog", "Indian Spitz", "Indian pariah dog", "Irish Red and White Setter", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Istrian Coarse-haired Hound", "Istrian Shorthaired Hound", "Italian Greyhound", "Jack Russell Terrier", "Jagdterrier", "Japanese Chin", "Japanese Spitz", "Japanese Terrier", "Jindo", "Jonangi", "Kai Ken", "Kaikadi", "Kangal Shepherd Dog", "Kanni", "Karakachan dog", "Karelian Bear Dog", "Kars", "Karst Shepherd", "Keeshond", "Kerry Beagle", "Kerry Blue Terrier", "King Charles Spaniel", "King Shepherd", "Kintamani", "Kishu", "Kokoni", "Kombai", "Komondor", "Kooikerhondje", "Koolie", "Koyun dog", "Kromfohrl\xE4nder", "Kuchi", "Kuvasz", "Labrador Retriever", "Lagotto Romagnolo", "Lakeland Terrier", "Lancashire Heeler", "Landseer", "Lapponian Herder", "Large M\xFCnsterl\xE4nder", "Leonberger", "Levriero Sardo", "Lhasa Apso", "Lithuanian Hound", "Lupo Italiano", "L\xF6wchen", "Mackenzie River Husky", "Magyar ag\xE1r", "Mahratta Greyhound", "Maltese", "Manchester Terrier", "Maremmano-Abruzzese Sheepdog", "McNab dog", "Miniature American Shepherd", "Miniature Bull Terrier", "Miniature Fox Terrier", "Miniature Pinscher", "Miniature Schnauzer", "Molossus of Epirus", "Montenegrin Mountain Hound", "Mountain Cur", "Mountain Feist", "Mucuchies", "Mudhol Hound", "Mudi", "Neapolitan Mastiff", "New Guinea Singing Dog", "New Zealand Heading Dog", "Newfoundland", "Norfolk Terrier", "Norrbottenspets", "Northern Inuit Dog", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old Croatian Sighthound", "Old Danish Pointer", "Old English Sheepdog", "Old English Terrier", "Olde English Bulldogge", "Otterhound", "Pachon Navarro", "Paisley Terrier", "Pampas Deerhound", "Papillon", "Parson Russell Terrier", "Pastore della Lessinia e del Lagorai", "Patagonian Sheepdog", "Patterdale Terrier", "Pekingese", "Pembroke Welsh Corgi", "Perro Majorero", "Perro de Pastor Mallorquin", "Perro de Presa Canario", "Perro de Presa Mallorquin", "Peruvian Inca Orchid", "Petit Basset Griffon Vend\xE9en", "Petit Bleu de Gascogne", "Phal\xE8ne", "Pharaoh Hound", "Phu Quoc Ridgeback", "Picardy Spaniel", "Plott Hound", "Plummer Terrier", "Podenco Canario", "Podenco Valenciano", "Pointer", "Poitevin", "Polish Greyhound", "Polish Hound", "Polish Lowland Sheepdog", "Polish Tatra Sheepdog", "Pomeranian", "Pont-Audemer Spaniel", "Poodle", "Porcelaine", "Portuguese Podengo", "Portuguese Pointer", "Portuguese Water Dog", "Posavac Hound", "Pra\u017Esk\xFD Krysa\u0159\xEDk", "Pshdar Dog", "Pudelpointer", "Pug", "Puli", "Pumi", "Pungsan Dog", "Pyrenean Mastiff", "Pyrenean Mountain Dog", "Pyrenean Sheepdog", "Rafeiro do Alentejo", "Rajapalayam", "Rampur Greyhound", "Rat Terrier", "Ratonero Bodeguero Andaluz", "Ratonero Mallorquin", "Ratonero Murciano de Huerta", "Ratonero Valenciano", "Redbone Coonhound", "Rhodesian Ridgeback", "Romanian Mioritic Shepherd Dog", "Romanian Raven Shepherd Dog", "Rottweiler", "Rough Collie", "Russian Spaniel", "Russian Toy", "Russo-European Laika", "Saarloos Wolfdog", "Sabueso Espa\xF1ol", "Saint Bernard", "Saint Hubert Jura Hound", "Saint-Usuge Spaniel", "Saluki", "Samoyed", "Sapsali", "Sarabi dog", "Sardinian Shepherd Dog", "Schapendoes", "Schillerst\xF6vare", "Schipperke", "Schweizer Laufhund", "Schweizerischer Niederlaufhund", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Segugio Italiano", "Segugio Maremmano", "Segugio dell'Appennino", "Seppala Siberian Sleddog", "Serbian Hound", "Serbian Tricolour Hound", "Serrano Bulldog", "Shar Pei", "Shetland Sheepdog", "Shiba Inu", "Shih Tzu", "Shikoku", "Shiloh Shepherd", "Siberian Husky", "Silken Windhound", "Silky Terrier", "Sinhala Hound", "Skye Terrier", "Sloughi", "Slovakian Wirehaired Pointer", "Slovensk\xFD Cuvac", "Slovensk\xFD Kopov", "Smalandst\xF6vare", "Small Greek domestic dog", "Small M\xFCnsterl\xE4nder", "Smooth Collie", "Smooth Fox Terrier", "Soft-Coated Wheaten Terrier", "South Russian Ovcharka", "Spanish Mastiff", "Spanish Water Dog", "Spinone Italiano", "Sporting Lucas Terrier", "Stabyhoun", "Staffordshire Bull Terrier", "Standard Schnauzer", "Stephens Stock", "Styrian Coarse-haired Hound", "Sussex Spaniel", "Swedish Elkhound", "Swedish Lapphund", "Swedish Vallhund", "Swedish White Elkhound", "Taigan", "Taiwan Dog", "Tamaskan Dog", "Teddy Roosevelt Terrier", "Telomian", "Tenterfield Terrier", "Terrier Brasileiro", "Thai Bangkaew Dog", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Tornjak", "Tosa", "Toy Fox Terrier", "Toy Manchester Terrier", "Transylvanian Hound", "Treeing Cur", "Treeing Feist", "Treeing Tennessee Brindle", "Treeing Walker Coonhound", "Trigg Hound", "Tyrolean Hound", "Vikhan", "Villano de Las Encartaciones", "Villanuco de Las Encartaciones", "Vizsla", "Volpino Italiano", "Weimaraner", "Welsh Sheepdog", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier", "West Siberian Laika", "Westphalian Dachsbracke", "Wetterhoun", "Whippet", "White Shepherd", "White Swiss Shepherd Dog", "Wire Fox Terrier", "Wirehaired Pointing Griffon", "Wirehaired Vizsla", "Xiasi Dog", "Xoloitzcuintli", "Yakutian Laika", "Yorkshire Terrier", "\u0160arplaninac"];
var c = ["Alaska pollock", "Albacore", "Amur catfish", "Araucanian herring", "Argentine hake", "Asari", "Asian swamp eel", "Atlantic cod", "Atlantic herring", "Atlantic horse mackerel", "Atlantic mackerel", "Atlantic menhaden", "Atlantic salmon", "Bigeye scad", "Bigeye tuna", "Bighead carp", "Black carp", "Blood cockle", "Blue swimming crab", "Blue whiting", "Bombay-duck", "Bonga shad", "California pilchard", "Cape horse mackerel", "Capelin", "Catla", "Channel catfish", "Chilean jack mackerel", "Chinese perch", "Chinese softshell turtle", "Chub mackerel", "Chum salmon", "Common carp", "Crucian carp", "Daggertooth pike conger", "European anchovy", "European pilchard", "European sprat", "Filipino Venus", "Gazami crab", "Goldstripe sardinella", "Grass carp", "Gulf menhaden", "Haddock", "Hilsa shad", "Indian mackerel", "Indian oil sardine", "Iridescent shark", "Japanese anchovy", "Japanese cockle", "Japanese common catfish", "Japanese flying squid", "Japanese jack mackerel", "Japanese littleneck", "Japanese pilchard", "Jumbo flying squid", "Kawakawa", "Korean bullhead", "Largehead hairtail", "Longtail tuna", "Madeiran sardinella", "Mandarin fish", "Milkfish", "Mrigal carp", "Narrow-barred Spanish mackerel", "Nile perch", "Nile tilapia", "North Pacific hake", "Northern snakehead", "Pacific anchoveta", "Pacific cod", "Pacific herring", "Pacific sand lance", "Pacific sandlance", "Pacific saury", "Pacific thread herring", "Peruvian anchoveta", "Pink salmon", "Pollock", "Pond loach", "Rainbow trout", "Rohu", "Round sardinella", "Short mackerel", "Silver carp", "Silver cyprinid", "Skipjack tuna", "Southern African anchovy", "Southern rough shrimp", "Whiteleg shrimp", "Wuchang bream", "Yellow croaker", "Yellowfin tuna", "Yellowhead catfish", "Yellowstripe scad"];
var m = ["Abaco Barb", "Abtenauer", "Abyssinian", "Aegidienberger", "Akhal-Teke", "Albanian Horse", "Altai Horse", "Alt\xE8r Real", "American Albino", "American Cream Draft", "American Indian Horse", "American Paint Horse", "American Quarter Horse", "American Saddlebred", "American Warmblood", "Andalusian Horse", "Andravida Horse", "Anglo-Arabian", "Anglo-Arabo-Sardo", "Anglo-Kabarda", "Appaloosa", "AraAppaloosa", "Arabian Horse", "Ardennes Horse", "Arenberg-Nordkirchen", "Argentine Criollo", "Asian wild Horse", "Assateague Horse", "Asturc\xF3n", "Augeron", "Australian Brumby", "Australian Draught Horse", "Australian Stock Horse", "Austrian Warmblood", "Auvergne Horse", "Auxois", "Azerbaijan Horse", "Azteca Horse", "Baise Horse", "Bale", "Balearic Horse", "Balikun Horse", "Baluchi Horse", "Banker Horse", "Barb Horse", "Bardigiano", "Bashkir Curly", "Basque Mountain Horse", "Bavarian Warmblood", "Belgian Half-blood", "Belgian Horse", "Belgian Warmblood", "Bhutia Horse", "Black Forest Horse", "Blazer Horse", "Boerperd", "Borana", "Boulonnais Horse", "Brabant", "Brandenburger", "Brazilian Sport Horse", "Breton Horse", "Brumby", "Budyonny Horse", "Burguete Horse", "Burmese Horse", "Byelorussian Harness Horse", "Calabrese Horse", "Camargue Horse", "Camarillo White Horse", "Campeiro", "Campolina", "Canadian Horse", "Canadian Pacer", "Carolina Marsh Tacky", "Carthusian Horse", "Caspian Horse", "Castilian Horse", "Castillonnais", "Catria Horse", "Cavallo Romano della Maremma Laziale", "Cerbat Mustang", "Chickasaw Horse", "Chilean Corralero", "Choctaw Horse", "Cleveland Bay", "Clydesdale Horse", "Cob", "Coldblood Trotter", "Colonial Spanish Horse", "Colorado Ranger", "Comtois Horse", "Corsican Horse", "Costa Rican Saddle Horse", "Cretan Horse", "Criollo Horse", "Croatian Coldblood", "Cuban Criollo", "Cumberland Island Horse", "Curly Horse", "Czech Warmblood", "Daliboz", "Danish Warmblood", "Danube Delta Horse", "Dole Gudbrandsdal", "Don", "Dongola Horse", "Draft Trotter", "Dutch Harness Horse", "Dutch Heavy Draft", "Dutch Warmblood", "Dzungarian Horse", "East Bulgarian", "East Friesian Horse", "Estonian Draft", "Estonian Horse", "Falabella", "Faroese", "Finnhorse", "Fjord Horse", "Fleuve", "Florida Cracker Horse", "Foutank\xE9", "Frederiksborg Horse", "Freiberger", "French Trotter", "Friesian Cross", "Friesian Horse", "Friesian Sporthorse", "Furioso-North Star", "Galice\xF1o", "Galician Pony", "Gelderland Horse", "Georgian Grande Horse", "German Warmblood", "Giara Horse", "Gidran", "Groningen Horse", "Gypsy Horse", "Hackney Horse", "Haflinger", "Hanoverian Horse", "Heck Horse", "Heihe Horse", "Henson Horse", "Hequ Horse", "Hirzai", "Hispano-Bret\xF3n", "Holsteiner Horse", "Horro", "Hungarian Warmblood", "Icelandic Horse", "Iomud", "Irish Draught", "Irish Sport Horse sometimes called Irish Hunter", "Italian Heavy Draft", "Italian Trotter", "Jaca Navarra", "Jeju Horse", "Jutland Horse", "Kabarda Horse", "Kafa", "Kaimanawa Horses", "Kalmyk Horse", "Karabair", "Karabakh Horse", "Karachai Horse", "Karossier", "Kathiawari", "Kazakh Horse", "Kentucky Mountain Saddle Horse", "Kiger Mustang", "Kinsky Horse", "Kisber Felver", "Kiso Horse", "Kladruber", "Knabstrupper", "Konik", "Kundudo", "Kustanair", "Kyrgyz Horse", "Latvian Horse", "Lipizzan", "Lithuanian Heavy Draught", "Lokai", "Losino Horse", "Lusitano", "Lyngshest", "M'Bayar", "M'Par", "Mallorqu\xEDn", "Malopolski", "Mangalarga", "Mangalarga Marchador", "Maremmano", "Marisme\xF1o Horse", "Marsh Tacky", "Marwari Horse", "Mecklenburger", "Menorqu\xEDn", "Messara Horse", "Metis Trotter", "Mez\u0151hegyesi Sport Horse", "Me\u0111imurje Horse", "Miniature Horse", "Misaki Horse", "Missouri Fox Trotter", "Monchina", "Mongolian Horse", "Mongolian Wild Horse", "Monterufolino", "Morab", "Morgan Horse", "Mountain Pleasure Horse", "Moyle Horse", "Murakoz Horse", "Murgese", "Mustang Horse", "M\xE9rens Horse", "Namib Desert Horse", "Nangchen Horse", "National Show Horse", "Nez Perce Horse", "Nivernais Horse", "Nokota Horse", "Noma", "Nonius Horse", "Nooitgedachter", "Nordlandshest", "Noriker Horse", "Norman Cob", "North American Single-Footer Horse", "North Swedish Horse", "Norwegian Coldblood Trotter", "Norwegian Fjord", "Novokirghiz", "Oberlander Horse", "Ogaden", "Oldenburg Horse", "Orlov trotter", "Ostfriesen", "Paint", "Pampa Horse", "Paso Fino", "Pentro Horse", "Percheron", "Persano Horse", "Peruvian Paso", "Pintabian", "Pleven Horse", "Poitevin Horse", "Posavac Horse", "Pottok", "Pryor Mountain Mustang", "Przewalski's Horse", "Pura Raza Espa\xF1ola", "Purosangue Orientale", "Qatgani", "Quarab", "Quarter Horse", "Racking Horse", "Retuerta Horse", "Rhenish German Coldblood", "Rhinelander Horse", "Riwoche Horse", "Rocky Mountain Horse", "Romanian Sporthorse", "Rottaler", "Russian Don", "Russian Heavy Draft", "Russian Trotter", "Saddlebred", "Salerno Horse", "Samolaco Horse", "San Fratello Horse", "Sarcidano Horse", "Sardinian Anglo-Arab", "Schleswig Coldblood", "Schwarzw\xE4lder Kaltblut", "Selale", "Sella Italiano", "Selle Fran\xE7ais", "Shagya Arabian", "Shan Horse", "Shire Horse", "Siciliano Indigeno", "Silesian Horse", "Sokolsky Horse", "Sorraia", "South German Coldblood", "Soviet Heavy Draft", "Spanish Anglo-Arab", "Spanish Barb", "Spanish Jennet Horse", "Spanish Mustang", "Spanish Tarpan", "Spanish-Norman Horse", "Spiti Horse", "Spotted Saddle Horse", "Standardbred Horse", "Suffolk Punch", "Swedish Ardennes", "Swedish Warmblood", "Swedish coldblood trotter", "Swiss Warmblood", "Taish\u016B Horse", "Takhi", "Tawleed", "Tchernomor", "Tennessee Walking Horse", "Tersk Horse", "Thoroughbred", "Tiger Horse", "Tinker Horse", "Tolfetano", "Tori Horse", "Trait Du Nord", "Trakehner", "Tsushima", "Tuigpaard", "Ukrainian Riding Horse", "Unmol Horse", "Uzunyayla", "Ventasso Horse", "Virginia Highlander", "Vlaamperd", "Vladimir Heavy Draft", "Vyatka", "Waler", "Waler Horse", "Walkaloosa", "Warlander", "Warmblood", "Welsh Cob", "Westphalian Horse", "Wielkopolski", "W\xFCrttemberger", "Xilingol Horse", "Yakutian Horse", "Yili Horse", "Yonaguni Horse", "Zaniskari", "Zhemaichu", "Zweibr\xFCcker", "\u017Demaitukas"];
var h = ["Acacia-ants", "Acorn-plum gall", "Aerial yellowjacket", "Africanized honey bee", "Allegheny mound ant", "Almond stone wasp", "Ant", "Arboreal ant", "Argentine ant", "Asian paper wasp", "Baldfaced hornet", "Bee", "Bigheaded ant", "Black and yellow mud dauber", "Black carpenter ant", "Black imported fire ant", "Blue horntail woodwasp", "Blue orchard bee", "Braconid wasp", "Bumble bee", "Carpenter ant", "Carpenter wasp", "Chalcid wasp", "Cicada killer", "Citrus blackfly parasitoid", "Common paper wasp", "Crazy ant", "Cuckoo wasp", "Cynipid gall wasp", "Eastern Carpenter bee", "Eastern yellowjacket", "Elm sawfly", "Encyrtid wasp", "Erythrina gall wasp", "Eulophid wasp", "European hornet", "European imported fire ant", "False honey ant", "Fire ant", "Forest bachac", "Forest yellowjacket", "German yellowjacket", "Ghost ant", "Giant ichneumon wasp", "Giant resin bee", "Giant wood wasp", "Golden northern bumble bee", "Golden paper wasp", "Gouty oak gall", "Grass Carrying Wasp", "Great black wasp", "Great golden digger wasp", "Hackberry nipple gall parasitoid", "Honey bee", "Horned oak gall", "Horse guard wasp", "Hunting wasp", "Ichneumonid wasp", "Keyhole wasp", "Knopper gall", "Large garden bumble bee", "Large oak-apple gall", "Leafcutting bee", "Little fire ant", "Little yellow ant", "Long-horned bees", "Long-legged ant", "Macao paper wasp", "Mallow bee", "Marble gall", "Mossyrose gall wasp", "Mud-daubers", "Multiflora rose seed chalcid", "Oak apple gall wasp", "Oak rough bulletgall wasp", "Oak saucer gall", "Oak shoot sawfly", "Odorous house ant", "Orange-tailed bumble bee", "Orangetailed potter wasp", "Oriental chestnut gall wasp", "Paper wasp", "Pavement ant", "Pigeon tremex", "Pip gall wasp", "Prairie yellowjacket", "Pteromalid wasp", "Pyramid ant", "Raspberry Horntail", "Red ant", "Red carpenter ant", "Red harvester ant", "Red imported fire ant", "Red wasp", "Red wood ant", "Red-tailed wasp", "Reddish carpenter ant", "Rough harvester ant", "Sawfly parasitic wasp", "Scale parasitoid", "Silky ant", "Sirex woodwasp", "Siricid woodwasp", "Smaller yellow ant", "Southeastern blueberry bee", "Southern fire ant", "Southern yellowjacket", "Sphecid wasp", "Stony gall", "Sweat bee", "Texas leafcutting ant", "Tiphiid wasp", "Torymid wasp", "Tramp ant", "Valentine ant", "Velvet ant", "Vespid wasp", "Weevil parasitoid", "Western harvester ant", "Western paper wasp", "Western thatching ant", "Western yellowjacket", "White-horned horntail", "Willow shoot sawfly", "Woodwasp", "Wool sower gall maker", "Yellow Crazy Ant", "Yellow and black potter wasp", "Yellow-horned horntail"];
var y = ["Asiatic Lion", "Barbary Lion", "Cape lion", "Masai Lion", "Northeast Congo Lion", "Transvaal lion", "West African Lion"];
var p = ["Ace", "Archie", "Bailey", "Bandit", "Bella", "Bentley", "Bruno", "Buddy", "Charlie", "Coco", "Cookie", "Cooper", "Daisy", "Dixie", "Finn", "Ginger", "Gracie", "Gus", "Hank", "Jack", "Jax", "Joey", "Kobe", "Leo", "Lola", "Louie", "Lucy", "Maggie", "Max", "Mia", "Milo", "Molly", "Murphey", "Nala", "Nova", "Ollie", "Oreo", "Rosie", "Scout", "Stella", "Teddy", "Tuffy"];
var g = ["American", "American Chinchilla", "American Fuzzy Lop", "American Sable", "Argente Brun", "Belgian Hare", "Beveren", "Blanc de Hotot", "Britannia Petite", "Californian", "Champagne D\u2019Argent", "Checkered Giant", "Cinnamon", "Cr\xE8me D\u2019Argent", "Dutch", "Dwarf Hotot", "English Angora", "English Lop", "English Spot", "Flemish Giant", "Florida White", "French Angora", "French Lop", "Giant Angora", "Giant Chinchilla", "Harlequin", "Havana", "Himalayan", "Holland Lop", "Jersey Wooly", "Lilac", "Lionhead", "Mini Lop", "Mini Rex", "Mini Satin", "Netherland Dwarf", "New Zealand", "Palomino", "Polish", "Rex", "Rhinelander", "Satin", "Satin Angora", "Silver", "Silver Fox", "Silver Marten", "Standard Chinchilla", "Tan", "Thrianta"];
var b = ["Abrocoma", "Abrocoma schistacea", "Aconaemys", "Aconaemys porteri", "African brush-tailed porcupine", "Andean mountain cavy", "Argentine tuco-tuco", "Ashy chinchilla rat", "Asiatic brush-tailed porcupine", "Atherurus", "Azara's agouti", "Azara's tuco-tuco", "Bahia porcupine", "Bathyergus", "Bathyergus janetta", "Bathyergus suillus", "Bennett's chinchilla rat", "Bicolored-spined porcupine", "Black agouti", "Black dwarf porcupine", "Black-rumped agouti", "Black-tailed hairy dwarf porcupine", "Bolivian chinchilla rat", "Bolivian tuco-tuco", "Bonetto's tuco-tuco", "Brandt's yellow-toothed cavy", "Brazilian guinea pig", "Brazilian porcupine", "Brazilian tuco-tuco", "Bridge's degu", "Brown hairy dwarf porcupine", "Budin's chinchilla rat, A. budini", "Cape porcupine", "Catamarca tuco-tuco", "Cavia", "Central American agouti", "Chacoan tuco-tuco", "Chilean rock rat", "Chinchilla", "Coendou", "Coiban agouti", "Colburn's tuco-tuco", "Collared tuco-tuco", "Common degu", "Common yellow-toothed cavy", "Conover's tuco-tuco", "Coruro", "Crested agouti", "Crested porcupine", "Cryptomys", "Cryptomys bocagei", "Cryptomys damarensis", "Cryptomys foxi", "Cryptomys hottentotus", "Cryptomys mechowi", "Cryptomys ochraceocinereus", "Cryptomys zechi", "Ctenomys", "Cuniculus", "Cuscomys", "Cuscomys ashanika", "Dactylomys", "Dactylomys boliviensis", "Dactylomys dactylinus", "Dactylomys peruanus", "Dasyprocta", "Domestic guinea pig", "Emily's tuco-tuco", "Erethizon", "Famatina chinchilla rat", "Frosted hairy dwarf porcupine", "Fukomys", "Fukomys amatus", "Fukomys anselli", "Fukomys bocagei", "Fukomys damarensis", "Fukomys darlingi", "Fukomys foxi", "Fukomys ilariae", "Fukomys kafuensis", "Fukomys mechowii", "Fukomys micklemi", "Fukomys occlusus", "Fukomys ochraceocinereus", "Fukomys whytei", "Fukomys zechi", "Furtive tuco-tuco", "Galea", "Georychus", "Georychus capensis", "Golden viscacha-rat", "Goya tuco-tuco", "Greater guinea pig", "Green acouchi", "Haig's tuco-tuco", "Heliophobius", "Heliophobius argenteocinereus", "Heterocephalus", "Heterocephalus glaber", "Highland tuco-tuco", "Hystrix", "Indian porcupine", "Isla Mocha degu", "Kalinowski agouti", "Kannabateomys", "Kannabateomys amblyonyx", "Lagidium", "Lagostomus", "Lewis' tuco-tuco", "Long-tailed chinchilla", "Long-tailed porcupine", "Los Chalchaleros' viscacha-rat", "Lowland paca", "Magellanic tuco-tuco", "Malayan porcupine", "Maule tuco-tuco", "Mendoza tuco-tuco", "Mexican agouti", "Mexican hairy dwarf porcupine", "Microcavia", "Montane guinea pig", "Moon-toothed degu", "Mottled tuco-tuco", "Mountain degu", "Mountain paca", "Mountain viscacha-rat", "Myoprocta", "Natterer's tuco-tuco", "North American porcupine", "Northern viscacha", "Octodon", "Octodontomys", "Octomys", "Olallamys", "Olallamys albicauda", "Olallamys edax", "Orinoco agouti", "Paraguaian hairy dwarf porcupine", "Pearson's tuco-tuco", "Peruvian tuco-tuco", "Philippine porcupine", "Pipanacoctomys", "Plains viscacha", "Plains viscacha-rat", "Porteous' tuco-tuco", "Punta de Vacas chinchilla rat", "Red acouchi", "Red-rumped agouti", "Reddish tuco-tuco", "Rio Negro tuco-tuco", "Robust tuco-tuco", "Roosmalen's dwarf porcupine", "Rothschild's porcupine", "Ruatan Island agouti", "Sage's rock rat", "Salinoctomys", "Salta tuco-tuco", "San Luis tuco-tuco", "Santa Catarina's guinea pig", "Shiny guinea pig", "Shipton's mountain cavy", "Short-tailed chinchilla", "Silky tuco-tuco", "Social tuco-tuco", "Southern mountain cavy", "Southern tuco-tuco", "Southern viscacha", "Spalacopus", "Spix's yellow-toothed cavy", "Steinbach's tuco-tuco", "Streaked dwarf porcupine", "Strong tuco-tuco", "Stump-tailed porcupine", "Sumatran porcupine", "Sunda porcupine", "Talas tuco-tuco", "Tawny tuco-tuco", "Thick-spined porcupine", "Tiny tuco-tuco", "Trichys", "Tucuman tuco-tuco", "Tympanoctomys", "Uspallata chinchilla rat", "White-toothed tuco-tuco", "Wolffsohn's viscacha"];
var S = ["Abaco Island boa", "Aesculapian snake", "African beaked snake", "African puff adder", "African rock python", "African twig snake", "African wolf snake", "Amazon tree boa", "Amazonian palm viper", "American Vine Snake", "American copperhead", "Amethystine python", "Anaconda", "Andaman cat snake", "Andaman cobra", "Angolan python", "Annulated sea snake", "Arabian cobra", "Arafura file snake", "Arizona black rattlesnake", "Arizona coral snake", "Aruba rattlesnake", "Asian Vine Snake, Whip Snake", "Asian cobra", "Asian keelback", "Asian pipe snake", "Asp", "Asp viper", "Assam keelback", "Australian copperhead", "Australian scrub python", "Baird's rat snake", "Baja California lyresnake", "Ball Python", "Ball python", "Bamboo pitviper", "Bamboo viper", "Banded Flying Snake", "Banded cat-eyed snake", "Banded krait", "Banded pitviper", "Banded water cobra", "Barbour's pit viper", "Barred wolf snake", "Beaked sea snake", "Beauty rat snake", "Beddome's cat snake", "Beddome's coral snake", "Bimini racer", "Bird snake", "Bismarck ringed python", "Black headed python", "Black krait", "Black mamba", "Black rat snake", "Black snake", "Black tree cobra", "Black-banded trinket snake", "Black-headed snake", "Black-necked cobra", "Black-necked spitting cobra", "Black-speckled palm-pitviper", "Black-striped keelback", "Black-tailed horned pit viper", "Blanding's tree snake", "Blind snake", "Blonde hognose snake", "Blood python", "Blue krait", "Blunt-headed tree snake", "Bluntnose viper", "Boa", "Boa constrictor", "Bocourt's water snake", "Boelen python", "Boiga", "Bolivian anaconda", "Boomslang", "Bornean pitviper", "Borneo short-tailed python", "Brahminy blind snake", "Brazilian coral snake", "Brazilian mud Viper", "Brazilian smooth snake", "Bredl's python", "Brongersma's pitviper", "Brown snake", "Brown spotted pitviper[4]", "Brown tree snake", "Brown water python", "Brown white-lipped python", "Buff striped keelback", "Bull snake", "Burmese keelback", "Burmese krait", "Burmese python", "Burrowing cobra", "Burrowing viper", "Bush viper", "Bushmaster", "Buttermilk racer", "Calabar python", "California kingsnake", "Canebrake", "Cantil", "Cantor's pitviper", "Cape cobra", "Cape coral snake", "Cape gopher snake", "Carpet viper", "Cascabel", "Caspian cobra", "Cat snake", "Cat-eyed night snake", "Cat-eyed snake", "Central American lyre snake", "Central ranges taipan", "Centralian carpet python", "Ceylon krait", "Chappell Island tiger snake", "Checkered garter snake", "Checkered keelback", "Chicken snake", "Chihuahuan ridge-nosed rattlesnake", "Children's python", "Chinese tree viper", "Coachwhip snake", "Coastal carpet python", "Coastal taipan", "Cobra", "Collett's snake", "Colorado desert sidewinder", "Common adder", "Common cobra", "Common garter snake", "Common ground snake", "Common keelback", "Common lancehead", "Common tiger snake", "Common worm snake", "Congo snake", "Congo water cobra", "Copperhead", "Coral snake", "Corn snake", "Coronado Island rattlesnake", "Cottonmouth", "Crossed viper", "Crowned snake", "Cuban boa", "Cuban wood snake", "Cyclades blunt-nosed viper", "Dauan Island water python", "De Schauensee's anaconda", "Death Adder", "Desert death adder", "Desert kingsnake", "Desert woma python", "Diamond python", "Dog-toothed cat snake", "Down's tiger snake", "Dubois's sea snake", "Dumeril's boa", "Durango rock rattlesnake", "Dusky pigmy rattlesnake", "Dusty hognose snake", "Dwarf beaked snake", "Dwarf boa", "Dwarf pipe snake", "Dwarf sand adder", "Eastern brown snake", "Eastern coral snake", "Eastern diamondback rattlesnake", "Eastern green mamba", "Eastern hognose snake", "Eastern lyre snake", "Eastern mud snake", "Eastern racer", "Eastern tiger snake", "Eastern water cobra", "Eastern yellowbelly sad racer", "Egg-eater", "Egyptian asp", "Egyptian cobra", "Elegant pitviper", "Emerald tree boa", "Equatorial spitting cobra", "European asp", "European smooth snake", "Eyelash palm-pitviper", "Eyelash pit viper", "Eyelash viper", "False cobra", "False horned viper", "False water cobra", "Fan-Si-Pan horned pitviper", "Fea's viper", "Fer-de-lance", "Fierce snake", "Fifty pacer", "Fishing snake", "Flat-nosed pitviper", "Flinders python", "Flying snake", "Forest cobra", "Forest flame snake", "Forsten's cat snake", "Fox snake, three species of Pantherophis", "Gaboon viper", "Garter snake", "Giant Malagasy hognose snake", "Godman's pit viper", "Gold tree cobra", "Gold-ringed cat snake", "Golden tree snake", "Grand Canyon rattlesnake", "Grass snake", "Gray cat snake", "Great Basin rattlesnake", "Great Lakes bush viper", "Great Plains rat snake", "Green anaconda", "Green cat-eyed snake", "Green mamba", "Green palm viper", "Green rat snake", "Green snake", "Green tree pit viper", "Green tree python", "Grey Lora", "Grey-banded kingsnake", "Ground snake", "Guatemalan palm viper", "Guatemalan tree viper", "Habu", "Habu pit viper", "Hagen's pitviper", "Hairy bush viper", "Halmahera python", "Hardwicke's sea snake", "Harlequin coral snake", "High Woods coral snake", "Hill keelback", "Himalayan keelback", "Hogg Island boa", "Hognose snake", "Hognosed viper", "Honduran palm viper", "Hook Nosed Sea Snake", "Hopi rattlesnake", "Horned adder", "Horned desert viper", "Horned viper", "Horseshoe pitviper", "Hundred pacer", "Hutton's tree viper", "Ikaheka snake", "Indian cobra", "Indian flying snake", "Indian krait", "Indian python", "Indian tree viper", "Indigo snake", "Indochinese spitting cobra", "Indonesian water python", "Inland carpet python", "Inland taipan", "Jamaican Tree Snake", "Jamaican boa", "Jan's hognose snake", "Japanese forest rat snake", "Japanese rat snake", "Japanese striped snake", "Javan spitting cobra", "Jerdon's pitviper", "Jumping viper", "Jungle carpet python", "Kanburian pit viper", "Kaulback's lance-headed pitviper", "Kayaudi dwarf reticulated python", "Kaznakov's viper", "Keelback", "Kham Plateau pitviper", "Khasi Hills keelback", "King Island tiger snake", "King brown", "King cobra", "King rat snake", "King snake", "Krait", "Krefft's tiger snake", "Lance-headed rattlesnake", "Lancehead", "Large shield snake", "Large-eyed pitviper", "Large-scaled tree viper", "Leaf viper", "Leaf-nosed viper", "Lesser black krait", "Levant viper", "Long-nosed adder", "Long-nosed tree snake", "Long-nosed viper", "Long-nosed whip snake", "Long-tailed rattlesnake", "Longnosed worm snake", "Lora", "Lyre snake", "Machete savane", "Macklot's python", "Madagascar ground boa", "Madagascar tree boa", "Malabar rock pitviper", "Malayan krait", "Malayan long-glanded coral snake", "Malayan pit viper", "Malcolm's tree viper", "Mamba", "Mamushi", "Manchurian Black Water Snake", "Mandalay cobra", "Mandarin rat snake", "Mangrove pit viper", "Mangrove snake", "Mangshan pitviper", "Many-banded krait", "Many-banded tree snake", "Many-horned adder", "Many-spotted cat snake", "Massasauga rattlesnake", "McMahon's viper", "Mexican black kingsnake", "Mexican green rattlesnake", "Mexican hognose snake", "Mexican palm-pitviper", "Mexican parrot snake", "Mexican racer", "Mexican vine snake", "Mexican west coast rattlesnake", "Midget faded rattlesnake", "Milk snake", "Moccasin snake", "Modest keelback", "Mojave desert sidewinder", "Mojave rattlesnake", "Mole viper", "Mollucan python", "Moluccan flying snake", "Montpellier snake", "Motuo bamboo pitviper", "Mountain adder", "Mozambique spitting cobra", "Mud adder", "Mud snake", "Mussurana", "Namaqua dwarf adder", "Namib dwarf sand adder", "Narrowhead Garter Snake", "New Guinea carpet python", "Nichell snake", "Nicobar Island keelback", "Nicobar bamboo pitviper", "Night snake", "Nightingale adder", "Nilgiri keelback", "Nitsche's bush viper", "Nitsche's tree viper", "North Philippine cobra", "North eastern king snake", "Northeastern hill krait", "Northern black-tailed rattlesnake", "Northern tree snake", "Northern water snake", "Northern white-lipped python", "Northwestern carpet python", "Nose-horned viper", "Nubian spitting cobra", "Oaxacan small-headed rattlesnake", "Oenpelli python", "Olive python", "Olive sea snake", "Orange-collared keelback", "Ornate flying snake", "Palestine viper", "Pallas' viper", "Palm viper", "Papuan python", "Paradise flying snake", "Parrot snake", "Patchnose snake", "Paupan taipan", "Pelagic sea snake", "Peninsula tiger snake", "Peringuey's adder", "Perrotet's shieldtail snake", "Persian rat snake", "Philippine cobra", "Philippine pitviper", "Pine snake", "Pipe snake", "Pit viper", "Pointed-scaled pit viper[5]", "Pope's tree viper", "Portuguese viper", "Prairie kingsnake", "Puerto Rican boa", "Puff adder", "Pygmy python", "Python", "Queen snake", "Racer", "Raddysnake", "Rainbow boa", "Rat snake", "Rattler", "Rattlesnake", "Red blood python", "Red diamond rattlesnake", "Red spitting cobra", "Red-backed rat snake", "Red-bellied black snake", "Red-headed krait", "Red-necked keelback", "Red-tailed bamboo pitviper", "Red-tailed boa", "Red-tailed pipe snake", "Reticulated python", "Rhinoceros viper", "Rhombic night adder", "Ribbon snake", "Rinkhals", "Rinkhals cobra", "River jack", "Rosy boa", "Rough green snake", "Rough-scaled bush viper", "Rough-scaled python", "Rough-scaled tree viper", "Royal python", "Rubber boa", "Rufous beaked snake", "Rungwe tree viper", "San Francisco garter snake", "Sand adder", "Sand boa", "Savu python", "Saw-scaled viper", "Scarlet kingsnake", "Schlegel's viper", "Schultze's pitviper", "Sea snake", "Sedge viper", "Selayer reticulated python", "Sharp-nosed viper", "Shield-nosed cobra", "Shield-tailed snake", "Siamese palm viper", "Side-striped palm-pitviper", "Sidewinder", "Sikkim keelback", "Sinai desert cobra", "Sind krait", "Small-eyed snake", "Smooth green snake", "Smooth snake", "Snorkel viper", "Snouted cobra", "Sonoran sidewinder", "South American hognose snake", "South eastern corn snake", "Southern Indonesian spitting cobra", "Southern Pacific rattlesnake", "Southern Philippine cobra", "Southern black racer", "Southern white-lipped python", "Southwestern black spitting cobra", "Southwestern blackhead snake", "Southwestern carpet python", "Southwestern speckled rattlesnake", "Speckle-bellied keelback", "Speckled kingsnake", "Spectacled cobra", "Spiny bush viper", "Spitting cobra", "Spotted python", "Sri Lankan pit viper", "Stejneger's bamboo pitviper", "Stiletto snake", "Stimson's python", "Stoke's sea snake", "Storm water cobra", "Striped snake", "Sumatran short-tailed python", "Sumatran tree viper", "Sunbeam snake", "Taipan", "Taiwan cobra", "Tan racer", "Tancitaran dusky rattlesnake", "Tanimbar python", "Tasmanian tiger snake", "Tawny cat snake", "Temple pit viper", "Temple viper", "Tentacled snake", "Texas Coral Snake", "Texas blind snake", "Texas garter snake", "Texas lyre snake", "Texas night snake", "Thai cobra", "Three-lined ground snake", "Tibetan bamboo pitviper", "Tic polonga", "Tiger pit viper", "Tiger rattlesnake", "Tiger snake", "Tigre snake", "Timber rattlesnake", "Timor python", "Titanboa", "Tree boa", "Tree snake", "Tree viper", "Trinket snake", "Tropical rattlesnake", "Twig snake", "Twin Headed King Snake", "Twin-Barred tree snake", "Twin-spotted rat snake", "Twin-spotted rattlesnake", "Undulated pit viper", "Uracoan rattlesnake", "Ursini's viper", "Urutu", "Vine snake", "Viper", "Viper Adder", "Vipera ammodytes", "Wagler's pit viper", "Wart snake", "Water adder", "Water moccasin", "Water snake", "West Indian racer", "Western blind snake", "Western carpet python", "Western coral snake", "Western diamondback rattlesnake", "Western green mamba", "Western ground snake", "Western hog-nosed viper", "Western mud snake", "Western tiger snake", "Western woma python", "Wetar Island python", "Whip snake", "White-lipped keelback", "White-lipped python", "White-lipped tree viper", "Wirot's pit viper", "Wolf snake", "Woma python", "Worm snake", "Wutu", "Wynaad keelback", "Yarara", "Yellow anaconda", "Yellow-banded sea snake", "Yellow-bellied sea snake", "Yellow-lined palm viper", "Yellow-lipped sea snake", "Yellow-striped rat snake", "Yunnan keelback", "Zebra snake", "Zebra spitting cobra"];
var k = ["bat", "bear", "bee", "bird", "butterfly", "cat", "cow", "crocodile", "deer", "dog", "dolphin", "eagle", "elephant", "fish", "flamingo", "fox", "frog", "gecko", "giraffe", "gorilla", "hamster", "hippopotamus", "horse", "kangaroo", "koala", "lion", "monkey", "ostrich", "panda", "parrot", "peacock", "penguin", "polar bear", "rabbit", "rhinoceros", "sea lion", "shark", "snake", "squirrel", "tiger", "turtle", "whale", "wolf", "zebra"];
var _a = { bear: n, bird: i, cat: t, cetacean: l, cow: s, crocodilia: d, dog: u, fish: c, horse: m, insect: h, lion: y, pet_name: p, rabbit: g, rodent: b, snake: S, type: k };
var C = _a;
var f = ["{{person.name}}", "{{company.name}}"];
var v = ["Redhold", "Treeflex", "Trippledex", "Kanlam", "Bigtax", "Daltfresh", "Toughjoyfax", "Mat Lam Tam", "Otcom", "Tres-Zap", "Y-Solowarm", "Tresom", "Voltsillam", "Biodex", "Greenlam", "Viva", "Matsoft", "Temp", "Zoolab", "Subin", "Rank", "Job", "Stringtough", "Tin", "It", "Home Ing", "Zamit", "Sonsing", "Konklab", "Alpha", "Latlux", "Voyatouch", "Alphazap", "Holdlamis", "Zaam-Dox", "Sub-Ex", "Quo Lux", "Bamity", "Ventosanzap", "Lotstring", "Hatity", "Tempsoft", "Overhold", "Fixflex", "Konklux", "Zontrax", "Tampflex", "Span", "Namfix", "Transcof", "Stim", "Fix San", "Sonair", "Stronghold", "Fintone", "Y-find", "Opela", "Lotlux", "Ronstring", "Zathin", "Duobam", "Keylex"];
var A = ["0.#.#", "0.##", "#.##", "#.#", "#.#.#"];
var Qa = { author: f, name: v, version: A };
var B = Qa;
var T = ["A.A. Milne", "Agatha Christie", "Alan Moore and Dave Gibbons", "Albert Camus", "Aldous Huxley", "Alexander Pope", "Alexandre Dumas", "Alice Walker", "Andrew Lang", "Anne Frank", "Anthony Burgess", "Anthony Trollope", "Antoine de Saint-Exup\xE9ry", "Anton Chekhov", "Anton Pavlovich Chekhov", "Arthur Conan Doyle", "Arthur Schopenhauer", "Aylmer Maude", "Ayn Rand", "Beatrix Potter", "Benjamin Disraeli", "Benjamin Jowett", "Bernard Shaw", "Bertrand Russell", "Bhagavanlal Indrajit", "Boris Pasternak", "Bram Stoker", "Brian Evenson", "C.E. Brock", "C.S. Lewis", "Carson McCallers", "Charles Dickens", "Charles E. Derbyshire", "Charlotte Bront\xEB", "Charlotte Perkins Gilman", "Chinua Achebe", "Clifford R. Adams", "Constance Garnett", "Cormac McCarthy", "D.H. Lawrence", "Dan Brown", "Daniel Defoe", "Dante Alighieri", "Dashiell Hammett", "David Widger", "David Wyllie", "Dean Koontz", "Don DeLillo", "E.M. Forster", "Edgar Allan Poe", "Edgar Rice Burroughs", "Elizabeth Cleghorn Gaskell", "Elizabeth Von Arnim", "Emily Bront\xEB", "Erich Remarque", "Ernest Hemingway", "Evelyn Waugh", "F. Scott Fitzgerald", "Ford Madox Ford", "Frances Hodgson Burnett", "Frank Herbert", "Frank T. Merrill", "Franz Kafka", "Friedrich Wilhelm Nietzsche", "Fyodor Dostoyevsky", "G.K. Chesterton", "Gabriel Garcia Marquez", "Geoffrey Chaucer", "George Eliot", "George Grossmith", "George Orwell", "George R. R. Martin", "George Saunders", "Grady Ward", "Graham Greene", "Gustave Dor\xE9", "Gustave Flaubert", "Guy de Maupassant", "G\xFCnter Grass", "H.G. Wells", "H.P. Lovecraft", "Harper Lee", "Harriet Beecher Stowe", "Haruki Murakami", "Henrik Ibsen", "Henry David Thoreau", "Henry Fielding", "Henry James", "Henry Miller", "Henry Morley", "Herman Melville", "Hermann Broch", "Homer", "Honor\xE9 de Balzac", "Ian McEwan", "Isabel Florence Hapgood", "Italo Calvino", "J.D. Salinger", "J.K. Rowling", "J.M. Barrie", "J.R.R. Tolkien", "Jack Kerouac", "Jack London", "Jacob Grimm", "Jacqueline Crooks", "James Baldwin", "James Dickey", "James Ellroy", "James Joyce", "James Patterson", "Jane Austen", "Johann Wolfgang von Goethe", "John Bunyan", "John Camden Hotten", "John Dos Passos", "John Green", "John Grisham", "John Kennedy Toole", "John Milton", "John Ormsby", "John Steinbeck", "John Updike", "Jonathan Franzen", "Jonathan Swift", "Joseph Conrad", "Joseph Heller", "Jos\xE9 Rizal", "Judy Blume", "Jules Verne", "Junot Diaz", "Karl Marx", "Kazuo Ishiguro", "Ken Follett", "Ken Kesey", "Kenneth Grahame", "Khaled Hosseini", "Kingsley Amis", "Kurt Vonnegut", "L. Frank Baum", "L.M. Montgomery", "Laurence Sterne", "Leo Tolstoy", "Lewis Carroll", "Louisa May Alcott", "Louise Maude", "Malcolm Lowry", "Marcel Proust", "Margaret Atwood", "Margaret Mitchell", "Marilynne Robinson", "Mark Twain", "Martin Amis", "Mary Shelley", "Michael Chabon", "Miguel de Cervantes", "Mikhail Bulgakov", "Muriel Spark", "Nancy Mitford", "Nathanael West", "Nathaniel Hawthorne", "Neil Gaiman", "Niccolo Machiavelli", "Norman Mailer", "Oscar Levy", "Oscar Wilde", "P.G. Wodehouse", "Paulo Coelho", "Peter Carey", "Philip Pullman", "Philip Roth", "Plato", "R.L. Stine", "Rachel Kushner", "Ralph Ellison", "Ray Bradbury", "Raymond Chandler", "Richard Wagner", "Richard Wright", "Richard Yates", "Roald Dahl", "Robert Graves", "Robert Louis Stevenson", "Robert Penn Warren", "Rudyard Kipling", "Salman Rushdie", "Samuel Beckett", "Samuel Butler", "Samuel Richardson", "Saul Bellow", "Shivaram Parashuram Bhide", "Sir Arthur Conan Doyle", "Sir Richard Francis Burton", "Stendhal", "Stephen Hawking", "Stephen King", "Sun Tzu", "Suzanne Collins", "T. Smollett", "T.S. Eliot", "Theodore Alois Buckley", "Theodore Dreiser", "Thomas Hardy", "Thomas Love Peacock", "Thomas Mann", "Toni Morrison", "Truman Capote", "V.S. Naipaul", "Vance Packard", "Vatsyayana", "Victor Hugo", "Virgil", "Virginia Woolf", "Vladimir Nabokov", "Voltaire", "W.G. Sebald", "W.K. Marriott", "Walker Percy", "Walt Whitman", "Walter Scott", "Wilhelm Grimm", "Wilkie Collins", "William Faulkner", "William Gibson", "William Golding", "William Makepeace Thackeray", "William Shakespeare", "Zadie Smith"];
var M = ["Audiobook", "Ebook", "Hardcover", "Paperback"];
var w = ["Adventure", "Biography", "Business", "Children's Literature", "Classic", "Comedy", "Comic", "Detective", "Drama", "Fantasy", "Graphic Novel", "Historical Fiction", "Horror", "Memoir", "Mystery", "Mythology", "Philosophy", "Poetry", "Psychology", "Religion", "Romance", "Science Fiction", "Thriller", "Western", "Young Adult"];
var L = ["Academic Press", "Ace Books", "Addison-Wesley", "Adis International", "Airiti Press", "Allen Ltd", "Andrews McMeel Publishing", "Anova Books", "Anvil Press Poetry", "Applewood Books", "Apress", "Athabasca University Press", "Atheneum Books", "Atheneum Publishers", "Atlantic Books", "Atlas Press", "BBC Books", "Ballantine Books", "Banner of Truth Trust", "Bantam Books", "Bantam Spectra", "Barrie & Jenkins", "Basic Books", "Belknap Press", "Bella Books", "Bellevue Literary Press", "Berg Publishers", "Berkley Books", "Bison Books", "Black Dog Publishing", "Black Library", "Black Sparrow Books", "Blackie and Son Limited", "Blackstaff Press", "Blackwell Publishing", "Bloodaxe Books", "Bloomsbury Publishing Plc", "Blue Ribbon Books", "Book League of America", "Book Works", "Booktrope", "Borgo Press", "Bowes & Bowes", "Boydell & Brewer", "Breslov Research Institute", "Brill", "Brimstone Press", "Broadview Press", "Burns & Oates", "Butterworth-Heinemann", "Caister Academic Press", "Cambridge University Press", "Candlewick Press", "Canongate Books", "Carcanet Press", "Carlton Books", "Carlton Publishing Group", "Carnegie Mellon University Press", "Casemate Publishers", "Cengage Learning", "Central European University Press", "Chambers Harrap", "Charles Scribner's Sons", "Chatto and Windus", "Chick Publications", "Chronicle Books", "Churchill Livingstone", "Cisco Press", "City Lights Publishers", "Cloverdale Corporation", "D. Appleton & Company", "D. Reidel", "DAW Books", "Da Capo Press", "Daedalus Publishing", "Dalkey Archive Press", "Darakwon Press", "David & Charles", "Dedalus Books", "Del Rey Books", "E. P. Dutton", "ECW Press", "Earthscan", "Edupedia Publications", "Eel Pie Publishing", "Eerdmans Publishing", "Ellora's Cave", "Elsevier", "Emerald Group Publishing", "Etruscan Press", "FabJob", "Faber and Faber", "Fairview Press", "Farrar, Straus & Giroux", "Fearless Books", "Felony & Mayhem Press", "Firebrand Books", "Flame Tree Publishing", "Focal Press", "G-Unit Books", "G. P. Putnam's Sons", "Gaspereau Press", "Gay Men's Press", "Gefen Publishing House", "George H. Doran Company", "George Newnes", "George Routledge & Sons", "Godwit Press", "Golden Cockerel Press", "HMSO", "Hachette Book Group USA", "Hackett Publishing Company", "Hamish Hamilton", "Happy House", "Harcourt Assessment", "Harcourt Trade Publishers", "Harlequin Enterprises Ltd", "Harper & Brothers", "Harper & Row", "HarperCollins", "HarperPrism", "HarperTrophy", "Harry N. Abrams, Inc.", "Harvard University Press", "Harvest House", "Harvill Press at Random House", "Hawthorne Books", "Hay House", "Haynes Manuals", "Heyday Books", "Hodder & Stoughton", "Hodder Headline", "Hogarth Press", "Holland Park Press", "Holt McDougal", "Horizon Scientific Press", "Ian Allan Publishing", "Ignatius Press", "Imperial War Museum", "Indiana University Press", "J. M. Dent", "Jaico Publishing House", "Jarrolds Publishing", "John Blake Publishing", "Karadi Tales", "Kensington Books", "Kessinger Publishing", "Kodansha", "Kogan Page", "Koren Publishers Jerusalem", "Ladybird Books", "Leaf Books", "Leafwood Publishers", "Left Book Club", "Legend Books", "Lethe Press", "Libertas Academica", "Liberty Fund", "Library of America", "Lion Hudson", "Macmillan Publishers", "Mainstream Publishing", "Manchester University Press", "Mandrake Press", "Mandrake of Oxford", "Manning Publications", "Manor House Publishing", "Mapin Publishing", "Marion Boyars Publishers", "Mark Batty Publisher", "Marshall Cavendish", "Marshall Pickering", "Martinus Nijhoff Publishers", "Mascot Books", "Matthias Media", "McClelland and Stewart", "McFarland & Company", "McGraw Hill Financial", "McGraw-Hill Education", "Medknow Publications", "Naiad Press", "Nauka", "NavPress", "New Directions Publishing", "New English Library", "New Holland Publishers", "New Village Press", "Newnes", "No Starch Press", "Nonesuch Press", "O'Reilly Media", "Oberon Books", "Open Court Publishing Company", "Open University Press", "Orchard Books", "Orion Books", "Packt Publishing", "Palgrave Macmillan", "Pan Books", "Pantheon Books at Random House", "Papadakis Publisher", "Parachute Publishing", "Parragon", "Pathfinder Press", "Paulist Press", "Pavilion Books", "Peace Hill Press", "Pecan Grove Press", "Pen and Sword Books", "Penguin Books", "Random House", "Reed Elsevier", "Reed Publishing", "SAGE Publications", "Salt Publishing", "Sams Publishing", "Schocken Books", "Scholastic Press", "Seagull Books", "Secker & Warburg", "Shambhala Publications", "Shire Books", "Shoemaker & Hoard Publishers", "Shuter & Shooter Publishers", "Sidgwick & Jackson", "Signet Books", "Simon & Schuster", "St. Martin's Press", "T & T Clark", "Tachyon Publications", "Tammi", "Target Books", "Tarpaulin Sky Press", "Tartarus Press", "Tate Publishing & Enterprises", "Taunton Press", "Taylor & Francis", "Ten Speed Press", "UCL Press", "Unfinished Monument Press", "United States Government Publishing Office", "University of Akron Press", "University of Alaska Press", "University of California Press", "University of Chicago Press", "University of Michigan Press", "University of Minnesota Press", "University of Nebraska Press", "Velazquez Press", "Verso Books", "Victor Gollancz Ltd", "Viking Press", "Vintage Books", "Vintage Books at Random House", "Virago Press", "Virgin Publishing", "Voyager Books", "Zed Books", "Ziff Davis Media", "Zondervan"];
var D = ["A Song of Ice and Fire", "Anna Karenina", "Colonel Race", "Discworld", "Dune", "Harry Potter", "Hercule Poirot", "His Dark Materials", "Jane Austen Murder Mysteries", "Little Women", "Outlander", "Percy Jackson", "Sherlock Holmes", "The Arc of a Scythe", "The Bartimaeus Trilogy", "The Border Trilogy", "The Chronicles of Narnia", "The Dark Tower", "The Dresden Files", "The Eighth Life", "The Foundation Series", "The Hitchhiker's Guide to the Galaxy", "The Hunger Games", "The Infinity Cycle", "The Inheritance Cycle", "The Lord of the Rings", "The Maze Runner", "The Prison Healer", "The Red Rising Saga", "The Southern Reach", "The Wheel of Time", "Thursday Next Series", "Twilight", "War and Peace"];
var R = ["1984", "20,000 Leagues Under the Sea", "A Bend in the River", "A Brief History of Time", "A Clockwork Orange", "A Confederacy of Dunces", "A Doll's House", "A Handful of Dust", "A Modest Proposal", "A Passage to India", "A Portrait of the Artist as a Young Man", "A Room with a View", "A Study in Scarlet", "A Tale of Two Cities", "A Wrinkle in Time", "Absalom, Absalom!", "Adventures of Huckleberry Finn", "Alice's Adventures in Wonderland", "All Quiet on the Western Front", "All the King's Men", "American Pastoral", "An American Tragedy", "And Then There Were None", "Animal Farm", "Anna Karenina", "Anne of Green Gables", "Are You There God? It's Me, Margaret", "As I Lay Dying", "Atlas Shrugged", "Atonement", "Austerlitz", "Beloved", "Beyond Good and Evil", "Bible", "Bleak House", "Blood Meridian", "Brave New World", "Brideshead Revisited", "Candide", "Carmilla", "Catch-22", "Charlie and the Chocolate Factory", "Charlotte's Web", "Clarissa", "Cranford", "Crime and Punishment", "Dao De Jing: A Minimalist Translation", "David Copperfield", "Deliverance", "Don Quixote", "Dora", "Dr. Zhivago", "Dracula", "Dubliners", "Dune", "East of Eden", "Emma", "Fahrenheit 451", "Faust", "For Whom the Bell Tolls", "Frankenstein", "Freakonomics", "Go Tell It on the Mountain", "Gone with the Wind", "Great Expectations", "Grimms' Fairy Tales", "Gulliver's Travels", "Hamlet", "Harry Potter and the Sorcerer's Stone", "Heart of Darkness", "Herzog", "His Dark Materials", "Hitting the line", "Housekeeping", "I, Claudius", "If on a Winter's Night a Traveler", "In Cold Blood", "In Search of Lost Time", "Invisible Man", "It", "Jane Eyre", "Josefine Mutzenbacher", "Jude the Obscure", "L.A. Confidential", "Leaves of Grass", "Les Miserables", "Life of Pi", "Little Women", "Lolita", "Long Walk to Freedom", "Lord Jim", "Lord of the Flies", "Lucky Jim", "Madame Bovary", "Malone Dies", "Meditations", "Men Without Women", "Metamorphosis", "Middlemarch", "Midnight's Children", "Moby Dick", "Money", "Mrs. Dalloway", "My Bondage and My Freedom", "My Life", "Native Son", "Neuromancer", "Never Let Me Go", "Nightmare Abbey", "Nineteen Eighty Four", "Nostromo", "Notes from the Underground", "Of Mice and Men", "Oliver Twist", "On the Duty of Civil Disobedience", "On the Road", "One Flew Over the Cuckoo's Nest", "One Hundred Years of Solitude", "One Thousand and One Nights", "Oscar and Lucinda", "Pale Fire", "Paradise Lost", "Peter Pan", "Portnoy's Complaint", "Pride and Prejudice", "Rabbit, Run", "Republic", "Revolutionary Road", "Robinson Crusoe", "Romeo and Juliet", "Ruth Fielding in Alaska", "Scoop", "Second Treatise of Government", "Slaughterhouse Five", "Stories of Anton Chekhov", "Sybil", "Tess of the d'Urbervilles", "The Adventures of Augie March", "The Adventures of Huckleberry Finn", "The Adventures of Sherlock Holmes", "The Adventures of Tom Sawyer", "The Aeneid", "The Alchemist", "The Ambassadors", "The Art of War", "The Big Sleep", "The Black Sheep", "The Blue Castle", "The Brief Wondrous Life of Oscar Wao", "The Brothers Karamazov", "The Call of the Wild", "The Canterbury Tales", "The Catcher in the Rye", "The Color Purple", "The Complete Works of Edgar Allen Poe", "The Corrections", "The Count of Monte Cristo", "The Day of the Locust", "The Diary of a Nobody", "The Diary of a Young Girl", "The Divine Comedy", "The Enchanted April", "The Fountainhead", "The Golden Bowl", "The Golden Notebook", "The Good Soldier", "The Grapes of Wrath", "The Great Gatsby", "The Handmaid's Tale", "The Heart is a Lonely Hunter", "The Heart of the Matter", "The Hobbit", "The Hound of the Baskervilles", "The Idiot", "The Iliad", "The King in Yellow", "The Kite Runner", "The Lion, the Witch, and the Wardrobe", "The Little Prince", "The Lord of the Rings", "The Magic Mountain", "The Maltese Falcon", "The Master and Margarita", "The Moviegoer", "The Naked and the Dead", "The Odyssey", "The Old Man and the Sea", "The Pickwick Papers", "The Picture of Dorian Gray", "The Pilgrim's Progress", "The Pillars of the Earth", "The Plague", "The Portrait of a Lady", "The Prime of Miss Jean Brodie", "The Prince", "The Problems of Philosophy", "The Prophet", "The Pursuit of Love", "The Rainbow", "The Red and the Black", "The Remains of the Day", "The Republic", "The Scarlet Letter", "The Sleepwalkers", "The Sound and the Fury", "The Stand", "The Strange Case of Dr. Jekyll and Mr. Hyde", "The Stranger", "The Sun Also Rises", "The Thirty-Nine Steps", "The Three Musketeers", "The Time Machine", "The Tin Drum", "The Trial", "The War of the Worlds", "The Waste Land", "The Way We Live Now", "The Wind in the Willows", "The Woman in White", "The Wonderful Wizard of Oz", "The Works of Edgar Allan Poe", "The Yellow Wallpaper", "Things Fall Apart", "Tinker, Tailor, Soldier, Spy", "To Kill a Mockingbird", "To the Lighthouse", "Tom Jones", "Treasure Island", "Tristram Shandy", "Tropic of Cancer", "U.S.A. Trilogy", "Ulysses", "Uncle Tom's Cabin", "Under the Volcano", "Underworld", "Vanity Fair", "Walden", "War and Peace", "Watchmen", "Winnie-the-Pooh", "Wuthering Heights"];
var Xa = { author: T, format: M, genre: w, publisher: L, series: D, title: R };
var P = Xa;
var H = ["###-###-####", "(###) ###-####", "1-###-###-####", "###.###.####"];
var $a = { formats: H };
var W = $a;
var G = ["azure", "black", "blue", "cyan", "fuchsia", "gold", "green", "grey", "indigo", "ivory", "lavender", "lime", "magenta", "maroon", "mint green", "olive", "orange", "orchid", "pink", "plum", "purple", "red", "salmon", "silver", "sky blue", "tan", "teal", "turquoise", "violet", "white", "yellow"];
var er = { human: G };
var F = er;
var N = ["Automotive", "Baby", "Beauty", "Books", "Clothing", "Computers", "Electronics", "Games", "Garden", "Grocery", "Health", "Home", "Industrial", "Jewelry", "Kids", "Movies", "Music", "Outdoors", "Shoes", "Sports", "Tools", "Toys"];
var E = ["Discover the {{animal.type}}-like agility of our {{commerce.product}}, perfect for {{word.adjective}} users", "Discover the {{word.adjective}} new {{commerce.product}} with an exciting mix of {{commerce.productMaterial}} ingredients", "Ergonomic {{commerce.product}} made with {{commerce.productMaterial}} for all-day {{word.adjective}} support", "Experience the {{color.human}} brilliance of our {{commerce.product}}, perfect for {{word.adjective}} environments", "Featuring {{science.chemical_element.name}}-enhanced technology, our {{commerce.product}} offers unparalleled {{word.adjective}} performance", "Innovative {{commerce.product}} featuring {{word.adjective}} technology and {{commerce.productMaterial}} construction", "Introducing the {{location.country}}-inspired {{commerce.product}}, blending {{word.adjective}} style with local craftsmanship", "New {{color.human}} {{commerce.product}} with ergonomic design for {{word.adjective}} comfort", 'New {{commerce.product}} model with {{number.int({"min": 1, "max": 100})}} GB RAM, {{number.int({"min": 1, "max": 1000})}} GB storage, and {{word.adjective}} features', "Our {{animal.type}}-friendly {{commerce.product}} ensures {{word.adjective}} comfort for your pets", "Our {{food.adjective}}-inspired {{commerce.product}} brings a taste of luxury to your {{word.adjective}} lifestyle", "Professional-grade {{commerce.product}} perfect for {{word.adjective}} training and recreational use", "Savor the {{food.adjective}} essence in our {{commerce.product}}, designed for {{word.adjective}} culinary adventures", "Stylish {{commerce.product}} designed to make you stand out with {{word.adjective}} looks", "The sleek and {{word.adjective}} {{commerce.product}} comes with {{color.human}} LED lighting for smart functionality", "The {{color.human}} {{commerce.product}} combines {{location.country}} aesthetics with {{science.chemical_element.name}}-based durability", "The {{company.catchPhrase}} {{commerce.product}} offers reliable performance and {{word.adjective}} design", "The {{person.firstName}} {{commerce.product}} is the latest in a series of {{word.adjective}} products from {{company.name}}", "{{commerce.productAdjective}} {{commerce.product}} designed with {{commerce.productMaterial}} for {{word.adjective}} performance", "{{company.name}}'s most advanced {{commerce.product}} technology increases {{word.adjective}} capabilities"];
var J = { adjective: ["Awesome", "Bespoke", "Electronic", "Elegant", "Ergonomic", "Fantastic", "Fresh", "Frozen", "Generic", "Gorgeous", "Handcrafted", "Handmade", "Incredible", "Intelligent", "Licensed", "Luxurious", "Modern", "Oriental", "Practical", "Recycled", "Refined", "Rustic", "Sleek", "Small", "Soft", "Tasty", "Unbranded"], material: ["Aluminum", "Bamboo", "Bronze", "Ceramic", "Concrete", "Cotton", "Gold", "Granite", "Marble", "Metal", "Plastic", "Rubber", "Silk", "Steel", "Wooden"], product: ["Bacon", "Ball", "Bike", "Car", "Chair", "Cheese", "Chicken", "Chips", "Computer", "Fish", "Gloves", "Hat", "Keyboard", "Mouse", "Pants", "Pizza", "Salad", "Sausages", "Shirt", "Shoes", "Soap", "Table", "Towels", "Tuna"] };
var ar = { department: N, product_description: E, product_name: J };
var I = ar;
var K = ["AI-driven", "Adaptive", "Advanced", "Automated", "Balanced", "Business-focused", "Centralized", "Compatible", "Configurable", "Cross-platform", "Customer-focused", "Customizable", "Decentralized", "Devolved", "Digitized", "Distributed", "Diverse", "Enhanced", "Ergonomic", "Exclusive", "Expanded", "Extended", "Face to face", "Focused", "Front-line", "Fully-configurable", "Fundamental", "Future-proofed", "Grass-roots", "Horizontal", "Immersive", "Implemented", "Innovative", "Integrated", "Intuitive", "Managed", "Monitored", "Multi-tiered", "Networked", "Open-architected", "Open-source", "Operative", "Optimized", "Optional", "Organic", "Organized", "Persevering", "Persistent", "Phased", "Polarised", "Proactive", "Profit-focused", "Profound", "Programmable", "Progressive", "Public-key", "Quality-focused", "Reactive", "Realigned", "Reduced", "Reverse-engineered", "Robust", "Seamless", "Secured", "Self-enabling", "Sharable", "Smart", "Stand-alone", "Streamlined", "Sustainable", "Synchronised", "Team-oriented", "Total", "Triple-buffered", "Universal", "Upgradable", "User-centric", "User-friendly", "Versatile", "Virtual", "Visionary"];
var O = ["24/7", "AI-driven", "B2B", "B2C", "back-end", "best-of-breed", "bleeding-edge", "collaborative", "compelling", "cross-media", "cross-platform", "customized", "cutting-edge", "decentralized", "distributed", "dynamic", "efficient", "end-to-end", "enterprise", "extensible", "frictionless", "front-end", "generative", "global", "granular", "holistic", "immersive", "impactful", "innovative", "integrated", "interactive", "intuitive", "killer", "leading-edge", "magnetic", "mission-critical", "next-generation", "one-to-one", "open-source", "out-of-the-box", "plug-and-play", "proactive", "quantum", "real-time", "revolutionary", "rich", "robust", "scalable", "seamless", "smart", "sticky", "strategic", "sustainable", "synergistic", "transparent", "turn-key", "ubiquitous", "user-centric", "value-added", "vertical", "viral", "virtual", "visionary", "world-class"];
var x = ["AI", "ROI", "applications", "architectures", "blockchains", "channels", "communities", "content", "convergence", "deliverables", "e-commerce", "experiences", "functionalities", "infrastructures", "initiatives", "interfaces", "large language models", "lifetime value", "markets", "methodologies", "metrics", "mindshare", "models", "networks", "niches", "paradigms", "partnerships", "platforms", "relationships", "schemas", "smart contracts", "solutions", "supply-chains", "synergies", "systems", "technologies", "users", "web services"];
var z = ["aggregate", "architect", "benchmark", "brand", "collaborate", "cultivate", "deliver", "deploy", "disintermediate", "drive", "embrace", "empower", "enable", "engage", "engineer", "enhance", "evolve", "expedite", "exploit", "extend", "facilitate", "gamify", "generate", "grow", "harness", "implement", "incentivize", "incubate", "innovate", "integrate", "iterate", "leverage", "maximize", "mesh", "monetize", "optimize", "orchestrate", "productize", "redefine", "reinvent", "repurpose", "revolutionize", "scale", "seize", "simplify", "strategize", "streamline", "syndicate", "synthesize", "target", "transform", "transition", "unleash", "utilize", "visualize", "whiteboard"];
var V = ["24 hour", "24/7", "AI-powered", "actuating", "analyzing", "asymmetric", "asynchronous", "attitude-oriented", "bifurcated", "bottom-line", "clear-thinking", "client-driven", "client-server", "cloud-native", "coherent", "cohesive", "composite", "content-based", "context-sensitive", "contextually-based", "data-driven", "dedicated", "demand-driven", "directional", "discrete", "disintermediate", "dynamic", "eco-centric", "empowering", "encompassing", "executive", "explicit", "exuding", "fault-tolerant", "fresh-thinking", "full-range", "global", "heuristic", "high-level", "holistic", "homogeneous", "human-resource", "hybrid", "immersive", "impactful", "incremental", "intangible", "interactive", "intermediate", "leading edge", "local", "logistical", "maximized", "methodical", "mission-critical", "mobile", "modular", "motivating", "national", "needs-based", "neutral", "next generation", "optimal", "optimizing", "radical", "real-time", "reciprocal", "regional", "resilient", "responsive", "scalable", "secondary", "stable", "static", "sustainable", "system-worthy", "systematic", "systemic", "tangible", "tertiary", "transitional", "uniform", "user-facing", "value-added", "well-modulated", "zero administration", "zero defect", "zero tolerance", "zero trust"];
var Y = ["Group", "Inc", "LLC", "and Sons"];
var j = ["{{person.last_name.generic}} - {{person.last_name.generic}}", "{{person.last_name.generic}} {{company.legal_entity_type}}", "{{person.last_name.generic}}, {{person.last_name.generic}} and {{person.last_name.generic}}"];
var q = ["ability", "access", "adapter", "algorithm", "alliance", "analyzer", "application", "approach", "architecture", "archive", "array", "artificial intelligence", "attitude", "benchmark", "budgetary management", "capability", "capacity", "challenge", "circuit", "collaboration", "complexity", "concept", "conglomeration", "contingency", "core", "customer loyalty", "data-warehouse", "database", "definition", "emulation", "encoding", "encryption", "firmware", "flexibility", "focus group", "forecast", "frame", "framework", "function", "functionalities", "generative AI", "hardware", "help-desk", "hierarchy", "hub", "implementation", "infrastructure", "initiative", "installation", "instruction set", "interface", "internet solution", "intranet", "knowledge base", "knowledge user", "leverage", "local area network", "matrices", "matrix", "methodology", "microservice", "middleware", "migration", "model", "moderator", "monitoring", "moratorium", "neural-net", "open architecture", "orchestration", "paradigm", "parallelism", "policy", "portal", "pricing structure", "process improvement", "product", "productivity", "project", "projection", "protocol", "service-desk", "software", "solution", "standardization", "strategy", "structure", "success", "support", "synergy", "system engine", "task-force", "throughput", "time-frame", "toolset", "utilisation", "website", "workforce"];
var rr = { adjective: K, buzz_adjective: O, buzz_noun: x, buzz_verb: z, descriptor: V, legal_entity_type: Y, name_pattern: j, noun: q };
var U = rr;
var Z = ["avatar", "category", "comment", "createdAt", "email", "group", "id", "name", "password", "phone", "status", "title", "token", "updatedAt"];
var or = { column: Z };
var _ = or;
var Q = { wide: ["April", "August", "December", "February", "January", "July", "June", "March", "May", "November", "October", "September"], abbr: ["Apr", "Aug", "Dec", "Feb", "Jan", "Jul", "Jun", "Mar", "May", "Nov", "Oct", "Sep"] };
var X = { wide: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"], abbr: ["Fri", "Mon", "Sat", "Sun", "Thu", "Tue", "Wed"] };
var nr = { month: Q, weekday: X };
var $ = nr;
var ee = ["Auto Loan", "Checking", "Credit Card", "Home Loan", "Investment", "Money Market", "Personal Loan", "Savings"];
var ae = ["34##-######-####L", "37##-######-####L"];
var re = ["30[0-5]#-######-###L", "36##-######-###L", "54##-####-####-###L"];
var oe = ["6011-####-####-###L", "64[4-9]#-####-####-###L", "65##-####-####-###L"];
var ne = ["3528-####-####-###L", "3529-####-####-###L", "35[3-8]#-####-####-###L"];
var ie = ["2[221-720]-####-####-###L", "5[1-5]##-####-####-###L"];
var te = ["4###########L", "4###-####-####-###L"];
var ir = { american_express: ae, diners_club: re, discover: oe, jcb: ne, mastercard: ie, visa: te };
var le = ir;
var se = [{ name: "UAE Dirham", code: "AED", symbol: "" }, { name: "Afghani", code: "AFN", symbol: "\u060B" }, { name: "Lek", code: "ALL", symbol: "Lek" }, { name: "Armenian Dram", code: "AMD", symbol: "" }, { name: "Netherlands Antillian Guilder", code: "ANG", symbol: "\u0192" }, { name: "Kwanza", code: "AOA", symbol: "" }, { name: "Argentine Peso", code: "ARS", symbol: "$" }, { name: "Australian Dollar", code: "AUD", symbol: "$" }, { name: "Aruban Guilder", code: "AWG", symbol: "\u0192" }, { name: "Azerbaijanian Manat", code: "AZN", symbol: "\u043C\u0430\u043D" }, { name: "Convertible Marks", code: "BAM", symbol: "KM" }, { name: "Barbados Dollar", code: "BBD", symbol: "$" }, { name: "Taka", code: "BDT", symbol: "" }, { name: "Bulgarian Lev", code: "BGN", symbol: "\u043B\u0432" }, { name: "Bahraini Dinar", code: "BHD", symbol: "" }, { name: "Burundi Franc", code: "BIF", symbol: "" }, { name: "Bermudian Dollar (customarily known as Bermuda Dollar)", code: "BMD", symbol: "$" }, { name: "Brunei Dollar", code: "BND", symbol: "$" }, { name: "Boliviano boliviano", code: "BOB", symbol: "Bs" }, { name: "Brazilian Real", code: "BRL", symbol: "R$" }, { name: "Bahamian Dollar", code: "BSD", symbol: "$" }, { name: "Pula", code: "BWP", symbol: "P" }, { name: "Belarusian Ruble", code: "BYN", symbol: "Rbl" }, { name: "Belize Dollar", code: "BZD", symbol: "BZ$" }, { name: "Canadian Dollar", code: "CAD", symbol: "$" }, { name: "Congolese Franc", code: "CDF", symbol: "" }, { name: "Swiss Franc", code: "CHF", symbol: "CHF" }, { name: "Chilean Peso", code: "CLP", symbol: "$" }, { name: "Yuan Renminbi", code: "CNY", symbol: "\xA5" }, { name: "Colombian Peso", code: "COP", symbol: "$" }, { name: "Costa Rican Colon", code: "CRC", symbol: "\u20A1" }, { name: "Cuban Peso", code: "CUP", symbol: "\u20B1" }, { name: "Cape Verde Escudo", code: "CVE", symbol: "" }, { name: "Czech Koruna", code: "CZK", symbol: "K\u010D" }, { name: "Djibouti Franc", code: "DJF", symbol: "" }, { name: "Danish Krone", code: "DKK", symbol: "kr" }, { name: "Dominican Peso", code: "DOP", symbol: "RD$" }, { name: "Algerian Dinar", code: "DZD", symbol: "" }, { name: "Egyptian Pound", code: "EGP", symbol: "\xA3" }, { name: "Nakfa", code: "ERN", symbol: "" }, { name: "Ethiopian Birr", code: "ETB", symbol: "" }, { name: "Euro", code: "EUR", symbol: "\u20AC" }, { name: "Fiji Dollar", code: "FJD", symbol: "$" }, { name: "Falkland Islands Pound", code: "FKP", symbol: "\xA3" }, { name: "Pound Sterling", code: "GBP", symbol: "\xA3" }, { name: "Lari", code: "GEL", symbol: "" }, { name: "Cedi", code: "GHS", symbol: "" }, { name: "Gibraltar Pound", code: "GIP", symbol: "\xA3" }, { name: "Dalasi", code: "GMD", symbol: "" }, { name: "Guinea Franc", code: "GNF", symbol: "" }, { name: "Quetzal", code: "GTQ", symbol: "Q" }, { name: "Guyana Dollar", code: "GYD", symbol: "$" }, { name: "Hong Kong Dollar", code: "HKD", symbol: "$" }, { name: "Lempira", code: "HNL", symbol: "L" }, { name: "Gourde", code: "HTG", symbol: "" }, { name: "Forint", code: "HUF", symbol: "Ft" }, { name: "Rupiah", code: "IDR", symbol: "Rp" }, { name: "New Israeli Sheqel", code: "ILS", symbol: "\u20AA" }, { name: "Bhutanese Ngultrum", code: "BTN", symbol: "Nu" }, { name: "Indian Rupee", code: "INR", symbol: "\u20B9" }, { name: "Iraqi Dinar", code: "IQD", symbol: "" }, { name: "Iranian Rial", code: "IRR", symbol: "\uFDFC" }, { name: "Iceland Krona", code: "ISK", symbol: "kr" }, { name: "Jamaican Dollar", code: "JMD", symbol: "J$" }, { name: "Jordanian Dinar", code: "JOD", symbol: "" }, { name: "Yen", code: "JPY", symbol: "\xA5" }, { name: "Kenyan Shilling", code: "KES", symbol: "" }, { name: "Som", code: "KGS", symbol: "\u043B\u0432" }, { name: "Riel", code: "KHR", symbol: "\u17DB" }, { name: "Comoro Franc", code: "KMF", symbol: "" }, { name: "North Korean Won", code: "KPW", symbol: "\u20A9" }, { name: "Won", code: "KRW", symbol: "\u20A9" }, { name: "Kuwaiti Dinar", code: "KWD", symbol: "" }, { name: "Cayman Islands Dollar", code: "KYD", symbol: "$" }, { name: "Tenge", code: "KZT", symbol: "\u043B\u0432" }, { name: "Kip", code: "LAK", symbol: "\u20AD" }, { name: "Lebanese Pound", code: "LBP", symbol: "\xA3" }, { name: "Sri Lanka Rupee", code: "LKR", symbol: "\u20A8" }, { name: "Liberian Dollar", code: "LRD", symbol: "$" }, { name: "Libyan Dinar", code: "LYD", symbol: "" }, { name: "Moroccan Dirham", code: "MAD", symbol: "" }, { name: "Moldovan Leu", code: "MDL", symbol: "" }, { name: "Malagasy Ariary", code: "MGA", symbol: "" }, { name: "Denar", code: "MKD", symbol: "\u0434\u0435\u043D" }, { name: "Kyat", code: "MMK", symbol: "" }, { name: "Tugrik", code: "MNT", symbol: "\u20AE" }, { name: "Pataca", code: "MOP", symbol: "" }, { name: "Ouguiya", code: "MRU", symbol: "" }, { name: "Mauritius Rupee", code: "MUR", symbol: "\u20A8" }, { name: "Rufiyaa", code: "MVR", symbol: "" }, { name: "Kwacha", code: "MWK", symbol: "" }, { name: "Mexican Peso", code: "MXN", symbol: "$" }, { name: "Malaysian Ringgit", code: "MYR", symbol: "RM" }, { name: "Metical", code: "MZN", symbol: "MT" }, { name: "Naira", code: "NGN", symbol: "\u20A6" }, { name: "Cordoba Oro", code: "NIO", symbol: "C$" }, { name: "Norwegian Krone", code: "NOK", symbol: "kr" }, { name: "Nepalese Rupee", code: "NPR", symbol: "\u20A8" }, { name: "New Zealand Dollar", code: "NZD", symbol: "$" }, { name: "Rial Omani", code: "OMR", symbol: "\uFDFC" }, { name: "Balboa", code: "PAB", symbol: "B/." }, { name: "Nuevo Sol", code: "PEN", symbol: "S/." }, { name: "Kina", code: "PGK", symbol: "" }, { name: "Philippine Peso", code: "PHP", symbol: "Php" }, { name: "Pakistan Rupee", code: "PKR", symbol: "\u20A8" }, { name: "Zloty", code: "PLN", symbol: "z\u0142" }, { name: "Guarani", code: "PYG", symbol: "Gs" }, { name: "Qatari Rial", code: "QAR", symbol: "\uFDFC" }, { name: "New Leu", code: "RON", symbol: "lei" }, { name: "Serbian Dinar", code: "RSD", symbol: "\u0414\u0438\u043D." }, { name: "Russian Ruble", code: "RUB", symbol: "\u0440\u0443\u0431" }, { name: "Rwanda Franc", code: "RWF", symbol: "" }, { name: "Saudi Riyal", code: "SAR", symbol: "\uFDFC" }, { name: "Solomon Islands Dollar", code: "SBD", symbol: "$" }, { name: "Seychelles Rupee", code: "SCR", symbol: "\u20A8" }, { name: "Sudanese Pound", code: "SDG", symbol: "" }, { name: "Swedish Krona", code: "SEK", symbol: "kr" }, { name: "Singapore Dollar", code: "SGD", symbol: "$" }, { name: "Saint Helena Pound", code: "SHP", symbol: "\xA3" }, { name: "Leone", code: "SLE", symbol: "" }, { name: "Somali Shilling", code: "SOS", symbol: "S" }, { name: "Surinam Dollar", code: "SRD", symbol: "$" }, { name: "South Sudanese pound", code: "SSP", symbol: "" }, { name: "Dobra", code: "STN", symbol: "Db" }, { name: "Syrian Pound", code: "SYP", symbol: "\xA3" }, { name: "Lilangeni", code: "SZL", symbol: "" }, { name: "Baht", code: "THB", symbol: "\u0E3F" }, { name: "Somoni", code: "TJS", symbol: "" }, { name: "Manat", code: "TMT", symbol: "" }, { name: "Tunisian Dinar", code: "TND", symbol: "" }, { name: "Pa'anga", code: "TOP", symbol: "" }, { name: "Turkish Lira", code: "TRY", symbol: "\u20BA" }, { name: "Trinidad and Tobago Dollar", code: "TTD", symbol: "TT$" }, { name: "New Taiwan Dollar", code: "TWD", symbol: "NT$" }, { name: "Tanzanian Shilling", code: "TZS", symbol: "" }, { name: "Hryvnia", code: "UAH", symbol: "\u20B4" }, { name: "Uganda Shilling", code: "UGX", symbol: "" }, { name: "US Dollar", code: "USD", symbol: "$" }, { name: "Peso Uruguayo", code: "UYU", symbol: "$U" }, { name: "Uzbekistan Sum", code: "UZS", symbol: "\u043B\u0432" }, { name: "Venezuelan bol\xEDvar", code: "VES", symbol: "Bs" }, { name: "Dong", code: "VND", symbol: "\u20AB" }, { name: "Vatu", code: "VUV", symbol: "" }, { name: "Tala", code: "WST", symbol: "" }, { name: "CFA Franc BEAC", code: "XAF", symbol: "" }, { name: "East Caribbean Dollar", code: "XCD", symbol: "$" }, { name: "CFA Franc BCEAO", code: "XOF", symbol: "" }, { name: "CFP Franc", code: "XPF", symbol: "" }, { name: "Yemeni Rial", code: "YER", symbol: "\uFDFC" }, { name: "Rand", code: "ZAR", symbol: "R" }, { name: "Lesotho Loti", code: "LSL", symbol: "" }, { name: "Namibia Dollar", code: "NAD", symbol: "N$" }, { name: "Zambian Kwacha", code: "ZMW", symbol: "K" }, { name: "Zimbabwe Dollar", code: "ZWL", symbol: "" }];
var de = ["A {{finance.transactionType}} for {{finance.currencyCode}} {{finance.amount}} was made at {{company.name}} via card ending ****{{string.numeric(4)}} on account ***{{string.numeric(4)}}.", "A {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} occurred at {{company.name}} using a card ending in ****{{string.numeric(4)}} for account ***{{string.numeric(4)}}.", "Payment of {{finance.currencyCode}} {{finance.amount}} for {{finance.transactionType}} at {{company.name}}, processed with card ending ****{{string.numeric(4)}} linked to account ***{{string.numeric(4)}}.", "Transaction alert: {{finance.transactionType}} at {{company.name}} using card ending ****{{string.numeric(4)}} for an amount of {{finance.currencyCode}} {{finance.amount}} on account ***{{string.numeric(4)}}.", "You made a {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} using card ending in ****{{string.numeric(4)}} from account ***{{string.numeric(4)}}.", "Your {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} was successful. Charged via card ****{{string.numeric(4)}} to account ***{{string.numeric(4)}}.", "{{finance.transactionType}} at {{company.name}} with a card ending in ****{{string.numeric(4)}} for {{finance.currencyCode}} {{finance.amount}} from account ***{{string.numeric(4)}}.", "{{finance.transactionType}} confirmed at {{company.name}} for {{finance.currencyCode}} {{finance.amount}}, card ending in ****{{string.numeric(4)}} associated with account ***{{string.numeric(4)}}.", "{{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} charged to account ending in {{string.numeric(4)}} using card ending in ****{{string.numeric(4)}}.", "{{finance.transactionType}} processed at {{company.name}} for {{finance.currencyCode}} {{finance.amount}}, using card ending ****{{string.numeric(4)}}. Account: ***{{string.numeric(4)}}.", "{{finance.transactionType}} transaction at {{company.name}} using card ending with ****{{string.numeric(4)}} for {{finance.currencyCode}} {{finance.amount}} in account ***{{string.numeric(4)}}."];
var ue = ["deposit", "invoice", "payment", "withdrawal"];
var tr = { account_type: ee, credit_card: le, currency: se, transaction_description_pattern: de, transaction_type: ue };
var ce = tr;
var me = ["bitter", "creamy", "crispy", "crunchy", "delicious", "fluffy", "fresh", "golden", "juicy", "moist", "rich", "salty", "savory", "smoky", "sour", "spicy", "sweet", "tangy", "tender", "zesty"];
var he = ["A classic pie filled with delicious {{food.meat}} and {{food.adjective}} {{food.ingredient}}, baked in a {{food.adjective}} pastry crust and topped with a golden-brown lattice.", "A delightful tart combining {{food.adjective}} {{food.vegetable}} and sweet {{food.fruit}}, set in a buttery pastry shell and finished with a hint of {{food.spice}}.", "A heartwarming {{food.ethnic_category}} soup, featuring fresh {{food.ingredient}} and an aromatic blend of traditional spices.", "A robust {{food.adjective}} stew featuring {{food.ethnic_category}} flavors, loaded with {{food.adjective}} meat, {{food.adjective}} vegetables, and a {{food.adjective}}, {{food.adjective}} broth.", "A simple {{food.fruit}} pie. No fancy stuff. Just pie.", "A slow-roasted {{animal.bird}} with a {{food.adjective}}, {{food.adjective}} exterior. Stuffed with {{food.fruit}} and covered in {{food.fruit}} sauce. Sides with {{food.vegetable}} puree and wild {{food.vegetable}}.", "A special {{color.human}} {{food.ingredient}} from {{location.country}}. To support the strong flavor it is sided with a tablespoon of {{food.spice}}.", "A succulent {{food.meat}} steak, encased in a {{food.adjective}} {{food.spice}} crust, served with a side of {{food.spice}} mashed {{food.vegetable}}.", "An exquisite {{food.meat}} roast, infused with the essence of {{food.fruit}}, slow-roasted to bring out its natural flavors and served with a side of creamy {{food.vegetable}}", "Baked {{food.ingredient}}-stuffed {{food.meat}}, seasoned with {{food.spice}} and {{food.adjective}} herbs, accompanied by roasted {{food.vegetable}} medley.", "Crispy fried {{food.meat}} bites, seasoned with {{food.spice}} and served with a tangy {{food.fruit}} dipping sauce.", "Fresh mixed greens tossed with {{food.spice}}-rubbed {{food.meat}}, {{food.vegetable}}, and a light dressing.", "Fresh {{food.ingredient}} with a pinch of {{food.spice}}, topped by a caramelized {{food.fruit}} with whipped cream", "Grilled {{food.meat}} kebabs, marinated in {{food.ethnic_category}} spices and served with a fresh {{food.vegetable}} and {{food.fruit}} salad.", "Hearty {{food.ingredient}} and {{food.meat}} stew, slow-cooked with {{food.spice}} and {{food.vegetable}} for a comforting, flavorful meal.", "Juicy {{food.meat}}, grilled to your liking and drizzled with a bold {{food.spice}} sauce, served alongside roasted {{food.vegetable}}.", "Our {{food.adjective}} {{food.meat}}, slow-cooked to perfection, accompanied by steamed {{food.vegetable}} and a rich, savory gravy.", "Tender {{food.meat}} skewers, glazed with a sweet and tangy {{food.fruit}} sauce, served over a bed of fragrant jasmine rice.", "Tenderly braised {{food.meat}} in a rich {{food.spice}} and {{food.vegetable}} sauce, served with a side of creamy {{food.vegetable}}.", "Three {{food.ingredient}} with {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}} and {{food.ingredient}}. With a side of baked {{food.fruit}}, and your choice of {{food.ingredient}} or {{food.ingredient}}.", '{{number.int({"min":1, "max":99})}}-day aged {{food.meat}} steak, with choice of {{number.int({"min":2, "max":4})}} sides.'];
var ye = ["California maki", "Peking duck", "Philadelphia maki", "arepas", "barbecue ribs", "bruschette with tomato", "bunny chow", "caesar salad", "caprese salad", "cauliflower penne", "cheeseburger", "chicken fajitas", "chicken milanese", "chicken parm", "chicken wings", "chilli con carne", "ebiten maki", "fettuccine alfredo", "fish and chips", "french fries with sausages", "french toast", "hummus", "katsu curry", "kebab", "lasagne", "linguine with clams", "massaman curry", "meatballs with sauce", "mushroom risotto", "pappardelle alla bolognese", "pasta and beans", "pasta carbonara", "pasta with tomato and basil", "pho", "pierogi", "pizza", "poke", "pork belly buns", "pork sausage roll", "poutine", "ricotta stuffed ravioli", "risotto with seafood", "salmon nigiri", "scotch eggs", "seafood paella", "som tam", "souvlaki", "stinky tofu", "sushi", "tacos", "teriyaki chicken donburi", "tiramis\xF9", "tuna sashimi", "vegetable soup"];
var pe = ["{{food.adjective}} {{food.ethnic_category}} stew", "{{food.adjective}} {{food.meat}} with {{food.vegetable}}", "{{food.ethnic_category}} {{food.ingredient}} soup", "{{food.fruit}} and {{food.fruit}} tart", "{{food.fruit}} pie", "{{food.fruit}}-glazed {{food.meat}} skewers", "{{food.fruit}}-infused {{food.meat}} roast", "{{food.ingredient}} and {{food.meat}} pie", "{{food.ingredient}}-infused {{food.meat}}", "{{food.meat}} steak", "{{food.meat}} with {{food.fruit}} sauce", "{{food.spice}}-crusted {{food.meat}}", "{{food.spice}}-rubbed {{food.meat}} salad", "{{food.vegetable}} salad", "{{person.first_name.generic}}'s special {{food.ingredient}}"];
var ge = ["Ainu", "Albanian", "American", "Andhra", "Anglo-Indian", "Arab", "Argentine", "Armenian", "Assyrian", "Awadhi", "Azerbaijani", "Balochi", "Bangladeshi", "Bashkir", "Belarusian", "Bengali", "Berber", "Brazilian", "British", "Buddhist", "Bulgarian", "Cajun", "Cantonese", "Caribbean", "Chechen", "Chinese", "Chinese Islamic", "Circassian", "Crimean Tatar", "Cypriot", "Czech", "Danish", "Egyptian", "English", "Eritrean", "Estonian", "Ethiopian", "Filipino", "French", "Georgian", "German", "Goan", "Goan Catholic", "Greek", "Gujarati", "Hyderabad", "Indian", "Indian Chinese", "Indian Singaporean", "Indonesian", "Inuit", "Irish", "Italian", "Italian-American", "Jamaican", "Japanese", "Jewish - Israeli", "Karnataka", "Kazakh", "Keralite", "Korean", "Kurdish", "Laotian", "Latvian", "Lebanese", "Lithuanian", "Louisiana Creole", "Maharashtrian", "Malay", "Malaysian Chinese", "Malaysian Indian", "Mangalorean", "Mediterranean", "Mennonite", "Mexican", "Mordovian", "Mughal", "Native American", "Nepalese", "New Mexican", "Odia", "Pakistani", "Parsi", "Pashtun", "Pennsylvania Dutch", "Peranakan", "Persian", "Peruvian", "Polish", "Portuguese", "Punjabi", "Qu\xE9b\xE9cois", "Rajasthani", "Romani", "Romanian", "Russian", "Sami", "Serbian", "Sindhi", "Slovak", "Slovenian", "Somali", "South Indian", "Soviet", "Spanish", "Sri Lankan", "Taiwanese", "Tamil", "Tatar", "Texan", "Thai", "Turkish", "Udupi", "Ukrainian", "Vietnamese", "Yamal", "Zambian", "Zanzibari"];
var be = ["apple", "apricot", "aubergine", "avocado", "banana", "berry", "blackberry", "blood orange", "blueberry", "bush tomato", "butternut pumpkin", "cantaloupe", "cavalo", "cherry", "corella pear", "cranberry", "cumquat", "currant", "custard apple", "custard apples daikon", "date", "dragonfruit", "dried apricot", "elderberry", "feijoa", "fig", "fingerlime", "goji berry", "grape", "grapefruit", "guava", "honeydew melon", "incaberry", "jarrahdale pumpkin", "juniper berry", "kiwi fruit", "kiwiberry", "lemon", "lime", "longan", "loquat", "lychee", "mandarin", "mango", "mangosteen", "melon", "mulberry", "nashi pear", "nectarine", "olive", "orange", "papaw", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "prune", "rockmelon", "snowpea", "sprout", "starfruit", "strawberry", "sultana", "tangelo", "tomato", "watermelon"];
var Se = ["achacha", "adzuki beans", "agar", "agave syrup", "ajowan seed", "albacore tuna", "alfalfa", "allspice", "almond oil", "almonds", "amaranth", "amchur", "anchovies", "aniseed", "annatto seed", "apple cider vinegar", "apple juice", "apple juice concentrate", "apples", "apricots", "arborio rice", "arrowroot", "artichoke", "arugula", "asafoetida", "asian greens", "asian noodles", "asparagus", "aubergine", "avocado", "avocado oil", "avocado spread", "bacon", "baking powder", "baking soda", "balsamic vinegar", "bamboo shoots", "banana", "barberry", "barley", "barramundi", "basil basmati rice", "bay leaves", "bean shoots", "bean sprouts", "beans", "beef", "beef stock", "beetroot", "berries", "besan", "black eyed beans", "blackberries", "blood oranges", "blue cheese", "blue eye trevalla", "blue swimmer crab", "blueberries", "bocconcini", "bok choy", "bonito flakes", "bonza", "borlotti beans", "bran", "brazil nut", "bread", "brie", "broccoli", "broccolini", "brown flour", "brown mushrooms", "brown rice", "brown rice vinegar", "brussels sprouts", "buckwheat", "buckwheat flour", "buckwheat noodles", "bulghur", "bush tomato", "butter", "butter beans", "buttermilk", "butternut lettuce", "butternut pumpkin", "cabbage", "cacao", "cake", "calamari", "camellia tea oil", "camembert", "camomile", "candle nut", "cannellini beans", "canola oil", "cantaloupe", "capers", "capsicum", "caraway seed", "cardamom", "carob carrot", "carrot", "cashews", "cassia bark", "cauliflower", "cavalo", "cayenne", "celery", "celery seed", "cheddar", "cherries", "chestnut", "chia seeds", "chicken", "chicken stock", "chickory", "chickpea", "chilli pepper", "chinese cabbage", "chinese five spice", "chives", "choy sum", "cinnamon", "clams", "cloves", "cocoa powder", "coconut", "coconut oil", "coconut water", "coffee", "common cultivated mushrooms", "corella pear", "coriander leaves", "coriander seed", "corn oil", "corn syrup", "corn tortilla", "cornichons", "cornmeal", "cos lettuce", "cottage cheese", "cous cous", "crabs", "cranberry", "cream", "cream cheese", "cucumber", "cumin", "cumquat", "currants", "curry leaves", "curry powder", "custard apples", "dandelion", "dark chocolate", "dashi", "dates", "dill", "dragonfruit", "dried apricots", "dried chinese broccoli", "duck", "edam", "edamame", "eggplant", "eggs", "elderberry", "endive", "english spinach", "enoki mushrooms", "extra virgin olive oil", "farmed prawns", "feijoa", "fennel", "fennel seeds", "fenugreek", "feta", "figs", "file powder", "fingerlime", "fish sauce", "fish stock", "flat mushrooms", "flathead", "flaxseed", "flaxseed oil", "flounder", "flour", "freekeh", "french eschallots", "fresh chillies", "fromage blanc", "fruit", "galangal", "garam masala", "garlic", "goat cheese", "goat milk", "goji berry", "grape seed oil", "grapefruit", "grapes", "green beans", "green pepper", "green tea", "green tea noodles", "greenwheat freekeh", "gruyere", "guava", "gula melaka", "haloumi", "ham", "haricot beans", "harissa", "hazelnut", "hijiki", "hiramasa kingfish", "hokkien noodles", "honey", "honeydew melon", "horseradish", "hot smoked salmon", "hummus", "iceberg lettuce", "incaberries", "jarrahdale pumpkin", "jasmine rice", "jelly", "jerusalem artichoke", "jewfish", "jicama", "juniper berries", "kale", "kangaroo", "kecap manis", "kenchur", "kidney beans", "kidneys", "kiwi berries", "kiwi fruit", "kohlrabi", "kokam", "kombu", "koshihikari rice", "kudzu", "kumera", "lamb", "lavender flowers", "leeks", "lemon", "lemongrass", "lentils", "lettuce", "licorice", "lime leaves", "limes", "liver", "lobster", "longan", "loquats", "lotus root", "lychees", "macadamia nut", "macadamia oil", "mace", "mackerel", "mahi mahi", "mahlab", "malt vinegar", "mandarins", "mango", "mangosteens", "maple syrup", "margarine", "marigold", "marjoram", "mastic", "melon", "milk", "milk chocolate", "mint", "miso", "molasses", "monkfish", "morwong", "mountain bread", "mozzarella", "muesli", "mulberries", "mullet", "mung beans", "mussels", "mustard", "mustard seed", "nashi pear", "nasturtium", "nectarines", "nori", "nutmeg", "nutritional yeast", "nuts", "oat flour", "oatmeal", "oats", "octopus", "okra", "olive oil", "olives", "omega spread", "onion", "oranges", "oregano", "oyster mushrooms", "oyster sauce", "oysters", "pandanus leaves", "papaw", "papaya", "paprik", "parmesan cheese", "parrotfish", "parsley", "parsnip", "passionfruit", "pasta", "peaches", "peanuts", "pear", "pear juice", "pears", "peas", "pecan nut", "pecorino", "pepitas", "peppercorns", "peppermint", "peppers", "persimmon", "pine nut", "pineapple", "pinto beans", "pistachio nut", "plums", "polenta", "pomegranate", "poppy seed", "porcini mushrooms", "pork", "potato flour", "potatoes", "provolone", "prunes", "pumpkin", "pumpkin seed", "purple carrot", "purple rice", "quark", "quince", "quinoa", "radicchio", "radish", "raisin", "raspberry", "red cabbage", "red lentils", "red pepper", "red wine", "red wine vinegar", "redfish", "rhubarb", "rice flour", "rice noodles", "rice paper", "rice syrup", "ricemilk", "ricotta", "rockmelon", "rose water", "rosemary", "rye", "rye bread", "safflower oil", "saffron", "sage", "sake", "salmon", "sardines", "sausages", "scallops", "sea salt", "semolina", "sesame oil", "sesame seeds", "shark", "shiitake mushrooms", "silverbeet", "slivered almonds", "smoked trout", "snapper", "snowpea sprouts", "snowpeas", "soba", "sour dough bread", "soy", "soy beans", "soy flour", "soy milk", "soy sauce", "soymilk", "spearmint", "spelt", "spelt bread", "spinach", "spring onions", "sprouts", "squash", "squid", "star anise", "star fruit", "starfruit", "stevia", "strawberries", "sugar", "sultanas", "sun-dried tomatoes", "sunflower oil", "sunflower seeds", "sweet chilli sauce", "sweet potato", "swiss chard", "swordfish", "szechuan pepperberry", "tabasco", "tahini", "taleggio cheese", "tamari", "tamarillo", "tangelo", "tapioca", "tapioca flour", "tarragon", "tea", "tea oil", "tempeh", "thyme", "tinned", "tofu", "tom yum", "tomatoes", "trout", "tuna", "turkey", "turmeric", "turnips", "unbleached flour", "vanilla beans", "vegetable oil", "vegetable spaghetti", "vegetable stock", "vermicelli noodles", "vinegar", "wakame", "walnut", "warehou", "wasabi", "water", "watercress", "watermelon", "wattleseed", "wheat", "wheatgrass juice", "white bread", "white flour", "white rice", "white wine", "white wine vinegar", "whiting wild rice", "wholegrain bread", "wholemeal", "wholewheat flour", "william pear", "yeast", "yellow papaw", "yellowtail kingfish", "yoghurt", "yogurt", "zucchini"];
var ke = ["beef", "chicken", "crocodile", "duck", "emu", "goose", "kangaroo", "lamb", "ostrich", "pigeon", "pork", "quail", "rabbit", "salmon", "turkey", "venison"];
var Ce = ["achiote seed", "ajwain seed", "ajwan seed", "allspice", "amchoor", "anise", "anise star", "aniseed", "annatto seed", "arrowroot", "asafoetida", "baharat", "balti masala", "balti stir fry mix", "basil", "bay leaves", "bbq", "caraway seed", "cardamom", "cassia", "cayenne pepper", "celery", "chamomile", "chervil", "chilli", "chilli pepper", "chillies", "china star", "chives", "cinnamon", "cloves", "colombo", "coriander", "cumin", "curly leaf parsley", "curry", "dhansak", "dill", "fennel seed", "fenugreek", "fines herbes", "five spice", "french lavender", "galangal", "garam masala", "garlic", "german chamomile", "ginger", "green cardamom", "herbes de provence", "jalfrezi", "jerk", "kaffir leaves", "korma", "lavender", "lemon grass", "lemon pepper", "lime leaves", "liquorice root", "mace", "mango", "marjoram", "methi", "mint", "mustard", "nutmeg", "onion seed", "orange zest", "oregano", "paprika", "parsley", "pepper", "peppercorns", "pimento", "piri piri", "poppy seed", "pot marjoram", "poudre de colombo", "ras-el-hanout", "rice paper", "rogan josh", "rose baie", "rosemary", "saffron", "sage", "sesame seed", "spearmint", "sumac", "sweet basil", "sweet laurel", "tagine", "tandoori masala", "tarragon", "thyme", "tikka masala", "turmeric", "vanilla", "zahtar"];
var fe = ["artichoke", "arugula", "asian greens", "asparagus", "bean shoots", "bean sprouts", "beans", "beetroot", "bok choy", "broccoli", "broccolini", "brussels sprouts", "butternut lettuce", "cabbage", "capers", "carob carrot", "carrot", "cauliflower", "celery", "chilli pepper", "chinese cabbage", "chives", "cornichons", "cos lettuce", "cucumber", "dried chinese broccoli", "eggplant", "endive", "english spinach", "french eschallots", "fresh chillies", "garlic", "green beans", "green pepper", "hijiki", "iceberg lettuce", "jerusalem artichoke", "jicama", "kale", "kohlrabi", "leeks", "lettuce", "okra", "onion", "parsnip", "peas", "peppers", "potatoes", "pumpkin", "purple carrot", "radicchio", "radish", "raspberry", "red cabbage", "red pepper", "rhubarb", "snowpea sprouts", "spinach", "squash", "sun dried tomatoes", "sweet potato", "swiss chard", "turnips", "zucchini"];
var lr = { adjective: me, description_pattern: he, dish: ye, dish_pattern: pe, ethnic_category: ge, fruit: be, ingredient: Se, meat: ke, spice: Ce, vegetable: fe };
var ve = lr;
var Ae = ["1080p", "auxiliary", "back-end", "bluetooth", "cross-platform", "digital", "haptic", "mobile", "multi-byte", "neural", "online", "open-source", "optical", "primary", "redundant", "solid state", "virtual", "wireless"];
var Be = ["backing up", "bypassing", "calculating", "compressing", "connecting", "copying", "generating", "hacking", "indexing", "navigating", "overriding", "parsing", "programming", "quantifying", "synthesizing", "transmitting"];
var Te = ["alarm", "application", "array", "bandwidth", "bus", "capacitor", "card", "circuit", "driver", "feed", "firewall", "hard drive", "interface", "matrix", "microchip", "monitor", "panel", "pixel", "port", "program", "protocol", "sensor", "system", "transmitter"];
var Me = ["I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!", "If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!", "The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!", "Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!", "Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!", "We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!", "You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!", "{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!"];
var we = ["back up", "bypass", "calculate", "compress", "connect", "copy", "generate", "hack", "index", "input", "navigate", "override", "parse", "program", "quantify", "reboot", "synthesize", "transmit"];
var sr = { adjective: Ae, ingverb: Be, noun: Te, phrase: Me, verb: we };
var Le = sr;
var De = ["com", "biz", "info", "name", "net", "org"];
var Re = ["example.org", "example.com", "example.net"];
var Pe = ["gmail.com", "yahoo.com", "hotmail.com"];
var dr = { domain_suffix: De, example_email: Re, free_email: Pe };
var He = dr;
var We = ["#####", "####", "###"];
var Ge = ["Abilene", "Akron", "Alafaya", "Alameda", "Albany", "Albuquerque", "Alexandria", "Alhambra", "Aliso Viejo", "Allen", "Allentown", "Aloha", "Alpharetta", "Altadena", "Altamonte Springs", "Altoona", "Amarillo", "Ames", "Anaheim", "Anchorage", "Anderson", "Ankeny", "Ann Arbor", "Annandale", "Antelope", "Antioch", "Apex", "Apopka", "Apple Valley", "Appleton", "Arcadia", "Arden-Arcade", "Arecibo", "Arlington", "Arlington Heights", "Arvada", "Ashburn", "Asheville", "Aspen Hill", "Atascocita", "Athens-Clarke County", "Atlanta", "Attleboro", "Auburn", "Augusta-Richmond County", "Aurora", "Austin", "Avondale", "Azusa", "Bakersfield", "Baldwin Park", "Baltimore", "Barnstable Town", "Bartlett", "Baton Rouge", "Battle Creek", "Bayamon", "Bayonne", "Baytown", "Beaumont", "Beavercreek", "Beaverton", "Bedford", "Bel Air South", "Bell Gardens", "Belleville", "Bellevue", "Bellflower", "Bellingham", "Bend", "Bentonville", "Berkeley", "Berwyn", "Bethesda", "Bethlehem", "Billings", "Biloxi", "Binghamton", "Birmingham", "Bismarck", "Blacksburg", "Blaine", "Bloomington", "Blue Springs", "Boca Raton", "Boise City", "Bolingbrook", "Bonita Springs", "Bossier City", "Boston", "Bothell", "Boulder", "Bountiful", "Bowie", "Bowling Green", "Boynton Beach", "Bozeman", "Bradenton", "Brandon", "Brentwood", "Bridgeport", "Bristol", "Brockton", "Broken Arrow", "Brookhaven", "Brookline", "Brooklyn Park", "Broomfield", "Brownsville", "Bryan", "Buckeye", "Buena Park", "Buffalo", "Buffalo Grove", "Burbank", "Burien", "Burke", "Burleson", "Burlington", "Burnsville", "Caguas", "Caldwell", "Camarillo", "Cambridge", "Camden", "Canton", "Cape Coral", "Carlsbad", "Carmel", "Carmichael", "Carolina", "Carrollton", "Carson", "Carson City", "Cary", "Casa Grande", "Casas Adobes", "Casper", "Castle Rock", "Castro Valley", "Catalina Foothills", "Cathedral City", "Catonsville", "Cedar Hill", "Cedar Park", "Cedar Rapids", "Centennial", "Centreville", "Ceres", "Cerritos", "Champaign", "Chandler", "Chapel Hill", "Charleston", "Charlotte", "Charlottesville", "Chattanooga", "Cheektowaga", "Chesapeake", "Chesterfield", "Cheyenne", "Chicago", "Chico", "Chicopee", "Chino", "Chino Hills", "Chula Vista", "Cicero", "Cincinnati", "Citrus Heights", "Clarksville", "Clearwater", "Cleveland", "Cleveland Heights", "Clifton", "Clovis", "Coachella", "Coconut Creek", "Coeur d'Alene", "College Station", "Collierville", "Colorado Springs", "Colton", "Columbia", "Columbus", "Commerce City", "Compton", "Concord", "Conroe", "Conway", "Coon Rapids", "Coral Gables", "Coral Springs", "Corona", "Corpus Christi", "Corvallis", "Costa Mesa", "Council Bluffs", "Country Club", "Covina", "Cranston", "Cupertino", "Cutler Bay", "Cuyahoga Falls", "Cypress", "Dale City", "Dallas", "Daly City", "Danbury", "Danville", "Davenport", "Davie", "Davis", "Dayton", "Daytona Beach", "DeKalb", "DeSoto", "Dearborn", "Dearborn Heights", "Decatur", "Deerfield Beach", "Delano", "Delray Beach", "Deltona", "Denton", "Denver", "Des Moines", "Des Plaines", "Detroit", "Diamond Bar", "Doral", "Dothan", "Downers Grove", "Downey", "Draper", "Dublin", "Dubuque", "Duluth", "Dundalk", "Dunwoody", "Durham", "Eagan", "East Hartford", "East Honolulu", "East Lansing", "East Los Angeles", "East Orange", "East Providence", "Eastvale", "Eau Claire", "Eden Prairie", "Edina", "Edinburg", "Edmond", "El Cajon", "El Centro", "El Dorado Hills", "El Monte", "El Paso", "Elgin", "Elizabeth", "Elk Grove", "Elkhart", "Ellicott City", "Elmhurst", "Elyria", "Encinitas", "Enid", "Enterprise", "Erie", "Escondido", "Euclid", "Eugene", "Euless", "Evanston", "Evansville", "Everett", "Fairfield", "Fall River", "Fargo", "Farmington", "Farmington Hills", "Fayetteville", "Federal Way", "Findlay", "Fishers", "Flagstaff", "Flint", "Florence-Graham", "Florin", "Florissant", "Flower Mound", "Folsom", "Fond du Lac", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Myers", "Fort Pierce", "Fort Smith", "Fort Wayne", "Fort Worth", "Fountain Valley", "Fountainebleau", "Framingham", "Franklin", "Frederick", "Freeport", "Fremont", "Fresno", "Frisco", "Fullerton", "Gainesville", "Gaithersburg", "Galveston", "Garden Grove", "Gardena", "Garland", "Gary", "Gastonia", "Georgetown", "Germantown", "Gilbert", "Gilroy", "Glen Burnie", "Glendale", "Glendora", "Glenview", "Goodyear", "Grand Forks", "Grand Island", "Grand Junction", "Grand Prairie", "Grand Rapids", "Grapevine", "Great Falls", "Greeley", "Green Bay", "Greensboro", "Greenville", "Greenwood", "Gresham", "Guaynabo", "Gulfport", "Hacienda Heights", "Hackensack", "Haltom City", "Hamilton", "Hammond", "Hampton", "Hanford", "Harlingen", "Harrisburg", "Harrisonburg", "Hartford", "Hattiesburg", "Haverhill", "Hawthorne", "Hayward", "Hemet", "Hempstead", "Henderson", "Hendersonville", "Hesperia", "Hialeah", "Hicksville", "High Point", "Highland", "Highlands Ranch", "Hillsboro", "Hilo", "Hoboken", "Hoffman Estates", "Hollywood", "Homestead", "Honolulu", "Hoover", "Houston", "Huntersville", "Huntington", "Huntington Beach", "Huntington Park", "Huntsville", "Hutchinson", "Idaho Falls", "Independence", "Indianapolis", "Indio", "Inglewood", "Iowa City", "Irondequoit", "Irvine", "Irving", "Jackson", "Jacksonville", "Janesville", "Jefferson City", "Jeffersonville", "Jersey City", "Johns Creek", "Johnson City", "Joliet", "Jonesboro", "Joplin", "Jupiter", "Jurupa Valley", "Kalamazoo", "Kannapolis", "Kansas City", "Kearny", "Keller", "Kendale Lakes", "Kendall", "Kenner", "Kennewick", "Kenosha", "Kent", "Kentwood", "Kettering", "Killeen", "Kingsport", "Kirkland", "Kissimmee", "Knoxville", "Kokomo", "La Crosse", "La Habra", "La Mesa", "La Mirada", "Lacey", "Lafayette", "Laguna Niguel", "Lake Charles", "Lake Elsinore", "Lake Forest", "Lake Havasu City", "Lake Ridge", "Lakeland", "Lakeville", "Lakewood", "Lancaster", "Lansing", "Laredo", "Largo", "Las Cruces", "Las Vegas", "Lauderhill", "Lawrence", "Lawton", "Layton", "League City", "Lee's Summit", "Leesburg", "Lehi", "Lehigh Acres", "Lenexa", "Levittown", "Lewisville", "Lexington-Fayette", "Lincoln", "Linden", "Little Rock", "Littleton", "Livermore", "Livonia", "Lodi", "Logan", "Lombard", "Lompoc", "Long Beach", "Longmont", "Longview", "Lorain", "Los Angeles", "Louisville/Jefferson County", "Loveland", "Lowell", "Lubbock", "Lynchburg", "Lynn", "Lynwood", "Macon-Bibb County", "Madera", "Madison", "Malden", "Manchester", "Manhattan", "Mansfield", "Manteca", "Maple Grove", "Margate", "Maricopa", "Marietta", "Marysville", "Mayaguez", "McAllen", "McKinney", "McLean", "Medford", "Melbourne", "Memphis", "Menifee", "Mentor", "Merced", "Meriden", "Meridian", "Mesa", "Mesquite", "Metairie", "Methuen Town", "Miami", "Miami Beach", "Miami Gardens", "Middletown", "Midland", "Midwest City", "Milford", "Millcreek", "Milpitas", "Milwaukee", "Minneapolis", "Minnetonka", "Minot", "Miramar", "Mishawaka", "Mission", "Mission Viejo", "Missoula", "Missouri City", "Mobile", "Modesto", "Moline", "Monroe", "Montebello", "Monterey Park", "Montgomery", "Moore", "Moreno Valley", "Morgan Hill", "Mount Pleasant", "Mount Prospect", "Mount Vernon", "Mountain View", "Muncie", "Murfreesboro", "Murray", "Murrieta", "Nampa", "Napa", "Naperville", "Nashua", "Nashville-Davidson", "National City", "New Bedford", "New Braunfels", "New Britain", "New Brunswick", "New Haven", "New Orleans", "New Rochelle", "New York", "Newark", "Newport Beach", "Newport News", "Newton", "Niagara Falls", "Noblesville", "Norfolk", "Normal", "Norman", "North Bethesda", "North Charleston", "North Highlands", "North Las Vegas", "North Lauderdale", "North Little Rock", "North Miami", "North Miami Beach", "North Port", "North Richland Hills", "Norwalk", "Novato", "Novi", "O'Fallon", "Oak Lawn", "Oak Park", "Oakland", "Oakland Park", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orland Park", "Orlando", "Oro Valley", "Oshkosh", "Overland Park", "Owensboro", "Oxnard", "Palatine", "Palm Bay", "Palm Beach Gardens", "Palm Coast", "Palm Desert", "Palm Harbor", "Palm Springs", "Palmdale", "Palo Alto", "Paradise", "Paramount", "Parker", "Parma", "Pasadena", "Pasco", "Passaic", "Paterson", "Pawtucket", "Peabody", "Pearl City", "Pearland", "Pembroke Pines", "Pensacola", "Peoria", "Perris", "Perth Amboy", "Petaluma", "Pflugerville", "Pharr", "Philadelphia", "Phoenix", "Pico Rivera", "Pine Bluff", "Pine Hills", "Pinellas Park", "Pittsburg", "Pittsburgh", "Pittsfield", "Placentia", "Plainfield", "Plano", "Plantation", "Pleasanton", "Plymouth", "Pocatello", "Poinciana", "Pomona", "Pompano Beach", "Ponce", "Pontiac", "Port Arthur", "Port Charlotte", "Port Orange", "Port St. Lucie", "Portage", "Porterville", "Portland", "Portsmouth", "Potomac", "Poway", "Providence", "Provo", "Pueblo", "Quincy", "Racine", "Raleigh", "Rancho Cordova", "Rancho Cucamonga", "Rancho Palos Verdes", "Rancho Santa Margarita", "Rapid City", "Reading", "Redding", "Redlands", "Redmond", "Redondo Beach", "Redwood City", "Reno", "Renton", "Reston", "Revere", "Rialto", "Richardson", "Richland", "Richmond", "Rio Rancho", "Riverside", "Riverton", "Riverview", "Roanoke", "Rochester", "Rochester Hills", "Rock Hill", "Rockford", "Rocklin", "Rockville", "Rockwall", "Rocky Mount", "Rogers", "Rohnert Park", "Rosemead", "Roseville", "Roswell", "Round Rock", "Rowland Heights", "Rowlett", "Royal Oak", "Sacramento", "Saginaw", "Salem", "Salina", "Salinas", "Salt Lake City", "Sammamish", "San Angelo", "San Antonio", "San Bernardino", "San Bruno", "San Buenaventura (Ventura)", "San Clemente", "San Diego", "San Francisco", "San Jacinto", "San Jose", "San Juan", "San Leandro", "San Luis Obispo", "San Marcos", "San Mateo", "San Rafael", "San Ramon", "San Tan Valley", "Sandy", "Sandy Springs", "Sanford", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Fe", "Santa Maria", "Santa Monica", "Santa Rosa", "Santee", "Sarasota", "Savannah", "Sayreville", "Schaumburg", "Schenectady", "Scottsdale", "Scranton", "Seattle", "Severn", "Shawnee", "Sheboygan", "Shoreline", "Shreveport", "Sierra Vista", "Silver Spring", "Simi Valley", "Sioux City", "Sioux Falls", "Skokie", "Smyrna", "Somerville", "South Bend", "South Gate", "South Hill", "South Jordan", "South San Francisco", "South Valley", "South Whittier", "Southaven", "Southfield", "Sparks", "Spokane", "Spokane Valley", "Spring", "Spring Hill", "Spring Valley", "Springdale", "Springfield", "St. Charles", "St. Clair Shores", "St. Cloud", "St. George", "St. Joseph", "St. Louis", "St. Louis Park", "St. Paul", "St. Peters", "St. Petersburg", "Stamford", "State College", "Sterling Heights", "Stillwater", "Stockton", "Stratford", "Strongsville", "Suffolk", "Sugar Land", "Summerville", "Sunnyvale", "Sunrise", "Sunrise Manor", "Surprise", "Syracuse", "Tacoma", "Tallahassee", "Tamarac", "Tamiami", "Tampa", "Taunton", "Taylor", "Taylorsville", "Temecula", "Tempe", "Temple", "Terre Haute", "Texas City", "The Hammocks", "The Villages", "The Woodlands", "Thornton", "Thousand Oaks", "Tigard", "Tinley Park", "Titusville", "Toledo", "Toms River", "Tonawanda", "Topeka", "Torrance", "Town 'n' Country", "Towson", "Tracy", "Trenton", "Troy", "Trujillo Alto", "Tuckahoe", "Tucson", "Tulare", "Tulsa", "Turlock", "Tuscaloosa", "Tustin", "Twin Falls", "Tyler", "Union City", "University", "Upland", "Urbana", "Urbandale", "Utica", "Vacaville", "Valdosta", "Vallejo", "Vancouver", "Victoria", "Victorville", "Vineland", "Virginia Beach", "Visalia", "Vista", "Waco", "Waipahu", "Waldorf", "Walnut Creek", "Waltham", "Warner Robins", "Warren", "Warwick", "Washington", "Waterbury", "Waterloo", "Watsonville", "Waukegan", "Waukesha", "Wauwatosa", "Wellington", "Wesley Chapel", "West Allis", "West Babylon", "West Covina", "West Des Moines", "West Hartford", "West Haven", "West Jordan", "West Lafayette", "West New York", "West Palm Beach", "West Sacramento", "West Seneca", "West Valley City", "Westfield", "Westland", "Westminster", "Weston", "Weymouth Town", "Wheaton", "White Plains", "Whittier", "Wichita", "Wichita Falls", "Wilmington", "Wilson", "Winston-Salem", "Woodbury", "Woodland", "Worcester", "Wylie", "Wyoming", "Yakima", "Yonkers", "Yorba Linda", "York", "Youngstown", "Yuba City", "Yucaipa", "Yuma"];
var Fe = ["{{location.city_prefix}} {{person.first_name.generic}}{{location.city_suffix}}", "{{location.city_prefix}} {{person.first_name.generic}}", "{{person.first_name.generic}}{{location.city_suffix}}", "{{person.last_name.generic}}{{location.city_suffix}}", "{{location.city_name}}"];
var Ne = ["North", "East", "West", "South", "New", "Lake", "Port", "Fort"];
var Ee = ["town", "ton", "land", "ville", "berg", "burgh", "boro", "borough", "bury", "view", "port", "mouth", "stad", "stead", "furt", "chester", "cester", "fort", "field", "haven", "side", "shire", "worth"];
var Je = ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"];
var Ie = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (Chagos Archipelago)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Faroe Islands", "Falkland Islands (Malvinas)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Democratic People's Republic of Korea", "Republic of Korea", "Kuwait", "Kyrgyz Republic", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard & Jan Mayen Islands", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
var Ke = ["Adams County", "Calhoun County", "Carroll County", "Clark County", "Clay County", "Crawford County", "Douglas County", "Fayette County", "Franklin County", "Grant County", "Greene County", "Hamilton County", "Hancock County", "Henry County", "Jackson County", "Jefferson County", "Johnson County", "Lake County", "Lawrence County", "Lee County", "Lincoln County", "Logan County", "Madison County", "Marion County", "Marshall County", "Monroe County", "Montgomery County", "Morgan County", "Perry County", "Pike County", "Polk County", "Scott County", "Union County", "Warren County", "Washington County", "Wayne County", "Avon", "Bedfordshire", "Berkshire", "Borders", "Buckinghamshire", "Cambridgeshire", "Central", "Cheshire", "Cleveland", "Clwyd", "Cornwall", "County Antrim", "County Armagh", "County Down", "County Fermanagh", "County Londonderry", "County Tyrone", "Cumbria", "Derbyshire", "Devon", "Dorset", "Dumfries and Galloway", "Durham", "Dyfed", "East Sussex", "Essex", "Fife", "Gloucestershire", "Grampian", "Greater Manchester", "Gwent", "Gwynedd County", "Hampshire", "Herefordshire", "Hertfordshire", "Highlands and Islands", "Humberside", "Isle of Wight", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Lothian", "Merseyside", "Mid Glamorgan", "Norfolk", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Oxfordshire", "Powys", "Rutland", "Shropshire", "Somerset", "South Glamorgan", "South Yorkshire", "Staffordshire", "Strathclyde", "Suffolk", "Surrey", "Tayside", "Tyne and Wear", "Warwickshire", "West Glamorgan", "West Midlands", "West Sussex", "West Yorkshire", "Wiltshire", "Worcestershire"];
var Oe = { cardinal: ["North", "East", "South", "West"], cardinal_abbr: ["N", "E", "S", "W"], ordinal: ["Northeast", "Northwest", "Southeast", "Southwest"], ordinal_abbr: ["NE", "NW", "SE", "SW"] };
var xe = [{ name: "Afrikaans", alpha2: "af", alpha3: "afr" }, { name: "Azerbaijani", alpha2: "az", alpha3: "aze" }, { name: "Maldivian", alpha2: "dv", alpha3: "div" }, { name: "Farsi/Persian", alpha2: "fa", alpha3: "fas" }, { name: "Latvian", alpha2: "lv", alpha3: "lav" }, { name: "Indonesian", alpha2: "id", alpha3: "ind" }, { name: "Nepali", alpha2: "ne", alpha3: "nep" }, { name: "Thai", alpha2: "th", alpha3: "tha" }, { name: "Uzbek", alpha2: "uz", alpha3: "uzb" }, { name: "Yoruba", alpha2: "yo", alpha3: "yor" }, { name: "Pashto", alpha2: "ps", alpha3: "pus" }, { name: "English", alpha2: "en", alpha3: "eng" }, { name: "Urdu", alpha2: "ur", alpha3: "urd" }, { name: "German", alpha2: "de", alpha3: "deu" }, { name: "French", alpha2: "fr", alpha3: "fra" }, { name: "Spanish", alpha2: "es", alpha3: "spa" }, { name: "Italian", alpha2: "it", alpha3: "ita" }, { name: "Dutch", alpha2: "nl", alpha3: "nld" }, { name: "Russian", alpha2: "ru", alpha3: "rus" }, { name: "Portuguese", alpha2: "pt", alpha3: "por" }, { name: "Polish", alpha2: "pl", alpha3: "pol" }, { name: "Arabic", alpha2: "ar", alpha3: "ara" }, { name: "Japanese", alpha2: "ja", alpha3: "jpn" }, { name: "Chinese", alpha2: "zh", alpha3: "zho" }, { name: "Hindi", alpha2: "hi", alpha3: "hin" }, { name: "Bengali", alpha2: "bn", alpha3: "ben" }, { name: "Gujarati", alpha2: "gu", alpha3: "guj" }, { name: "Tamil", alpha2: "ta", alpha3: "tam" }, { name: "Telugu", alpha2: "te", alpha3: "tel" }, { name: "Punjabi", alpha2: "pa", alpha3: "pan" }, { name: "Vietnamese", alpha2: "vi", alpha3: "vie" }, { name: "Korean", alpha2: "ko", alpha3: "kor" }, { name: "Turkish", alpha2: "tr", alpha3: "tur" }, { name: "Swedish", alpha2: "sv", alpha3: "swe" }, { name: "Greek", alpha2: "el", alpha3: "ell" }, { name: "Czech", alpha2: "cs", alpha3: "ces" }, { name: "Hungarian", alpha2: "hu", alpha3: "hun" }, { name: "Romanian", alpha2: "ro", alpha3: "ron" }, { name: "Ukrainian", alpha2: "uk", alpha3: "ukr" }, { name: "Norwegian", alpha2: "no", alpha3: "nor" }, { name: "Serbian", alpha2: "sr", alpha3: "srp" }, { name: "Croatian", alpha2: "hr", alpha3: "hrv" }, { name: "Slovak", alpha2: "sk", alpha3: "slk" }, { name: "Slovenian", alpha2: "sl", alpha3: "slv" }, { name: "Icelandic", alpha2: "is", alpha3: "isl" }, { name: "Finnish", alpha2: "fi", alpha3: "fin" }, { name: "Danish", alpha2: "da", alpha3: "dan" }, { name: "Swahili", alpha2: "sw", alpha3: "swa" }, { name: "Bashkir", alpha2: "ba", alpha3: "bak" }, { name: "Basque", alpha2: "eu", alpha3: "eus" }, { name: "Catalan", alpha2: "ca", alpha3: "cat" }, { name: "Galician", alpha2: "gl", alpha3: "glg" }, { name: "Esperanto", alpha2: "eo", alpha3: "epo" }, { name: "Fijian", alpha2: "fj", alpha3: "fij" }, { name: "Malagasy", alpha2: "mg", alpha3: "mlg" }, { name: "Maltese", alpha2: "mt", alpha3: "mlt" }, { name: "Albanian", alpha2: "sq", alpha3: "sqi" }, { name: "Armenian", alpha2: "hy", alpha3: "hye" }, { name: "Georgian", alpha2: "ka", alpha3: "kat" }, { name: "Macedonian", alpha2: "mk", alpha3: "mkd" }, { name: "Kazakh", alpha2: "kk", alpha3: "kaz" }, { name: "Haitian Creole", alpha2: "ht", alpha3: "hat" }, { name: "Mongolian", alpha2: "mn", alpha3: "mon" }, { name: "Kyrgyz", alpha2: "ky", alpha3: "kir" }, { name: "Finnish", alpha2: "fi", alpha3: "fin" }, { name: "Tagalog", alpha2: "tl", alpha3: "tgl" }, { name: "Malay", alpha2: "ms", alpha3: "msa" }, { name: "Tajik", alpha2: "tg", alpha3: "tgk" }, { name: "Swati", alpha2: "ss", alpha3: "ssw" }, { name: "Tatar", alpha2: "tt", alpha3: "tat" }, { name: "Zulu", alpha2: "zu", alpha3: "zul" }];
var ze = ["#####", "#####-####"];
var Ve = ["Apt. ###", "Suite ###"];
var Ye = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var je = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
var qe = { normal: "{{location.buildingNumber}} {{location.street}}", full: "{{location.buildingNumber}} {{location.street}} {{location.secondaryAddress}}" };
var Ue = ["10th Street", "11th Street", "12th Street", "13th Street", "14th Street", "15th Street", "16th Street", "1st Avenue", "1st Street", "2nd Avenue", "2nd Street", "3rd Avenue", "3rd Street", "4th Avenue", "4th Street", "5th Avenue", "5th Street", "6th Avenue", "6th Street", "7th Avenue", "7th Street", "8th Avenue", "8th Street", "9th Street", "A Street", "Abbey Road", "Adams Avenue", "Adams Street", "Airport Road", "Albany Road", "Albert Road", "Albion Street", "Alexandra Road", "Alfred Street", "Alma Street", "Ash Close", "Ash Grove", "Ash Road", "Ash Street", "Aspen Close", "Atlantic Avenue", "Avenue Road", "Back Lane", "Baker Street", "Balmoral Road", "Barn Close", "Barton Road", "Bath Road", "Bath Street", "Bay Street", "Beach Road", "Bedford Road", "Beech Close", "Beech Drive", "Beech Grove", "Beech Road", "Beechwood Avenue", "Bell Lane", "Belmont Road", "Birch Avenue", "Birch Close", "Birch Grove", "Birch Road", "Blind Lane", "Bluebell Close", "Boundary Road", "Bramble Close", "Bramley Close", "Bridge Road", "Bridge Street", "Broad Lane", "Broad Street", "Broadway", "Broadway Avenue", "Broadway Street", "Brook Lane", "Brook Road", "Brook Street", "Brookside", "Buckingham Road", "Cambridge Street", "Canal Street", "Castle Close", "Castle Lane", "Castle Road", "Castle Street", "Cavendish Road", "Cedar Avenue", "Cedar Close", "Cedar Grove", "Cedar Road", "Cedar Street", "Cemetery Road", "Center Avenue", "Center Road", "Center Street", "Central Avenue", "Central Street", "Chapel Close", "Chapel Hill", "Chapel Road", "Chapel Street", "Charles Street", "Cherry Close", "Cherry Street", "Cherry Tree Close", "Chester Road", "Chestnut Close", "Chestnut Drive", "Chestnut Grove", "Chestnut Street", "Church Avenue", "Church Close", "Church Hill", "Church Lane", "Church Path", "Church Road", "Church Street", "Church View", "Church Walk", "Claremont Road", "Clarence Road", "Clarence Street", "Clarendon Road", "Clark Street", "Clay Lane", "Cleveland Street", "Cliff Road", "Clifton Road", "Clinton Street", "College Avenue", "College Street", "Columbia Avenue", "Commerce Street", "Commercial Road", "Commercial Street", "Common Lane", "Coronation Avenue", "Coronation Road", "County Line Road", "County Road", "Court Street", "Cow Lane", "Crescent Road", "Cromwell Road", "Cross Lane", "Cross Street", "Crown Street", "Cumberland Street", "Dale Street", "Dark Lane", "Davis Street", "Depot Street", "Derby Road", "Derwent Close", "Devonshire Road", "Division Street", "Douglas Road", "Duke Street", "E 10th Street", "E 11th Street", "E 12th Street", "E 14th Street", "E 1st Street", "E 2nd Street", "E 3rd Street", "E 4th Avenue", "E 4th Street", "E 5th Street", "E 6th Avenue", "E 6th Street", "E 7th Street", "E 8th Street", "E 9th Street", "E Bridge Street", "E Broad Street", "E Broadway", "E Broadway Street", "E Cedar Street", "E Center Street", "E Central Avenue", "E Church Street", "E Elm Street", "E Franklin Street", "E Front Street", "E Grand Avenue", "E High Street", "E Jackson Street", "E Jefferson Street", "E Main", "E Main Street", "E Maple Street", "E Market Street", "E North Street", "E Oak Street", "E Park Avenue", "E Pine Street", "E River Road", "E South Street", "E State Street", "E Union Street", "E Walnut Street", "E Washington Avenue", "E Washington Street", "E Water Street", "East Avenue", "East Road", "East Street", "Edward Street", "Elm Close", "Elm Grove", "Elm Road", "Elm Street", "Euclid Avenue", "Fairfield Road", "Farm Close", "Ferry Road", "Field Close", "Field Lane", "First Avenue", "First Street", "Fore Street", "Forest Avenue", "Forest Road", "Fourth Avenue", "Franklin Avenue", "Franklin Road", "Franklin Street", "Front Street", "Frontage Road", "Garden Close", "Garden Street", "George Street", "Gladstone Road", "Glebe Close", "Gloucester Road", "Gordon Road", "Gordon Street", "Grand Avenue", "Grange Avenue", "Grange Close", "Grange Road", "Grant Street", "Green Close", "Green Lane", "Green Street", "Greenville Road", "Greenway", "Greenwood Road", "Grove Lane", "Grove Road", "Grove Street", "Hall Lane", "Hall Street", "Harrison Avenue", "Harrison Street", "Hawthorn Avenue", "Hawthorn Close", "Hazel Close", "Hazel Grove", "Heath Road", "Heather Close", "Henry Street", "Heron Close", "Hickory Street", "High Road", "High Street", "Highfield Avenue", "Highfield Close", "Highfield Road", "Highland Avenue", "Hill Road", "Hill Street", "Hillside", "Hillside Avenue", "Hillside Close", "Hillside Road", "Holly Close", "Honeysuckle Close", "Howard Road", "Howard Street", "Jackson Avenue", "Jackson Street", "James Street", "Jefferson Avenue", "Jefferson Street", "Johnson Street", "Jubilee Close", "Juniper Close", "Kent Road", "Kestrel Close", "King Street", "King's Road", "Kingfisher Close", "Kings Highway", "Kingsway", "Laburnum Grove", "Lafayette Street", "Lake Avenue", "Lake Drive", "Lake Road", "Lake Street", "Lancaster Road", "Lansdowne Road", "Larch Close", "Laurel Close", "Lawrence Street", "Lee Street", "Liberty Street", "Lime Grove", "Lincoln Avenue", "Lincoln Highway", "Lincoln Road", "Lincoln Street", "Locust Street", "Lodge Close", "Lodge Lane", "London Road", "Long Lane", "Low Road", "Madison Avenue", "Madison Street", "Main", "Main Avenue", "Main Road", "Main Street", "Main Street E", "Main Street N", "Main Street S", "Main Street W", "Manchester Road", "Manor Close", "Manor Drive", "Manor Gardens", "Manor Road", "Manor Way", "Maple Avenue", "Maple Close", "Maple Drive", "Maple Road", "Maple Street", "Market Place", "Market Square", "Market Street", "Marlborough Road", "Marsh Lane", "Martin Luther King Boulevard", "Martin Luther King Drive", "Martin Luther King Jr Boulevard", "Mary Street", "Mayfield Road", "Meadow Close", "Meadow Drive", "Meadow Lane", "Meadow View", "Meadow Way", "Memorial Drive", "Middle Street", "Mill Close", "Mill Lane", "Mill Road", "Mill Street", "Milton Road", "Milton Street", "Monroe Street", "Moor Lane", "Moss Lane", "Mount Pleasant", "Mount Street", "Mulberry Street", "N 1st Street", "N 2nd Street", "N 3rd Street", "N 4th Street", "N 5th Street", "N 6th Street", "N 7th Street", "N 8th Street", "N 9th Street", "N Bridge Street", "N Broad Street", "N Broadway", "N Broadway Street", "N Cedar Street", "N Center Street", "N Central Avenue", "N Chestnut Street", "N Church Street", "N College Street", "N Court Street", "N Division Street", "N East Street", "N Elm Street", "N Franklin Street", "N Front Street", "N Harrison Street", "N High Street", "N Jackson Street", "N Jefferson Street", "N Lincoln Street", "N Locust Street", "N Main", "N Main Avenue", "N Main Street", "N Maple Street", "N Market Street", "N Monroe Street", "N Oak Street", "N Park Street", "N Pearl Street", "N Pine Street", "N Poplar Street", "N Railroad Street", "N State Street", "N Union Street", "N Walnut Street", "N Washington Avenue", "N Washington Street", "N Water Street", "Nelson Road", "Nelson Street", "New Lane", "New Road", "New Street", "Newton Road", "Nightingale Close", "Norfolk Road", "North Avenue", "North Lane", "North Road", "North Street", "Northfield Road", "Oak Avenue", "Oak Drive", "Oak Lane", "Oak Road", "Oak Street", "Oakfield Road", "Oaklands", "Old Lane", "Old Military Road", "Old Road", "Old State Road", "Orchard Drive", "Orchard Lane", "Orchard Road", "Orchard Street", "Oxford Road", "Oxford Street", "Park Avenue", "Park Crescent", "Park Drive", "Park Lane", "Park Place", "Park Road", "Park Street", "Park View", "Parkside", "Pearl Street", "Pennsylvania Avenue", "Pine Close", "Pine Grove", "Pine Street", "Pinfold Lane", "Pleasant Street", "Poplar Avenue", "Poplar Close", "Poplar Road", "Poplar Street", "Post Road", "Pound Lane", "Princes Street", "Princess Street", "Priory Close", "Priory Road", "Prospect Avenue", "Prospect Place", "Prospect Road", "Prospect Street", "Quarry Lane", "Quarry Road", "Queen's Road", "Railroad Avenue", "Railroad Street", "Railway Street", "Rectory Close", "Rectory Lane", "Richmond Close", "Richmond Road", "Ridge Road", "River Road", "River Street", "Riverside", "Riverside Avenue", "Riverside Drive", "Roman Road", "Roman Way", "Rowan Close", "Russell Street", "S 10th Street", "S 14th Street", "S 1st Avenue", "S 1st Street", "S 2nd Street", "S 3rd Street", "S 4th Street", "S 5th Street", "S 6th Street", "S 7th Street", "S 8th Street", "S 9th Street", "S Bridge Street", "S Broad Street", "S Broadway", "S Broadway Street", "S Center Street", "S Central Avenue", "S Chestnut Street", "S Church Street", "S College Street", "S Division Street", "S East Street", "S Elm Street", "S Franklin Street", "S Front Street", "S Grand Avenue", "S High Street", "S Jackson Street", "S Jefferson Street", "S Lincoln Street", "S Main", "S Main Avenue", "S Main Street", "S Maple Street", "S Market Street", "S Mill Street", "S Monroe Street", "S Oak Street", "S Park Street", "S Pine Street", "S Railroad Street", "S State Street", "S Union Street", "S Walnut Street", "S Washington Avenue", "S Washington Street", "S Water Street", "S West Street", "Salisbury Road", "Sandringham Road", "Sandy Lane", "School Close", "School Lane", "School Road", "School Street", "Second Avenue", "Silver Street", "Skyline Drive", "Smith Street", "Somerset Road", "South Avenue", "South Drive", "South Road", "South Street", "South View", "Spring Gardens", "Spring Street", "Springfield Close", "Springfield Road", "Spruce Street", "St Andrew's Road", "St Andrews Close", "St George's Road", "St John's Road", "St Mary's Close", "St Mary's Road", "Stanley Road", "Stanley Street", "State Avenue", "State Line Road", "State Road", "State Street", "Station Road", "Station Street", "Stoney Lane", "Sycamore Avenue", "Sycamore Close", "Sycamore Drive", "Sycamore Street", "Talbot Road", "Tennyson Road", "The Avenue", "The Beeches", "The Causeway", "The Chase", "The Coppice", "The Copse", "The Crescent", "The Croft", "The Dell", "The Drive", "The Fairway", "The Glebe", "The Grange", "The Green", "The Grove", "The Hawthorns", "The Lane", "The Laurels", "The Limes", "The Maltings", "The Meadows", "The Mews", "The Mount", "The Oaks", "The Orchard", "The Oval", "The Paddock", "The Paddocks", "The Poplars", "The Ridgeway", "The Ridings", "The Rise", "The Sidings", "The Spinney", "The Square", "The Willows", "The Woodlands", "Third Avenue", "Third Street", "Tower Road", "Trinity Road", "Tudor Close", "Union Avenue", "Union Street", "University Avenue", "University Drive", "Valley Road", "Veterans Memorial Drive", "Veterans Memorial Highway", "Vicarage Close", "Vicarage Lane", "Vicarage Road", "Victoria Place", "Victoria Road", "Victoria Street", "Vine Street", "W 10th Street", "W 11th Street", "W 12th Street", "W 14th Street", "W 1st Street", "W 2nd Street", "W 3rd Street", "W 4th Avenue", "W 4th Street", "W 5th Street", "W 6th Avenue", "W 6th Street", "W 7th Street", "W 8th Street", "W 9th Street", "W Bridge Street", "W Broad Street", "W Broadway", "W Broadway Avenue", "W Broadway Street", "W Center Street", "W Central Avenue", "W Chestnut Street", "W Church Street", "W Division Street", "W Elm Street", "W Franklin Street", "W Front Street", "W Grand Avenue", "W High Street", "W Jackson Street", "W Jefferson Street", "W Lake Street", "W Main", "W Main Street", "W Maple Street", "W Market Street", "W Monroe Street", "W North Street", "W Oak Street", "W Park Street", "W Pine Street", "W River Road", "W South Street", "W State Street", "W Union Street", "W Walnut Street", "W Washington Avenue", "W Washington Street", "Walnut Close", "Walnut Street", "Warren Close", "Warren Road", "Washington Avenue", "Washington Boulevard", "Washington Road", "Washington Street", "Water Lane", "Water Street", "Waterloo Road", "Waterside", "Watery Lane", "Waverley Road", "Well Lane", "Wellington Road", "Wellington Street", "West Avenue", "West End", "West Lane", "West Road", "West Street", "West View", "Western Avenue", "Western Road", "Westfield Road", "Westgate", "William Street", "Willow Close", "Willow Drive", "Willow Grove", "Willow Road", "Willow Street", "Windermere Road", "Windmill Close", "Windmill Lane", "Windsor Avenue", "Windsor Close", "Windsor Drive", "Wood Lane", "Wood Street", "Woodland Close", "Woodland Road", "Woodlands", "Woodlands Avenue", "Woodlands Close", "Woodlands Road", "Woodside", "Woodside Road", "Wren Close", "Yew Tree Close", "York Road", "York Street"];
var Ze = ["{{person.first_name.generic}} {{location.street_suffix}}", "{{person.last_name.generic}} {{location.street_suffix}}", "{{location.street_name}}"];
var _e = ["Alley", "Avenue", "Branch", "Bridge", "Brook", "Brooks", "Burg", "Burgs", "Bypass", "Camp", "Canyon", "Cape", "Causeway", "Center", "Centers", "Circle", "Circles", "Cliff", "Cliffs", "Club", "Common", "Corner", "Corners", "Course", "Court", "Courts", "Cove", "Coves", "Creek", "Crescent", "Crest", "Crossing", "Crossroad", "Curve", "Dale", "Dam", "Divide", "Drive", "Drives", "Estate", "Estates", "Expressway", "Extension", "Extensions", "Fall", "Falls", "Ferry", "Field", "Fields", "Flat", "Flats", "Ford", "Fords", "Forest", "Forge", "Forges", "Fork", "Forks", "Fort", "Freeway", "Garden", "Gardens", "Gateway", "Glen", "Glens", "Green", "Greens", "Grove", "Groves", "Harbor", "Harbors", "Haven", "Heights", "Highway", "Hill", "Hills", "Hollow", "Inlet", "Island", "Islands", "Isle", "Junction", "Junctions", "Key", "Keys", "Knoll", "Knolls", "Lake", "Lakes", "Land", "Landing", "Lane", "Light", "Lights", "Loaf", "Lock", "Locks", "Lodge", "Loop", "Mall", "Manor", "Manors", "Meadow", "Meadows", "Mews", "Mill", "Mills", "Mission", "Motorway", "Mount", "Mountain", "Mountains", "Neck", "Orchard", "Oval", "Overpass", "Park", "Parks", "Parkway", "Parkways", "Pass", "Passage", "Path", "Pike", "Pine", "Pines", "Place", "Plain", "Plains", "Plaza", "Point", "Points", "Port", "Ports", "Prairie", "Radial", "Ramp", "Ranch", "Rapid", "Rapids", "Rest", "Ridge", "Ridges", "River", "Road", "Roads", "Route", "Row", "Rue", "Run", "Shoal", "Shoals", "Shore", "Shores", "Skyway", "Spring", "Springs", "Spur", "Spurs", "Square", "Squares", "Station", "Stravenue", "Stream", "Street", "Streets", "Summit", "Terrace", "Throughway", "Trace", "Track", "Trafficway", "Trail", "Tunnel", "Turnpike", "Underpass", "Union", "Unions", "Valley", "Valleys", "Via", "Viaduct", "View", "Views", "Village", "Villages", "Ville", "Vista", "Walk", "Walks", "Wall", "Way", "Ways", "Well", "Wells"];
var ur = { building_number: We, city_name: Ge, city_pattern: Fe, city_prefix: Ne, city_suffix: Ee, continent: Je, country: Ie, county: Ke, direction: Oe, language: xe, postcode: ze, secondary_address: Ve, state: Ye, state_abbr: je, street_address: qe, street_name: Ue, street_pattern: Ze, street_suffix: _e };
var Qe = ur;
var Xe = ["a", "ab", "abbas", "abduco", "abeo", "abscido", "absconditus", "absens", "absorbeo", "absque", "abstergo", "absum", "abundans", "abutor", "accedo", "accendo", "acceptus", "accommodo", "accusamus", "accusantium", "accusator", "acer", "acerbitas", "acervus", "acidus", "acies", "acquiro", "acsi", "ad", "adamo", "adaugeo", "addo", "adduco", "ademptio", "adeo", "adeptio", "adfectus", "adfero", "adficio", "adflicto", "adhaero", "adhuc", "adicio", "adimpleo", "adinventitias", "adipisci", "adipiscor", "adiuvo", "administratio", "admiratio", "admitto", "admoneo", "admoveo", "adnuo", "adopto", "adsidue", "adstringo", "adsuesco", "adsum", "adulatio", "adulescens", "aduro", "advenio", "adversus", "advoco", "aedificium", "aeger", "aegre", "aegrotatio", "aegrus", "aeneus", "aequitas", "aequus", "aer", "aestas", "aestivus", "aestus", "aetas", "aeternus", "ager", "aggero", "aggredior", "agnitio", "agnosco", "ago", "ait", "aiunt", "alias", "alienus", "alii", "alioqui", "aliqua", "aliquam", "aliquid", "alius", "allatus", "alo", "alter", "altus", "alveus", "amaritudo", "ambitus", "ambulo", "amet", "amicitia", "amiculum", "amissio", "amita", "amitto", "amo", "amor", "amoveo", "amplexus", "amplitudo", "amplus", "ancilla", "angelus", "angulus", "angustus", "animadverto", "animi", "animus", "annus", "anser", "ante", "antea", "antepono", "antiquus", "aperiam", "aperio", "aperte", "apostolus", "apparatus", "appello", "appono", "appositus", "approbo", "apto", "aptus", "apud", "aqua", "ara", "aranea", "arbitro", "arbor", "arbustum", "arca", "arceo", "arcesso", "architecto", "arcus", "argentum", "argumentum", "arguo", "arma", "armarium", "aro", "ars", "articulus", "artificiose", "arto", "arx", "ascisco", "ascit", "asper", "asperiores", "aspernatur", "aspicio", "asporto", "assentator", "assumenda", "astrum", "at", "atavus", "ater", "atque", "atqui", "atrocitas", "atrox", "attero", "attollo", "attonbitus", "auctor", "auctus", "audacia", "audax", "audentia", "audeo", "audio", "auditor", "aufero", "aureus", "aurum", "aut", "autem", "autus", "auxilium", "avaritia", "avarus", "aveho", "averto", "baiulus", "balbus", "barba", "bardus", "basium", "beatae", "beatus", "bellicus", "bellum", "bene", "beneficium", "benevolentia", "benigne", "bestia", "bibo", "bis", "blandior", "blanditiis", "bonus", "bos", "brevis", "cado", "caecus", "caelestis", "caelum", "calamitas", "calcar", "calco", "calculus", "callide", "campana", "candidus", "canis", "canonicus", "canto", "capillus", "capio", "capitulus", "capto", "caput", "carbo", "carcer", "careo", "caries", "cariosus", "caritas", "carmen", "carpo", "carus", "casso", "caste", "casus", "catena", "caterva", "cattus", "cauda", "causa", "caute", "caveo", "cavus", "cedo", "celebrer", "celer", "celo", "cena", "cenaculum", "ceno", "censura", "centum", "cerno", "cernuus", "certe", "certus", "cervus", "cetera", "charisma", "chirographum", "cibo", "cibus", "cicuta", "cilicium", "cimentarius", "ciminatio", "cinis", "circumvenio", "cito", "civis", "civitas", "clam", "clamo", "claro", "clarus", "claudeo", "claustrum", "clementia", "clibanus", "coadunatio", "coaegresco", "coepi", "coerceo", "cogito", "cognatus", "cognomen", "cogo", "cohaero", "cohibeo", "cohors", "colligo", "collum", "colo", "color", "coma", "combibo", "comburo", "comedo", "comes", "cometes", "comis", "comitatus", "commemoro", "comminor", "commodi", "commodo", "communis", "comparo", "compello", "complectus", "compono", "comprehendo", "comptus", "conatus", "concedo", "concido", "conculco", "condico", "conduco", "confero", "confido", "conforto", "confugo", "congregatio", "conicio", "coniecto", "conitor", "coniuratio", "conor", "conqueror", "conscendo", "consectetur", "consequatur", "consequuntur", "conservo", "considero", "conspergo", "constans", "consuasor", "contabesco", "contego", "contigo", "contra", "conturbo", "conventus", "convoco", "copia", "copiose", "cornu", "corona", "corporis", "corpus", "correptius", "corrigo", "corroboro", "corrumpo", "corrupti", "coruscus", "cotidie", "crapula", "cras", "crastinus", "creator", "creber", "crebro", "credo", "creo", "creptio", "crepusculum", "cresco", "creta", "cribro", "crinis", "cruciamentum", "crudelis", "cruentus", "crur", "crustulum", "crux", "cubicularis", "cubitum", "cubo", "cui", "cuius", "culpa", "culpo", "cultellus", "cultura", "cum", "cumque", "cunabula", "cunae", "cunctatio", "cupiditas", "cupiditate", "cupio", "cuppedia", "cupressus", "cur", "cura", "curatio", "curia", "curiositas", "curis", "curo", "curriculum", "currus", "cursim", "curso", "cursus", "curto", "curtus", "curvo", "custodia", "damnatio", "damno", "dapifer", "debeo", "debilito", "debitis", "decens", "decerno", "decet", "decimus", "decipio", "decor", "decretum", "decumbo", "dedecor", "dedico", "deduco", "defaeco", "defendo", "defero", "defessus", "defetiscor", "deficio", "defleo", "defluo", "defungo", "degenero", "degero", "degusto", "deinde", "delectatio", "delectus", "delego", "deleniti", "deleo", "delibero", "delicate", "delinquo", "deludo", "demens", "demergo", "demitto", "demo", "demonstro", "demoror", "demulceo", "demum", "denego", "denique", "dens", "denuncio", "denuo", "deorsum", "depereo", "depono", "depopulo", "deporto", "depraedor", "deprecator", "deprimo", "depromo", "depulso", "deputo", "derelinquo", "derideo", "deripio", "deserunt", "desidero", "desino", "desipio", "desolo", "desparatus", "despecto", "dicta", "dignissimos", "distinctio", "dolor", "dolore", "dolorem", "doloremque", "dolores", "doloribus", "dolorum", "ducimus", "ea", "eaque", "earum", "eius", "eligendi", "enim", "eos", "error", "esse", "est", "et", "eum", "eveniet", "ex", "excepturi", "exercitationem", "expedita", "explicabo", "facere", "facilis", "fuga", "fugiat", "fugit", "harum", "hic", "id", "illo", "illum", "impedit", "in", "incidunt", "infit", "inflammatio", "inventore", "ipsa", "ipsam", "ipsum", "iste", "itaque", "iure", "iusto", "labore", "laboriosam", "laborum", "laudantium", "libero", "magnam", "magni", "maiores", "maxime", "minima", "minus", "modi", "molestiae", "molestias", "mollitia", "nam", "natus", "necessitatibus", "nemo", "neque", "nesciunt", "nihil", "nisi", "nobis", "non", "nostrum", "nulla", "numquam", "occaecati", "ocer", "odio", "odit", "officia", "officiis", "omnis", "optio", "paens", "pariatur", "patior", "patria", "patrocinor", "patruus", "pauci", "paulatim", "pauper", "pax", "peccatus", "pecco", "pecto", "pectus", "pecus", "peior", "pel", "perferendis", "perspiciatis", "placeat", "porro", "possimus", "praesentium", "provident", "quae", "quaerat", "quam", "quas", "quasi", "qui", "quia", "quibusdam", "quidem", "quis", "quisquam", "quo", "quod", "quos", "ratione", "recusandae", "reiciendis", "rem", "repellat", "repellendus", "reprehenderit", "repudiandae", "rerum", "saepe", "sapiente", "sed", "sequi", "similique", "sint", "sit", "socius", "sodalitas", "sol", "soleo", "solio", "solitudo", "solium", "sollers", "sollicito", "solum", "solus", "soluta", "solutio", "solvo", "somniculosus", "somnus", "sonitus", "sono", "sophismata", "sopor", "sordeo", "sortitus", "spargo", "speciosus", "spectaculum", "speculum", "sperno", "spero", "spes", "spiculum", "spiritus", "spoliatio", "sponte", "stabilis", "statim", "statua", "stella", "stillicidium", "stipes", "stips", "sto", "strenuus", "strues", "studio", "stultus", "suadeo", "suasoria", "sub", "subito", "subiungo", "sublime", "subnecto", "subseco", "substantia", "subvenio", "succedo", "succurro", "sufficio", "suffoco", "suffragium", "suggero", "sui", "sulum", "sum", "summa", "summisse", "summopere", "sumo", "sumptus", "sunt", "supellex", "super", "suppellex", "supplanto", "suppono", "supra", "surculus", "surgo", "sursum", "suscipio", "suscipit", "suspendo", "sustineo", "suus", "synagoga", "tabella", "tabernus", "tabesco", "tabgo", "tabula", "taceo", "tactus", "taedium", "talio", "talis", "talus", "tam", "tamdiu", "tamen", "tametsi", "tamisium", "tamquam", "tandem", "tantillus", "tantum", "tardus", "tego", "temeritas", "temperantia", "templum", "tempora", "tempore", "temporibus", "temptatio", "tempus", "tenax", "tendo", "teneo", "tener", "tenetur", "tenuis", "tenus", "tepesco", "tepidus", "ter", "terebro", "teres", "terga", "tergeo", "tergiversatio", "tergo", "tergum", "termes", "terminatio", "tero", "terra", "terreo", "territo", "terror", "tersus", "tertius", "testimonium", "texo", "textilis", "textor", "textus", "thalassinus", "theatrum", "theca", "thema", "theologus", "thermae", "thesaurus", "thesis", "thorax", "thymbra", "thymum", "tibi", "timidus", "timor", "titulus", "tolero", "tollo", "tondeo", "tonsor", "torqueo", "torrens", "tot", "totam", "totidem", "toties", "totus", "tracto", "trado", "traho", "trans", "tredecim", "tremo", "trepide", "tres", "tribuo", "tricesimus", "triduana", "tripudio", "tristis", "triumphus", "trucido", "truculenter", "tubineus", "tui", "tum", "tumultus", "tunc", "turba", "turbo", "turpis", "tutamen", "tutis", "tyrannus", "uberrime", "ubi", "ulciscor", "ullam", "ullus", "ulterius", "ultio", "ultra", "umbra", "umerus", "umquam", "una", "unde", "undique", "universe", "unus", "urbanus", "urbs", "uredo", "usitas", "usque", "ustilo", "ustulo", "usus", "ut", "uter", "uterque", "utilis", "utique", "utor", "utpote", "utrimque", "utroque", "utrum", "uxor", "vaco", "vacuus", "vado", "vae", "valde", "valens", "valeo", "valetudo", "validus", "vallum", "vapulus", "varietas", "varius", "vehemens", "vel", "velit", "velociter", "velum", "velut", "venia", "veniam", "venio", "ventito", "ventosus", "ventus", "venustas", "ver", "verbera", "verbum", "vere", "verecundia", "vereor", "vergo", "veritas", "veritatis", "vero", "versus", "verto", "verumtamen", "verus", "vesco", "vesica", "vesper", "vespillo", "vester", "vestigium", "vestrum", "vetus", "via", "vicinus", "vicissitudo", "victoria", "victus", "videlicet", "video", "viduo", "vigilo", "vigor", "vilicus", "vilis", "vilitas", "villa", "vinco", "vinculum", "vindico", "vinitor", "vinum", "vir", "virga", "virgo", "viridis", "viriliter", "virtus", "vis", "viscus", "vita", "vitae", "vitiosus", "vitium", "vito", "vivo", "vix", "vobis", "vociferor", "voco", "volaticus", "volo", "volubilis", "voluntarius", "volup", "voluptas", "voluptate", "voluptatem", "voluptates", "voluptatibus", "voluptatum", "volutabrum", "volva", "vomer", "vomica", "vomito", "vorago", "vorax", "voro", "vos", "votum", "voveo", "vox", "vulariter", "vulgaris", "vulgivagus", "vulgo", "vulgus", "vulnero", "vulnus", "vulpes", "vulticulus", "xiphias"];
var cr = { word: Xe };
var $e = cr;
var mr = { title: "English", code: "en", language: "en", endonym: "English", dir: "ltr", script: "Latn" };
var ea = mr;
var aa = ['"Awaken, My Love!"', "(What's The Story) Morning Glory?", "- Tragedy +", "13 Reasons Why (Season 3)", "21st Century Breakdown", "30 De Febrero", "432 Hz Deep Healing", "5-Star", "528 Hz Meditation Music", "54+1", "8 Mile", "808s & Heartbreak", "9 To 5 And Odd Jobs", "A Beautiful Lie", "A Day At The Races", "A Day Without Rain", "A Fever You Can't Sweat Out", "A Gangsta's Pain", "A Gift & A Curse", "A Hard Day's Night", "A Head Full Of Dreams", "A Kind Of Magic", "A Million Ways To Murder", "A Moment Apart", "A Song For Every Moon", "A Thousand Suns", "A Winter Romance", "ABBA", "AI YoungBoy", "AJ Tracey", "Act One", "After Hours", "Agent Provocateur", "All About You", "All I Know So Far: Setlist", "All Or Nothing", "All Out", "All Over The Place", "All Stand Together", "All The Lost Souls", "All The Things I Never Said", "All Things Must Pass", "Alleen", "Alright, Still", "Alta Suciedad", "America", "American Heartbreak", "American Teen", "And Justice For None", "Animal Songs", "Another Friday Night", "Anything Goes", "Ao Vivo Em S\xE3o Paulo", "Ao Vivo No Ibirapuera", "Apricot Princess", "Aqui E Agora (Ao Vivo)", "Arcane League Of Legends", "Ardipithecus", "Aretha Now", "Around The Fur", "Arrival", "Artist 2.0", "As She Pleases", "Ascend", "Ashlyn", "Astro Lounge", "At Night, Alone.", "At. Long. Last. ASAP", "Atlas", "Audioslave", "Aura", "Austin", "Awake", "Away From The Sun", "Ayayay!", "Baby On Baby", "Back For Everything", "Back From The Edge", "Back In Black", "Back To Black", "Back To The Game", "Bad", "Bah\xEDa Ducati", "Baila", "Barbie The Album", "Battleground", "Bayou Country", "Bcos U Will Never B Free", "Be", "Be Here Now", "Beautiful Mind", "Beautiful Thugger Girls", "Beautiful Trauma", "Beauty And The Beast", "Beggars Banquet", "Being Funny In A Foreign Language", "Berlin Lebt", "Berry Is On Top", "Best White Noise For Baby Sleep - Loopable With No Fade", "Big Baby DRAM", "Bigger, Better, Faster, More!", "Billy Talent II", "Black Star Elephant", "Blackout", "Blank Face LP", "Bleach", "Blizzard Of Ozz", "Blonde", "Blood Sugar Sex Magik", "Bloom", "Blowin' Your Mind!", "Blu Celeste", "Blue", "Blue Banisters", "Blue Hawaii", "Blue Neighbourhood", "Bluebird Days", "Bobby Tarantino", "Bobby Tarantino II", "Bon Iver", "Born Pink", "Born To Run", "Brand New Eyes", "Break The Cycle", "Breakfast In America", "Breakthrough", "Brett Young", "Bridge Over Troubled Water", "Bright: The Album", "Brol", "Buds", "Buena Vista Social Club", "Built On Glass", "Bury Me At Makeout Creek", "Busyhead", "By The Way", "CB6", "CNCO", "California Sunrise", "Californication", "Call Me Irresponsible", "Calm", "Camino Palmero", "Camp", "Caracal", "Carbon Fiber Hits", "Carnival", "Carry On", "Cartel De Santa", "Certified Lover Boy", "Chaaama", "Chama Meu Nome", "Chapter 1: Snake Oil", "Chapter 2: Swamp Savant", "Chapter One", "Charlie's Angels", "Cherry Bomb", "Chief", "Chocolate Factory", "Chosen", "Chris Brown", "Christina Aguilera", "Chromatica", "Church", "City Of Evil", "Clandestino", "Clouds", "Coco", "Collision Course", "Colour Vision", "Combat Rock", "Come Around Sundown", "Come Away With Me", "Come Home The Kids Miss You", "Come What(ever) May", "Commando", "Common Sense", "Communion", "Conditions", "Confident", "Confrontation", "Control The Streets, Volume 2", "Corinne Bailey Rae", "Costello Music", "Cottonwood", "Covers, Vol. 2", "Cozy Tapes Vol. 2: Too Cozy", "Crash Talk", "Crazy Love", "Crazysexycool", "Crowded House", "Cruisin' With Junior H", "Culture", "Current Mood", "DS2", "Dale", "Danger Days: The True Lives Of The Fabulous Killjoys", "Dangerous Woman", "Dangerous: The Double Album", "Dark Horse", "Day69", "Daydream", "De Fiesta", "De Viaje", "DeAnn", "Death Race For Love", "Delirium", "Delta", "Demidevil", "Depression Cherry", "Descendants", "Desgenerados Mixtape", "Destin", "Destiny Fulfilled", "Desvelado", "Detroit 2", "Dex Meets Dexter", "Dharma", "Die A Legend", "Different World", "Dig Your Roots", "Digital Druglord", "Dirt", "Disclaimer I / II", "Discovery", "Disraeli Gears", "Disumano", "Dizzy Up The Girl", "Don't Play That Song", "Donda", "Donde Quiero Estar", "Doo-Wops & Hooligans", "Down The Way", "Dr. Feelgood", "Dream Your Life Away", "Dreaming Out Loud", "Drip Harder", "Drive", "Drones", "Dropped Outta College", "Drowning", "Dua Warna Cinta", "Dulce Beat", "Dusty In Memphis", "Dutty Rock", "Dying To Live", "ENR", "East Atlanta Love Letter", "Editorial", "Edna", "El Abayarde", "El Amor En Los Tiempos Del Perreo", "El Camino", "El Comienzo", "El Dorado", "El Karma", "El Mal Querer", "El Malo", "El Trabajo Es La Suerte", "El Viaje De Copperpot", "Electric Ladyland", "Emotion", "En Tus Planes", "Endless Summer Vacation", "Enter The Wu-Tang (36 Chambers)", "Equals (=)", "Estrella", "Euphoria", "Europop", "Evermore", "Every Kingdom", "Everyday Life", "Evolve", "Expectations", "Face Yourself", "Facelift", "Fallin'", "Fancy You", "Fantas\xEDa", "Favourite Worst Nightmare", "Fear Of The Dark", "Fearless", "Feel Something", "Feels Like Home", "Femme Fatale", "Ferxxocalipsis", "Fifty Shades Darker", "Fifty Shades Freed", "Fifty Shades Of Grey", "Final (Vol.1)", "Finding Beauty In Negative Spaces", "Fine Line", "First Impressions Of Earth", "First Steps", "Five Seconds Flat", "Folklore", "For Emma, Forever Ago", "Forajido EP 1", "Forever", "Forever Young", "Formula Of Love: O+T=<3", "Free 6lack", "Freudian", "Frozen II", "Full Moon Fever", "Funhouse", "Funk Wav Bounces Vol.1", "Future History", "FutureSex/LoveSounds", "Fuzzybrain", "Gallery", "Gangsta's Paradise", "Gemini", "Gemini Rights", "Generationwhy", "Get A Grip", "Get Up", "Gettin' Old", "Girl", "Gladiator", "Glisten", "Globalization", "Gloria", "Glory Days", "God's Project", "Gold Skies", "Golden", "Good Evening", "Good Thing", "Goodbye Yellow Brick Road", "Gossip Columns", "Got Your Six", "Graceland", "Graduation", "Grand Champ", "Grandson, Vol. 1", "Green River", "Guerra", "Ha*Ash Primera Fila - Hecho Realidad", "Haiz", "Hamilton", "Happy Endings", "Harry Styles", "Hasta La Ra\xEDz", "Hatful Of Hollow", "Head In The Clouds", "Heard It In A Past Life", "Heart Shaped World", "Heartbeat City", "Heartbreak On A Full Moon / Cuffing Season - 12 Days Of Christmas", "Heaven Or Hell", "Heaven knows", "Hellbilly Deluxe", "Hellboy", "Help!", "Her Loss", "Here Comes The Cowboy", "Hey World", "High School Musical", "High Tide In The Snake's Nest", "Historias De Un Capricornio", "Hndrxx", "Hombres G (Devu\xE9lveme A Mi Chica)", "Homerun", "Homework", "Hot Fuss", "Hot Pink", "Hot Sauce / Hello Future", "Hot Space", "Hotel Diablo", "Houses Of The Holy", "How Big, How Blue, How Beautiful", "How I'm Feeling", "How To Be Human", "How To Save A Life", "How To: Friend, Love, Freefall", "Hozier", "Human", "Huncho Jack, Jack Huncho", "Hunter Hayes", "Hysteria", "I Am...Sasha Fierce", "I Can't Handle Change", "I Met You When I Was 18. (The Playlist)", "I Never Liked You", "I Never Loved A Man The Way I Love You", "I See You", "I Think You Think Too Much Of Me", "I Used To Know Her", "I Used To Think I Could Fly", "I'm Comin' Over", "Ich & Keine Maske", "If You Can Believe Your Eyes & Ears", "Il Ballo Della Vita", "Ill Communication", "Imagination & The Misfit Kid", "Imagine", "Immortalized", "In A Perfect World...", "In Colour", "In My Own Words", "In Rainbows", "In Return", "In The Lonely Hour", "Infest", "Innuendo", "Inter Shibuya - La Mafia", "Interstellar", "Is This It", "It Was Written", "It's Not Me, It's You", "It's Only Me", "Ivory", "JackBoys", "Jamie", "Jazz", "Jibrail & Iblis", "Jordi", "Jordin Sparks", "Jose", "Just As I Am", "Just Cause Y'all Waited 2", "Just Like You", "Justified", "K-12 / After School", "K.I.D.S.", "K.O.", "K.O.B. Live", "KG0516", "KOD", "Kane Brown", "Kid A", "Kid Krow", "Kids See Ghosts", "Kids in Love", "Kinks (You Really Got Me)", "Know-It-All", "Konvicted", "Kring", "LANY", "LM5", "La Criatura", "La Flaca", "La Melodia De La Calle", "La Revolucion", "Lady Lady", "Lady Wood", "Langit Mong Bughaw", "Las Que No Iban A Salir", "Last Day Of Summer", "Last Year Was Complicated", "Layers", "Layover", "Lazarus", "Led Zeppelin", "Left Of The Middle", "Leftoverture", "Legends Never Die", "Let's Skip To The Wedding", "Let's Talk About Love", "Licensed To Ill", "Life In Cartoon Motion", "Life Thru A Lens", "Lifelines", "Like..?", "Lil Big Pac", "Lil Boat", "Lil Boat 2", "Lil Boat 3.5", "Lil Kiwi", "Lil Pump", "Limon Y Sal", "Listen Without Prejudice", "Little Voice", "Live On Red Barn Radio I & II", "Lo Que And\xE1bamos Buscando", "Lofi Fruits Music 2021", "London Calling", "Los Campeones Del Pueblo", "Los Extraterrestres", "Los Favoritos 2", "Lost", "Lost In Love", "Loud", "Love Sick", "Love Story", "Love Stuff", "Love Yourself: Tear", "Lover", "Luca Brasi 2: Gangsta Grillz", "Lust For Life", "Luv Is Rage", "M!ssundaztood", "Ma Fleur", "Made In Lagos", "Mafia Bidness", "Magazines Or Novels", "Mainstream Sellout", "Majestic", "Make It Big", "Make Yourself", "Making Mirrors", "Mamma Mia! Here We Go Again", "Man Of The Woods", "Manic", "Me And My Gang", "Meduza", "Meet The Orphans", "Meet The Woo", "Melim", "Mellon Collie And The Infinite Sadness", "Melly vs. Melvin", "Memories...Do Not Open", "Menagerie", "Midnights", "Minecraft - Volume Alpha", "Minutes To Midnight", "Mix Pa Llorar En Tu Cuarto", "Modo Avi\xF3n", "Monkey Business", "Mono.", "Montana", "Montevallo", "Moosetape", "Morning View", "Motivan2", "Moving Pictures", "Mr. Davis", "Mr. Misunderstood", "Mulan", "Mura Masa", "Music From The Edge Of Heaven", "Music Of The Sun", "My House", "My Kinda Party", "My Krazy Life", "My Liver Will Handle What My Heart Can't", "My Moment", "My Own Lane", "My Turn", "My Worlds", "Na Praia (Ao Vivo)", "Nakamura", "Nation Of Two", "Navegando", "Need You Now", "Neon Future III", "Neotheater", "Never Trust A Happy Song", "New English", "News Of The World", "Nicole", "Night & Day", "Nimmerland", "Nimrod", "Nine Track Mind", "No Angel", "No Me Pidas Perd\xF3n", "No More Drama", "No Protection", "No Strings Attached", "No Time To Die", "Nobody Is Listening", "Non Stop Erotic Cabaret", "Non-Fiction", "Northsbest", "Nostalgia", "Nostalgia, Ultra", "Notes On A Conditional Form", "Now Or Never", "O Embaixador (Ao Vivo)", "O My Heart", "OK Computer", "Ocean", "Ocean Avenue", "Ocean Eyes", "Odisea", "Oh My My", "Oh, What A Life", "On The 6", "One In A Million", "One More Light", "One Of These Nights", "Open Up And Say...Ahh!", "Ordinary Man", "Origins", "Out Of The Blue", "Over It", "OzuTochi", "PTSD", "Pa Las Baby's Y Belikeada", "Pa Que Hablen", "Pa' Luego Es Tarde", "Pa' Otro La 'O", "Pablo Honey", "Pain Is Love", "Pain Is Temporary", "Painting Pictures", "Palmen Aus Plastik 2", "Para Mi Ex", "Para Siempre", "Partners In Crime", "Pawn Shop", "Pegasus / Neon Shark VS Pegasus", "Pet Sounds", "Piece By Piece", "Pier Pressure", "Pineapple Sunrise", "Piseiro 2020 Ao Vivo", "Planet Pit", "Plans", "Play Deep", "Playa Saturno", "Por Primera Vez", "Por Vida", "Positions", "Post Human: Survival Horror", "Poster Girl", "Prazer, Eu Sou Ferrugem (Ao Vivo)", "Pretty Girls Like Trap Music", "Pretty. Odd.", "Prince Royce", "Prisma", "Prometo", "Providence", "Puberty 2", "Punisher", "Purgatory", "Purple Rain", "Que Bendici\xF3n", "Queen Of The Clouds", "Quiero Volver", "R&G (Rhythm & Gangsta): The Masterpiece", "Raise!", "Ransom 2", "Rapunzel", "Rare", "Re Mida", "Ready To Die", "Realer", "Rebelde", "Reclassified", "Recovery", "Recuerden Mi Estilo", "Reggatta De Blanc", "Regulate\u2026 G Funk Era", "Reik", "Reise, Reise", "Relapse", "Relaxing Piano Lullabies And Natural Sleep Aid For Baby Sleep Music", "Religiously. The Album.", "Replay", "Results May Vary", "Revenge", "Revolve", "Revolver", "Ricky Martin", "Rien 100 Rien", "Ripcord", "Rise And Fall, Rage And Grace", "Rise Of An Empire", "Robin Hood: Prince Of Thieves", "Rock N Roll Jesus", "Romance", "Romances", "Ronan", "Royal Blood", "Rumours", "Sad Boyz 4 Life II", "San Lucas", "Santana World", "Saturation III", "Sauce Boyz", "Savage Mode", "Saxobeats", "Scarlet", "Schwarzes Herz", "Seal The Deal & Let's Boogie", "Section.80", "Segundo Romance", "Sehnsucht", "Shake The Snow Globe", "Shang-Chi And The Legend Of The Ten Rings: The Album", "Sheer Heart Attack", "Shiesty Season", "Shock Value", "Shoot For The Stars, Aim For The Moon", "Signed Sealed And Delivered", "Signos", "Silent Alarm", "Simplemente Gracias", "Sin Bandera", "Sing Me A Lullaby, My Sweet Temptation", "Sinner", "Sirio", "Sit Still, Look Pretty", "Skin", "Slowhand", "Smash", "Smithereens", "Snow Cougar", "Social Cues", "Some Girls", "Song Hits From Holiday Inn", "Songs For Dads", "Songs For The Deaf", "Songs For You, Truths For Me", "Songs In The Key Of Life", "Souled Out", "Sounds Of Silence", "Soy Como Quiero Ser", "Speak Now", "Speak Your Mind", "Speakerboxxx/The Love Below", "Spider-Man: Into The Spider-Verse", "Split Decision", "Square Up", "SremmLife", "Starboy", "Stay +", "Stay Dangerous", "Staying At Tamara's", "Steppenwolf", "Stick Season", "Still Bill", "Straight Outta Compton", "Strange Trails", "Stronger", "Suavemente", "Sublime", "Suck It and See", "Sucker", "Sue\xF1os", "Sugar", "Summer Forever", "Summer,", "Sunset Season", "Sunshine On Leith", "Surfer Rosa", "Sweet Talker", "SweetSexySavage", "System Of A Down", "TA13OO", "Talk That Talk", "Talking Heads: 77", "Tangled Up", "Tango In The Night", "Taxi Driver", "Taylor Swift", "Tell Me It's Real", "Ten", "Ten Summoner's Tales", "Terra Sem Cep (Ao Vivo)", "Terral", "Testing", "Tha Carter III", "Thank Me Later", "That's Christmas To Me", "The Academy", "The Adventures Of Bobby Ray", "The Album", "The Andy Williams Christmas Album", "The Aviary", "The Balcony", "The Battle Of Los Angeles", "The Beatles (White Album)", "The Beginning", "The Better Life", "The Big Day", "The Book", "The Breakfast Club", "The Cars", "The Colour And The Shape", "The Death Of Peace Of Mind", "The Diary Of Alicia Keys", "The Documentary", "The Emancipation Of Mimi", "The Eminem Show", "The End Of Everything", "The Final Countdown", "The Forever Story", "The Foundation", "The Goat", "The Golden Child", "The Good Parts", "The Greatest Showman: Reimagined", "The Green Trip", "The Hardest Love", "The Head And The Heart", "The Human Condition", "The Infamous", "The Lady Killer", "The Last Don II", "The Lion King", "The Lockdown Sessions", "The London Sessions", "The Lord Of The Rings: The Fellowship Of The Ring", "The Lost Boy", "The Magic Of Christmas / The Christmas Song", "The Marshall Mathers LP", "The Martin Garrix Collection", "The Melodic Blue", "The Mockingbird & The Crow", "The Pains Of Growing", "The Papercut Chronicles", "The Perfect Luv Tape", "The Pinkprint", "The Predator", "The Queen Is Dead", "The ReVe Festival: Finale", "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars", "The Rising Tied", "The River", "The Stone Roses", "The Story Of Us", "The Stranger", "The Sufferer & The Witness", "The Sun's Tirade", "The Temptations Sing Smokey", "The Time Of Our Lives", "The Way It Is", "The Wonderful World Of Sam Cooke", "The Writing's On The Wall", "The Young And The Hopeless", "Therapy", "Therapy Session", "There Is More (Live)", "There Is Nothing Left To Lose", "These Things Happen", "Third Eye Blind", "This Is Me...Then", "This Unruly Mess I've Made", "Threat to Survival", "Thrill Of The Chase", "Time", "Timelezz", "To Let A Good Thing Die", "To Pimp A Butterfly", "Toast To Our Differences", "Todos Os Cantos, Vol. 1 (Ao Vivo)", "Too Hard", "Torches X", "Total Xanarchy", "Toto IV", "Toulouse Street", "Tourist History", "Toxicity", "Tragic Kingdom", "Tranquility Base Hotel & Casino", "Traumazine", "Traveler", "Tres Hombres", "Trip At Knight", "Tron: Legacy", "True Blue", "True Colors", "Trustfall", "Tu Veneno Mortal", "Tudo Em Paz", "Ubuntu", "Ugly Is Beautiful", "Ultra 2021", "Una Mattina", "Unbroken", "Uncovered", "Under Pressure", "Unsponsored Content", "Unstoppable", "Unwritten", "Urban Flora", "Urban Hymns", "Use Your Illusion I", "Veneer", "Versions Of Me", "Vibes", "Vice Versa", "Vices & Virtues", "Victory", "Vida", "Viejo Marihuano", "Visual\xEDzate", "Walk Away", "Walk Me Home...", "Watch The Throne", "Wave", "We Broke The Rules", "We Love You Tecca", "We Love You Tecca 2", "Weezer (Green Album)", "Welcome To The Madhouse", "Westlife", "What A Time To Be Alive", "What Do You Think About The Car?", "What Is Love?", "What Makes You Country", "What Separates Me From You", "What You See Is What You Get / What You See Ain't Always What You Get", "When It's Dark Out", "When We All Fall Asleep, Where Do We Go?", "Where The Light Is", "While The World Was Burning", "White Pony", "Whitney", "Who Really Cares", "Who You Are", "Who's Next", "Wide Open", "Wilder Mind", "Wildfire", "Willy And The Poor Boys", "Wings / You Never Walk Alone", "Wish", "Wish You Were Here", "Without Warning", "Wonder", "X&Y", "XOXO", "Y Que Quede Claro", "YBN: The Mixtape", "Yo Creo", "You Will Regret", "Youngblood", "Younger Now", "Youth"];
var ra = ["$NOT", "$uicideboy$", "(G)I-DLE", "*NSYNC", "2 Chainz", "21 Savage", "6LACK", "? & The Mysterians", "A Boogie Wit da Hoodie", "A Taste of Honey", "A Tribe Called Quest", "A-Ha", "ABBA", "AC/DC", "AJ Tracey", "ATEEZ", "Ace of Base", "Adele", "Ado", "Aerosmith", "Agust D", "Aitana", "Al Dexter & his Troopers", "Al Green", "Al Jolson", "Al Martino", "Alan Jackson", "Alannah Myles", "Alec Benjamin", "Alejandro Sanz", "Alesso", "Alfredo Olivas", "Ali Gatie", "Alice In Chains", "Alina Baraz", "All Time Low", "All-4-One", "All-American Rejects", "Alok", "America", "American Quartet", "Amii Stewart", "Amitabh Bhattacharya", "Ana Castela", "Anderson .Paak", "Andy Grammer", "Angus & Julia Stone", "Anirudh Ravichander", "Anita Ward", "Anitta", "Anton Karas", "Anuel AA", "Arcade Fire", "Archie Bell & The Drells", "Archies", "Aretha Franklin", "Arizona Zervas", "Armin van Buuren", "Arthur Conley", "Artie Shaw", "Asake", "Asees Kaur", "Association", "Atif Aslam", "Audioslave", "Aventura", "Avril Lavigne", "Aya Nakamura", "B J Thomas", "B.o.B", "BLACKPINK", "BONES", "BROCKHAMPTON", "BTS", "Baby Keem", "Bachman-Turner Overdrive", "Backstreet Boys", "Bad Bunny", "Badshah", "Bailey Zimmerman", "Banda El Recodo", "Barbra Streisand", "Barry White", "Bazzi", "Bebe Rexha", "Becky G", "Becky Hill", "Bee Gees", "Ben Bernie", "Ben Howard", "Ben Selvin", "Berlin", "Bessie Smith", "Bethel Music", "Bette Midler", "Beyonce", "Bibi Blocksberg", "Bibi und Tina", "BigXthaPlug", "Bill Doggett", "Bill Haley & his Comets", "Bill Withers", "Billy Davis Jr", "Billy Joel", "Billy Paul", "Billy Preston", "Billy Swan", "Birdy", "Bizarrap", "Blake Shelton", "Blur", "Bob Marley & The Wailers", "Bob Seger", "Bobby Darin", "Bobby Lewis", "Bobby McFerrin", "Bobby Vinton", "Boney M.", "Bonez MC", "Bonnie Tyler", "Booba", "Boston", "BoyWithUke", "Boyce Avenue", "Bradley Cooper", "Bread", "Brent Faiyaz", "Brett Young", "Bring Me The Horizon", "Britney Spears", "Brooks & Dunn", "Bruce Channel", "Bruno & Marrone", "Bryan Adams", "Bryce Vine", "Buddy Holly", "Burna Boy", "C. Tangana", "CKay", "CRO", "Camilo", "Capital Bra", "Captain & Tennille", "Cardi B", "Carin Leon", "Carlos Vives", "Carly Simon", "Carpenters", "Cavetown", "Celine Dion", "Central Cee", "Chaka Khan", "Champs", "Charlie Rich", "Chayanne", "Cheat Codes", "Cher", "Chic", "Chicago", "Chris Brown", "Chris Isaak", "Chris Young", "Christina Aguilera", "Christina Perri", "Christopher Cross", "Chuck Berry", "Ciara", "Cigarettes After Sex", "Cliff Edwards (Ukelele Ike)", "Cody Johnson", "Colbie Caillat", "Colby O'Donis", "Cole Swindell", "Coleman Hawkins", "Contours", "Coolio", "Count Basie", "Cris Mj", "Culture Club", "Cyndi Lauper", "D-Block Europe", "DAY6", "DJ Khaled", "DJ Luian", "DJ Nelson", "DMX", "DNCE", "DaVido", "Dadju", "Daft Punk", "Dan + Shay", "Daniel Powter", "Danny Ocean", "Darius Rucker", "Dave", "David Bowie", "David Guetta", "Daya", "Dean Martin", "Deee-Lite", "Deep Purple", "Deftones", "Demi Lovato", "Dennis Lloyd", "Denzel Curry", "Dermot Kennedy", "Desiigner", "Devo", "Dewa 19", "Dexys Midnight Runners", "Diddy", "Dido", "Die drei !!!", "Diego & Victor Hugo", "Diljit Dosanjh", "Dimitri Vegas & Like Mike", "Dinah Shore", "Dionne Warwick", "Dire Straits", "Disclosure", "Dixie Cups", "Doja Cat", "Dolly Parton", "Don Diablo", "Don Henley", "Don McLean", "Don Omar", "Donna Summer", "Donovan", "Dr. Dre", "Drake", "Dreamville", "Dua Lipa", "EMF", "ENHYPEN", "Earth, Wind & Fire", "Ed Sheeran", "Eddie Cantor", "Eddie Cochran", "Eddy Howard", "Edgar Winter Group", "Edwin Hawkins Singers", "Edwin Starr", "El Alfa", "Eladio Carrion", "Electric Light Orchestra", "Elevation Worship", "Ella Henderson", "Ellie Goulding", "Elton John", "Elvis Presley", "Empire of the Sun", "En Vogue", "Enrique Iglesias", "Eslabon Armado", "Ethel Waters", "Etta James", "Evanescence", "Exile", "Extreme", "Faith Hill", "Fall Out Boy", "Fanny Brice", "Farruko", "Fats Domino", "Fats Waller", "Feid", "Felix Jaehn", "Fergie", "Fetty Wap", "Fiersa Besari", "Fifth Harmony", "Fine Young Cannibals", "Five Finger Death Punch", "Fleetwood Mac", "Flo-Rida", "Florence + The Machine", "Flume", "Foo Fighters", "Foreigner", "Foster The People", "Four Aces", "Frank Ocean", "Frank Sinatra", "Frankie Avalon", "Frankie Valli", "Fred Astaire", "Freda Payne", "Freddie Dredd", "Freddy Fender", "French Montana", "Fuerza Regida", "Fujii Kaze", "Future", "G-Eazy", "Garfunkel and Oates", "Gary Lewis & The Playboys", "Gary Numan", "Gene Autry", "Gene Chandler", "Gene Vincent", "George Michael", "George Strait", "Gera MX", "Ghost", "Ghostemane", "Gigi D'Agostino", "Gladys Knight & The Pips", "Glass Animals", "Glee Cast", "Gloria Gaynor", "Godsmack", "Gorillaz", "Gotye", "Grand Funk Railroad", "Green Day", "Grouplove", "Grupo Firme", "Grupo Marca Registrada", "Gryffin", "Gucci Mane", "Guess Who", "Gunna", "Gusttavo Lima", "Guy Mitchell", "Gwen Stefani", "Gzuz", "H.E.R.", "HARDY", "Hailee Steinfeld", "Halsey", "Hans Zimmer", "Harris Jayaraj", "Harry Chapin", "Harry James", "Harry Nilsson", "Harry Styles", "Hayley Williams", "Herb Alpert", "Herman's Hermits", "Hillsong UNITED", "Hillsong Worship", "Hollywood Undead", "Honey Cone", "Hoobastank", "Hues Corporation", "I Prevail", "ITZY", "IVE", "Ice Cube", "Ice Spice", "Iggy Azalea", "Imagine Dragons", "Incubus", "Internet Money", "Isaac Hayes", "J Geils Band", "J. Cole", "JAY-Z", "JJ Lin", "JP Saxe", "JVKE", "Jack Harlow", "Jack Johnson", "Jackie Wilson", "Jacquees", "James Arthur", "James Brown", "James TW", "James Taylor", "Jamie Foxx", "Janet Jackson", "Janis Joplin", "Jason Aldean", "Jason Mraz", "Jay Chou", "Jay Sean", "Jay Wheeler", "Jaymes Young", "Jean Knight", "Jeezy", "Jennifer Lopez", "Jennifer Warnes", "Jeremih", "Jeremy Zucker", "Jerry Lee Lewis", "Jerry Murad's Harmonicats", "Jess Glynne", "Jessie J", "Jewel", "Jimi Hendrix", "Jimin", "Jimmie Rodgers", "Jimmy Dean", "Jo Stafford", "Joan Jett & The Blackhearts", "Joao Gilberto", "Joel Corry", "John Fred & The Playboy Band", "John Legend", "John Mayer", "John Williams", "Johnnie Ray", "Johnnie Taylor", "Johnny Cash", "Johnny Horton", "Johnny Mathis", "Johnny Mercer", "Johnny Nash", "Joji", "Jon Bellion", "Jonas Blue", "Jonas Brothers", "Joni James", "Jorja Smith", "Juan Gabriel", "Juan Luis Guerra 4.40", "Juanes", "Juice Newton", "Julia Michaels", "Justin Bieber", "Justin Quiles", "KALEO", "KAROL G", "KAYTRANADA", "KK", "KSI", "KYLE", "Kacey Musgraves", "Kane Brown", "Kanye West", "Karan Aujla", "Kate Smith", "Katy Perry", "Kay Kyser", "Ke$ha", "Kehlani", "Kelly Clarkson", "Kenny Chesney", "Kenny Loggins", "Kenny Rogers", "Kenshi Yonezu", "Kenya Grace", "Kevin Gates", "Key Glock", "Khalid", "Kim Carnes", "Kim Petras", "Kimbra", "Kina", "King Gnu", "Kings of Leon", "Kingsmen", "Kitty Kallen", "Kodak Black", "Kodaline", "Kollegah", "Kool & The Gang", "Kungs", "Kygo", "Kylie Minogue", "LE SSERAFIM", "LISA", "LMFAO", "LUDMILLA", "La Adictiva Banda San Jos\xE9 de Mesillas", "La Oreja de Van Gogh", "Labrinth", "Lady Antebellum", "Lady GaGa", "Lainey Wilson", "Lana Del Rey", "Latto", "Lauryn Hill", "Lauv", "League of Legends", "Lee Brice", "Leon Bridges", "Leona Lewis", "Lesley Gore", "Leslie Odom Jr.", "Liam Payne", "Lifehouse", "Lil Baby", "Lil Dicky", "Lil Durk", "Lil Mosey", "Lil Nas X", "Lil Pump", "Lil Skies", "Lil Tjay", "Lil Uzi Vert", "Lil Yachty", "Lil' Kim", "Lil' Wayne", "Lin-Manuel Miranda", "Linkin Park", "Lionel Richie", "Lipps Inc", "Lisa Loeb", "Little Peggy March", "Little Richard", "Lofi Fruits Music", "Lord Huron", "Los Del Rio", "Los Dos Carnales", "Los Lobos", "Los Temerarios", "Los Tigres Del Norte", "Los Tucanes De Tijuana", "Lou Reed", "Loud Luxury", "Louis Jordan", "Louis Tomlinson", "Love Unlimited", "Lovin' Spoonful", "Luan Santana", "Luciano", "Luis Miguel", "Luis R Conriquez", "Lulu", "Lunay", "Lupe Fiasco", "M", "MAX", "MC Hammer", "MC Ryan SP", "MKTO", "Mabel", "Machine Gun Kelly", "Madison Beer", "Madonna", "Mahalini", "Major Lazer", "Mambo Kingz", "Maneskin", "Marco Antonio Sol\xEDs", "Margaret Whiting", "Maria Becerra", "Mario", "Mario Lanza", "Mark Ronson", "Maroon 5", "Marshmello", "Martin Garrix", "Mary Ford", "Mary J Blige", "Mary J. Blige", "Mary Wells", "Matoma", "Mau y Ricky", "Meek Mill", "Megadeth", "Melanie", "Melanie Martinez", "Melendi", "Men At Work", "Metro Boomin", "Michael Bubl\xE9", "Michael Jackson", "Michael McDonald", "Michael Sembello", "Miguel", "Mike Posner", "Miley Cyrus", "Milky Chance", "Minnie Riperton", "Miracle Tones", "Miranda Lambert", "Mohit Chauhan", "Mon Laferte", "Moneybagg Yo", "Monsta X", "Mora", "Morad", "Morat", "Mother Mother", "Motley Crue", "Ms. Lauryn Hill", "Mumford & Sons", "Muse", "Mya", "Myke Towers", "NCT 127", "NCT DREAM", "NEFFEX", "Nadin Amizah", "Nancy Sinatra", "Nat King Cole", "Nate Smith", "Natti Natasha", "Nayer", "Neil Diamond", "Neil Sedaka", "Nekfeu", "Nelly", "New Vaudeville Band", "Next", "Nickelback", "Nicki Minaj", "Nicki Nicole", "Nicky Jam", "Nina Simone", "Ninho", "Nipsey Hussle", "Nirvana", "Niska", "No Doubt", "Norah Jones", "Normani", "OMI", "ONE OK ROCK", "Oasis", "Official HIGE DANdism", "Offset", "Old Dominion", "Oliver Heldens", "Olivia Rodrigo", "Omah Lay", "One Direction", "Otis Redding", "OutKast", "Owl City", "P Diddy", "P!nk", "PLK", "PNL", "Pamungkas", "Passenger", "Pat Boone", "Patsy Cline", "Patti LaBelle", "Patti Page", "Paul & Paula", "Paul Revere & the Raiders", "Paul Robeson", "Paul Russell", "Paul Whiteman", "Paula Abdul", "Peaches & Herb", "Pearl Jam", "Pee Wee Hunt", "Pee Wee King", "Pentatonix", "Percy Faith", "Percy Sledge", "Peso Pluma", "Peter Cetera", "Peter Gabriel", "Peter, Paul & Mary", "Pharrell Williams", "Pierce The Veil", "Pineapple StormTv", "Pink Floyd", "Pink Sweat$", "Piso 21", "Pitbull", "Plan B", "Player", "Polo G", "Pop Smoke", "Portugal. The Man", "Pouya", "Prince", "Prince Royce", "Pusha T", "Quality Control", "Queen", "Quinn XCII", "R. Kelly", "RAF Camora", "RAYE", "REM", "REO Speedwagon", "Radiohead", "Rag'n'Bone Man", "Rage Against The Machine", "Rahat Fateh Ali Khan", "Rainbow Kitten Surprise", "Rammstein", "Rauw Alejandro", "Ray Charles", "Ray Parker Jr", "Ray Stevens", "Red Foley", "Red Hot Chili Peppers", "Red Velvet", "Regard", "Regina Belle", "Reik", "Rels B", "Rema", "Ricardo Arjona", "Rich The Kid", "Rick Astley", "Rick Dees & his Cast of Idiots", "Rick Ross", "Rick Springfield", "Ricky Martin", "Ricky Nelson", "Rihanna", "Rita Ora", "Ritchie Valens", "Rizky Febian", "Rob Thomas", "Roberta Flack", "Robin Schulz", "Robin Thicke", "Rod Stewart", "Rod Wave", "Roddy Ricch", "Roger Miller", "Romeo Santos", "Rosemary Clooney", "Roxette", "Roy Acuff", "Roy Orbison", "Rudimental", "Ruel", "Ruth B.", "Ryan Lewis", "SCH", "SEVENTEEN", "SWV", "Sabaton", "Sabrina Carpenter", "Sachet Tandon", "Sachin-Jigar", "Sade", "Sam Cooke", "Sam Feldt", "Sam Hunt", "Sam Smith", "Sam The Sham & The Pharaohs", "Sammy Davis Jr", "Sammy Kaye", "Santana", "Sasha Alex Sloan", "Savage Garden", "Saweetie", "Scorpions", "Sean Kingston", "Sean Paul", "Sebastian Yatra", "Sech", "Seeb", "Sezen Aksu", "Sfera Ebbasta", "Shaggy", "Shania Twain", "Shawn Mendes", "Sheena Easton", "Shinedown", "Shubh", "Sia", "Sid Sriram", "Sidhu Moose Wala", "Silk", "Silver Convention", "Simon & Garfunkel", "Sinead O'Connor", "Sir Mix-a-Lot", "Sister Sledge", "Ski Mask The Slump God", "Skillet", "Skrillex", "Sleeping At Last", "Smokey Robinson", "Snoop Dogg", "Snow Patrol", "Soda Stereo", "Sonu Nigam", "Sophie Ellis-Bextor", "Spencer Davis Group", "Spice Girls", "Stan Getz", "Starland Vocal Band", "Stephen Sanchez", "Steve Aoki", "Steve Lacy", "Steve Winwood", "Stevie B", "Sting", "Stormzy", "Strawberry Alarm Clock", "Stray Kids", "Stromae", "Sublime", "Sum 41", "Summer Walker", "Supertramp", "Survivor", "Swedish House Mafia", "System Of A Down", "T-Pain", "T.I.", "TAEYEON", "TKKG", "TLC", "TOMORROW X TOGETHER", "TOTO", "TWICE", "Tag Team", "Tainy", "Tammi Terrell", "Tanishk Bagchi", "Tate McRae", "Taylor Swift", "Tears For Fears", "Tems", "Tennessee Ernie Ford", "Terence Trent D'Arby", "Teresa Brewer", "Terry Jacks", "The Ames Brothers", "The Animals", "The B52s", "The Bangles", "The Beatles", "The Black Eyed Peas", "The Black Keys", "The Box Tops", "The Chainsmokers", "The Chiffons", "The Chordettes", "The Clash", "The Coasters", "The Commodores", "The Cowsills", "The Cranberries", "The Crew-Cuts", "The Cure", "The Detroit Spinners", "The Diamonds", "The Doobie Brothers", "The Doors", "The Drifters", "The Emotions", "The Eurythmics", "The Fireballs", "The Flamingos", "The Foundations", "The Four Seasons", "The Fray", "The Game", "The Go Gos", "The Goo Goo Dolls", "The Head And The Heart", "The Hollies", "The Ink Spots", "The Isley Brothers", "The Jackson 5", "The Kid LAROI", "The Killers", "The Kingston Trio", "The Kooks", "The Lemon Pipers", "The Living Tombstone", "The Lumineers", "The Mamas & The Papas", "The Marvelettes", "The McCoys", "The Mills Brothers", "The Miracles", "The Monkees", "The Moody Blues", "The National", "The Neighbourhood", "The Notorious B.I.G.", "The O'Jays", "The Offspring", "The Osmonds", "The Partridge Family", "The Penguins", "The Pet Shop Boys", "The Platters", "The Righteous Brothers", "The Rolling Stones", "The Ronettes", "The Score", "The Script", "The Seekers", "The Shangri-Las", "The Smashing Pumpkins", "The Staple Singers", "The Strokes", "The Supremes", "The Temptations", "The Turtles", "The Vamps", "The Verve", "The Village People", "The Weavers", "The White Stripes", "The Young Rascals", "The Zombies", "Thelma Houston", "Thomas Rhett", "Three Days Grace", "Three Dog Night", "Three Man Down", "Timbaland", "Timmy Trumpet", "Toby Keith", "Tom Jones", "Tom Petty and the Heartbreakers", "Tommy Dorsey", "Tommy Edwards", "Tommy James & the Shondells", "Tone Loc", "Toni Braxton", "Topic", "Tory Lanez", "Tove Lo", "Trevor Daniel", "Trey Songz", "Trippie Redd", "Trueno", "Tulsi Kumar", "Tulus", "Twenty One Pilots", "Two Feet", "Ty Dolla $ign", "Tyga", "Tyler Hubbard", "U2", "UB40", "UZI", "Ufo361", "Upchurch", "V", "Vampire Weekend", "Van McCoy", "Van Morrison", "Vance Joy", "Vanessa Carlton", "Vanessa Williams", "Vera Lynn", "Vernon Dalhart", "Vicente Fernandez", "Vishal-Shekhar", "Volbeat", "WILLOW", "Wale", "Wallows", "Weezer", "Wham!", "Whitney Houston", "Why Don't We", "Wilbert Harrison", "Wilson Phillips", "Wiz Khalifa", "Woody Guthrie", "Wyclef Jean", "XXXTENTACION", "Xavi", "YG", "YNW Melly", "YOASOBI", "Yandel", "Years & Years", "Yeat", "Yo Gotti", "Young Dolph", "Young Miko", "Young Thug", "YoungBoy Never Broke Again", "Yung Gravy", "Yuuri", "Yuvan Shankar Raja", "ZAYN", "ZZ Top", "Zac Brown Band", "Zach Bryan", "Zara Larsson", "aespa", "benny blanco", "blink-182", "d4vd", "deadmau5", "girl in red", "gnash", "iann dior", "will.i.am"];
var oa = ["Acid House", "Acid Jazz", "Acid Rock", "Acoustic", "Acoustic Blues", "Afro-Pop", "Afrobeat", "Alt-Rock", "Alternative", "Ambient", "American Trad Rock", "Americana", "Anime", "Arena Rock", "Art-Rock", "Avant-Garde", "Avant-Punk", "Baladas y Boleros", "Barbershop", "Baroque", "Bebop", "Big Band", "Black Metal", "Blue Note", "Bluegrass", "Blues", "Boogaloo", "Bop", "Bossa Nova", "Bounce", "Brazilian Funk", "Breakbeat", "Britpop", "CCM", "Cajun", "Cantopop", "Celtic", "Celtic Folk", "Chamber Music", "Chant", "Chanukah", "Chicago Blues", "Chicago House", "Chicano", "Children\u2019s Music", "Chill", "Choral", "Christian", "Christmas", "Classical", "Club", "College Rock", "Conjunto", "Cool Jazz", "Country", "Crunk", "Dance", "Dancehall", "Death Metal", "Deep House", "Delta Blues", "Detroit Techno", "Dirty South", "Disco", "Disney", "Dixieland", "Doo-wop", "Downtempo", "Dream Pop", "Drill", "Drinking Songs", "Drone", "Drum'n'bass", "Dub", "Dubstep", "EDM", "Early Music", "East Coast Rap", "Easter", "Easy Listening", "Eclectic", "Electric Blues", "Electro", "Electronic", "Electronica", "Emo", "Enka", "Environmental", "Ethio-jazz", "Experimental", "Experimental Rock", "Flamenco", "Folk", "Folk-Rock", "Forro", "French Pop", "Funk", "Fusion", "Gangsta Rap", "Garage", "German Folk", "German Pop", "Glam Rock", "Gospel", "Goth", "Grime", "Grindcore", "Groove", "Grunge", "Hair Metal", "Halloween", "Happy", "Hard Bop", "Hard Dance", "Hard Rock", "Hardcore", "Hardcore Punk", "Hardcore Rap", "Hardstyle", "Healing", "Heavy Metal", "High Classical", "Hip Hop", "Holiday", "Honky Tonk", "House", "IDM", "Impressionist", "Indie", "Industrial", "Instrumental", "J-Dance", "J-Idol", "J-Pop", "J-Punk", "J-Rock", "J-Ska", "J-Synth", "Jackin House", "Jam Bands", "Japanese Pop", "Jazz", "Jungle", "K-Pop", "Karaoke", "Kayokyoku", "Kids", "Kitsch", "Klezmer", "Krautrock", "Latin", "Latin Jazz", "Latin Rap", "Local", "Lounge", "Lullabies", "MPB", "Mainstream Jazz", "Malay", "Mandopop", "March", "Mariachi", "Mawwal", "Medieval", "Meditation", "Metal", "Metalcore", "Minimal Techno", "Minimalism", "Modern", "Motown", "Mugham", "Musicals", "Musique Concr\xE8te", "Nature", "Neo-Soul", "Nerdcore", "New Acoustic", "New Age", "New Mex", "New Wave", "No Wave", "Noise", "Nordic", "Novelty", "OPM", "Oi!", "Old School Rap", "Opera", "Orchestral", "Original Score", "Outlaw Country", "Pagode", "Party", "Piano", "Polka", "Pop", "Pop Film", "Pop Latino", "Post Dubstep", "Power Pop", "Praise & Worship", "Progressive House", "Progressive Rock", "Proto-punk", "Psych Rock", "Psychedelic", "Punk", "Punk Rock", "Qawwali", "Quiet Storm", "R&B", "Ragtime", "Rainy Day", "Rap", "Reggae", "Reggaeton", "Regional Mexicano", "Relaxation", "Renaissance", "Retro", "Rock", "Rockabilly", "Rocksteady", "Romance", "Romantic", "Roots Reggae", "Roots Rock", "SKA", "Sad", "Salsa", "Samba", "Second Line", "Sertanejo", "Shaabi", "Shoegaze", "Sleep", "Smooth Jazz", "Soft Rock", "Soul", "Soundtrack", "Southern Gospel", "Southern Rock", "Space Rock", "Stage And Screen", "Steampunk", "Summer", "Surf", "Swamp Pop", "Swing", "Synth Pop", "Tango", "Techno", "Teen Pop", "Tejano", "Tex-Mex", "Thanksgiving", "Traditional", "Trance", "Trip Hop", "Tropical", "Underground Rap", "Urban", "Urban Cowboy", "West Coast Rap", "Western Swing", "World", "Worldbeat", "Zydeco"];
var na = ["(Everything I Do) I Do it For You", "(Ghost) Riders in the Sky", "(I Can't Get No) Satisfaction", "(I've Got a Gal In) Kalamazoo", "(I've Had) the Time of My Life", "(It's No) Sin", "(Just Like) Starting Over", "(Let Me Be Your) Teddy Bear", "(Put Another Nickel In) Music! Music! Music!", "(Sexual) Healing", "(Sittin' On) the Dock of the Bay", "(They Long to Be) Close to You", "(You Keep Me) Hangin' On", "(You're My) Soul & Inspiration", "(Your Love Keeps Lifting Me) Higher & Higher", "12th Street Rag", "1999", "19th Nervous Breakdown", "50 Ways to Leave Your Lover", "9 to 5", "96 Tears", "A Boy Named Sue", "A Hard Day's Night", "A String of Pearls", "A Thousand Miles", "A Tree in the Meadow", "A Whiter Shade of Pale", "A Whole New World (Aladdin's Theme)", "A Woman in Love", "A-Tisket A-Tasket", "ABC", "Abracadabra", "Ac-cent-tchu-ate the Positive", "Addicted to Love", "After You've Gone", "Afternoon Delight", "Again", "Against All Odds (Take a Look At Me Now)", "Ain't Misbehavin'", "Ain't No Mountain High Enough", "Ain't No Sunshine", "Ain't That a Shame", "Airplanes", "All Along the Watchtower", "All I Have to Do is Dream", "All I Wanna Do", "All My Lovin' (You're Never Gonna Get It)", "All Night Long (All Night)", "All Out of Love", "All Shook Up", "All You Need is Love", "Alone", "Alone Again (Naturally)", "Always On My Mind", "American Pie", "American Woman", "Angie", "Another Brick in the Wall (part 2)", "Another Day in Paradise", "Another Night", "Another One Bites the Dust", "Apologize", "April Showers", "Aquarius/Let The Sunshine In", "Are You Lonesome Tonight?", "Arthur's Theme (Best That You Can Do)", "As Time Goes By", "At Last", "At the Hop", "Auf Wiederseh'n Sweetheart", "Baby Baby", "Baby Come Back", "Baby Got Back", "Baby Love", "Baby One More Time", "Bad Day", "Bad Girls", "Bad Moon Rising", "Bad Romance", "Bad, Bad Leroy Brown", "Baker Street", "Ball of Confusion (That's What the World is Today)", "Ballad of the Green Berets", "Ballerina", "Band On the Run", "Band of Gold", "Battle of New Orleans", "Be Bop a Lula", "Be My Baby", "Be My Love", "Beat It", "Beautiful Day", "Beauty & the Beast", "Because I Love You (The Postman Song)", "Because You Loved Me", "Because of You", "Before The Next Teardrop Falls", "Begin the Beguine", "Behind Closed Doors", "Being With You", "Believe", "Ben", "Bennie & the Jets", "Besame Mucho", "Best of My Love", "Bette Davis Eyes", "Big Bad John", "Big Girls Don't Cry", "Billie Jean", "Bitter Sweet Symphony", "Black Or White", "Black Velvet", "Blaze of Glory", "Bleeding Love", "Blue Suede Shoes", "Blue Tango", "Blueberry Hill", "Blurred Lines", "Body & Soul", "Bohemian Rhapsody", "Boogie Oogie Oogie", "Boogie Woogie Bugle Boy", "Boom Boom Pow", "Born in the USA", "Born to Be Wild", "Born to Run", "Boulevard of Broken Dreams", "Brand New Key", "Brandy (You're A Fine Girl)", "Breaking Up is Hard to Do", "Breathe", "Bridge Over Troubled Water", "Brother Louie", "Brother, Can You Spare a Dime?", "Brown Eyed Girl", "Brown Sugar", "Build Me Up Buttercup", "Burn", "Buttons & Bows", "Bye Bye Love", "Bye Bye, Blackbird", "Bye, Bye, Bye", "Caldonia Boogie (What Makes Your Big Head So Hard)", "California Dreamin'", "California Girls", "Call Me", "Call Me Maybe", "Can You Feel the Love Tonight", "Can't Buy Me Love", "Can't Get Enough of Your Love, Babe", "Can't Help Falling in Love", "Candle in the Wind '97", "Candy Man", "Car Wash", "Careless Whisper", "Cars", "Cat's in the Cradle", "Cathy's Clown", "Celebration", "Centerfold", "Chain of Fools", "Chances Are", "Change the World", "Chapel of Love", "Chattanooga Choo Choo", "Chattanoogie Shoe-Shine Boy", "Check On It", "Cheek to Cheek", "Cherish", "Cherry Pink & Apple Blossom White", "Cold, Cold Heart", "Colors of the Wind", "Come On Eileen", "Come On-a My House", "Come Together", "Coming Up", "Cracklin' Rosie", "Crazy", "Crazy For You", "Crazy Little Thing Called Love", "Crazy in Love", "Creep", "Crimson & Clover", "Crocodile Rock", "Cry", "Cry Like a Baby", "Crying", "Da Doo Ron Ron (When He Walked Me Home)", "Dance to the Music", "Dancing Queen", "Dancing in the Dark", "Dancing in the Street", "Dardanella", "Daydream Believer", "December 1963 (Oh What a Night)", "Delicado", "Dilemma", "Disco Duck", "Disco Lady", "Disturbia", "Dizzy", "Do That to Me One More Time", "Do Wah Diddy Diddy", "Do Ya Think I'm Sexy?", "Do You Love Me?", "Don't Be Cruel", "Don't Fence Me In", "Don't Go Breaking My Heart", "Don't Leave Me This Way", "Don't Let the Stars Get in Your Eyes", "Don't Let the Sun Go Down On Me", "Don't Speak", "Don't Stop 'Til You Get Enough", "Don't Worry Be Happy", "Don't You (Forget About Me)", "Don't You Want Me", "Doo Wop (That Thing)", "Down", "Down Hearted Blues", "Down Under", "Downtown", "Dreamlover", "Dreams", "Drop it Like It's Hot", "Drops of Jupiter (Tell Me)", "Duke of Earl", "E.T.", "Earth Angel", "Ebony & Ivory", "Eight Days a Week", "Empire State Of Mind", "End of the Road", "Endless Love", "Escape (The Pina Colada Song)", "Eve of Destruction", "Every Breath You Take", "Every Little Thing She Does is Magic", "Everybody Loves Somebody", "Everybody Wants to Rule the World", "Everyday People", "Eye of the Tiger", "Faith", "Fallin'", "Fame", "Family Affair", "Fantasy", "Fast Car", "Feel Good Inc", "Feel Like Making Love", "Fire & Rain", "Firework", "Flashdance. What a Feeling", "Fly Robin Fly", "Foolish Games", "Footloose", "For What It's Worth (Stop, Hey What's That Sound)", "Fortunate Son", "Frankenstein", "Freak Me", "Freebird", "Frenesi", "Funkytown", "Gangsta's Paradise", "Georgia On My Mind", "Georgy Girl", "Get Back", "Get Down Tonight", "Get Off of My Cloud", "Ghostbusters", "Gimme Some Lovin'", "Girls Just Wanna Have Fun", "Give Me Everything", "Gives You Hell", "Glamorous", "Glory of Love", "Go Your Own Way", "God Bless America", "God Bless the Child", "Gold Digger", "Gonna Make You Sweat (Everybody Dance Now)", "Good Lovin'", "Good Times", "Good Vibrations", "Goodbye Yellow Brick Road", "Goodnight, Irene", "Got to Give it Up", "Grease", "Great Balls of Fire", "Greatest Love of All", "Green Onions", "Green River", "Green Tambourine", "Grenade", "Groove is in the Heart", "Groovin'", "Gypsies, Tramps & Thieves", "Hair", "Hang On Sloopy", "Hanging by a Moment", "Hanky Panky", "Happy Days Are Here Again", "Happy Together", "Harbour Lights", "Hard to Say I'm Sorry", "Harper Valley PTA", "Have You Ever Really Loved a Woman?", "He'll Have to Go", "He's So Fine", "He's a Rebel", "Heart of Glass", "Heart of Gold", "Heartbreak Hotel", "Hello Dolly", "Hello, I Love You, Won't You Tell Me Your Name?", "Help Me, Rhonda", "Help!", "Here Without You", "Here in My Heart", "Hero", "Hey Baby", "Hey Jude", "Hey Paula", "Hey There", "Hey There Delilah", "Hey Ya!", "Higher Love", "Hips don't lie", "Hit the Road, Jack", "Hold On", "Hollaback Girl", "Honey", "Honky Tonk", "Honky Tonk Woman", "Horse With No Name", "Hot Child In The City", "Hot Stuff", "Hotel California", "Hound Dog", "House of the Rising Sun", "How Deep is Your Love?", "How Do I Live?", "How Do You Mend a Broken Heart", "How High the Moon", "How Much is That Doggy in the Window?", "How Will I Know", "How You Remind Me", "How to Save a Life", "Hungry Heart", "Hurt So Good", "I Believe I Can Fly", "I Can Dream, Can't I?", "I Can Help", "I Can See Clearly Now", "I Can't Get Next to You", "I Can't Get Started", "I Can't Go For That (No Can Do)", "I Can't Help Myself (Sugar Pie, Honey Bunch)", "I Can't Stop Loving You", "I Don't Want to Miss a Thing", "I Fall to Pieces", "I Feel Fine", "I Feel For You", "I Feel Love", "I Get Around", "I Got You (I Feel Good)", "I Got You Babe", "I Gotta Feeling", "I Heard it Through the Grapevine", "I Honestly Love You", "I Just Called to Say I Love You", "I Just Wanna Be Your Everything", "I Kissed A Girl", "I Love Rock 'n' Roll", "I Need You Now", "I Only Have Eyes For You", "I Shot the Sheriff", "I Still Haven't Found What I'm Looking For", "I Swear", "I Think I Love You", "I Walk the Line", "I Wanna Dance With Somebody (Who Loves Me)", "I Wanna Love You", "I Want You Back", "I Want to Hold Your Hand", "I Want to Know What Love Is", "I Went to Your Wedding", "I Will Always Love You", "I Will Follow Him", "I Will Survive", "I Write the Songs", "I'll Be Missing You", "I'll Be There", "I'll Make Love to You", "I'll Never Smile Again", "I'll Take You There", "I'll Walk Alone", "I'll be seeing you", "I'm Looking Over a Four Leaf Clover", "I'm So Lonesome I Could Cry", "I'm Sorry", "I'm Walking Behind You", "I'm Your Boogie Man", "I'm Yours", "I'm a Believer", "I've Heard That Song Before", "If (They Made Me a King)", "If I Didn't Care", "If You Don't Know Me By Now", "If You Leave Me Now", "Imagine", "In Da Club", "In the End", "In the Ghetto", "In the Mood", "In the Summertime", "In the Year 2525 (Exordium & Terminus)", "Incense & Peppermints", "Indian Reservation (The Lament Of The Cherokee Reservation Indian)", "Instant Karma", "Iris", "Ironic", "Irreplaceable", "It Had to Be You", "It's All in the Game", "It's My Party", "It's Now Or Never", "It's Still Rock 'n' Roll to Me", "It's Too Late", "Jack & Diane", "Jailhouse Rock", "Jessie's Girl", "Jive Talkin'", "Johnny B Goode", "Joy to the World", "Judy in Disguise (With Glasses)", "Jump", "Jumpin' Jack Flash", "Just Dance", "Just My Imagination (Running Away With Me)", "Just the Way You Are", "Kansas City", "Karma Chameleon", "Keep On Loving You", "Killing Me Softly With His Song", "King of the Road", "Kiss", "Kiss & Say Goodbye", "Kiss From a Rose", "Kiss Me", "Kiss On My List", "Kiss You All Over", "Knock On Wood", "Knock Three Times", "Kokomo", "Kryptonite", "Kung Fu Fighting", "La Bamba", "Lady", "Lady Marmalade (Voulez-Vous Coucher Aver Moi Ce Soir?)", "Last Train to Clarksville", "Layla", "Le Freak", "Leader of the Pack", "Lean On Me", "Leaving, on a Jet Plane", "Let Me Call You Sweetheart", "Let Me Love You", "Let it Be", "Let it Snow! Let it Snow! Let it Snow!", "Let's Dance", "Let's Get it On", "Let's Groove", "Let's Hear it For the Boy", "Let's Stay Together", "Light My Fire", "Lights", "Like a Prayer", "Like a Rolling Stone", "Like a Virgin", "Little Darlin'", "Little Things Mean a Lot", "Live & Let Die", "Livin' La Vida Loca", "Livin' On a Prayer", "Living For the City", "Locked Out Of Heaven", "Lola", "Lonely Boy", "Long Cool Woman in a Black Dress", "Long Tall Sally", "Look Away", "Lookin' Out My Back Door", "Lose Yourself", "Losing My Religion", "Louie Louie", "Love Child", "Love Hangover", "Love In This Club", "Love Is Blue (L'Amour Est Bleu)", "Love Letters in the Sand", "Love Me Do", "Love Me Tender", "Love Shack", "Love Theme From 'A Star is Born' (Evergreen)", "Love Train", "Love Will Keep Us Together", "Love is a Many Splendoured Thing", "Love to Love You Baby", "Love's Theme", "Loving You", "Low", "Macarena", "Mack the Knife", "Maggie May", "Magic", "Magic Carpet Ride", "Make Love to Me", "Make it With You", "Makin' Whoopee", "Mama Told Me Not to Come", "Man in the Mirror", "Manana (Is Soon Enough For Me)", "Maneater", "Maniac", "Maybellene", "Me & Bobby McGee", "Me & Mrs Jones", "Memories Are Made of This", "Mercy Mercy Me (The Ecology)", "Mickey", "Midnight Train to Georgia", "Minnie the Moocher", "Miss You", "Miss You Much", "Mister Sandman", "Mmmbop", "Mona Lisa", "Monday Monday", "Money For Nothing", "Mony Mony", "Mood Indigo", "Moonlight Cocktail", "Moonlight Serenade", "More Than Words", "More Than a Feeling", "Morning Train (Nine to Five)", "Mr Big Stuff", "Mr Brightside", "Mr Tambourine Man", "Mrs Brown You've Got a Lovely Daughter", "Mrs Robinson", "Mule Train", "Music", "My Blue Heaven", "My Boyfriend's Back", "My Eyes Adored You", "My Girl", "My Guy", "My Heart Will Go On", "My Life", "My Love", "My Man", "My Prayer", "My Sharona", "My Sweet Lord", "Na Na Hey Hey (Kiss Him Goodbye)", "Nature Boy", "Near You", "Need You Now", "Need You Tonight", "Never Gonna Give You Up", "Night & Day", "Night Fever", "Nights in White Satin", "No One", "No Scrubs", "Nobody Does it Better", "Nothin' on You", "Nothing Compares 2 U", "Nothing's Gonna Stop Us Now", "Ode To Billie Joe", "Oh Happy Day", "Oh My Papa (O Mein Papa)", "Oh, Pretty Woman", "Ol' Man River", "Ole Buttermilk Sky", "On Bended Knee", "On My Own", "On the Atchison, Topeka & the Santa Fe", "One", "One Bad Apple", "One More Try", "One O'Clock Jump", "One Sweet Day", "One of These Nights", "One of Us", "Only The Lonely (Know The Way I Feel)", "Only You (And You Alone)", "Open Arms", "Over There", "Over the Rainbow", "Paint it Black", "Papa Don't Preach", "Papa Was a Rolling Stone", "Papa's Got a Brand New Bag", "Paper Doll", "Paper Planes", "Paperback Writer", "Party Rock Anthem", "Peg o' My Heart", "Peggy Sue", "Pennies From Heaven", "Penny Lane", "People", "People Got to Be Free", "Personality", "Philadelphia Freedom", "Physical", "Piano Man", "Pick Up the Pieces", "Pistol Packin' Mama", "Play That Funky Music", "Please Mr Postman", "Poker Face", "Pon De Replay", "Pony Time", "Pop Muzik", "Prisoner of Love", "Private Eyes", "Promiscuous", "Proud Mary", "Purple Haze", "Purple Rain", "Puttin' on the Ritz", "Que sera sera (Whatever will be will be)", "Queen of Hearts", "Rag Doll", "Rag Mop", "Rags to Riches", "Raindrops Keep Falling On My Head", "Rapture", "Ray of Light", "Reach Out (I'll Be There)", "Red Red Wine", "Rehab", "Respect", "Return to Sender", "Reunited", "Revolution", "Rhapsody in Blue", "Rhinestone Cowboy", "Rich Girl", "Riders On the Storm", "Right Back Where We Started From", "Ring My Bell", "Ring of Fire", "Rock Around the Clock", "Rock With You", "Rock Your Baby", "Rock the Boat", "Rock the Casbah", "Roll Over Beethoven", "Roll With It", "Rolling In The Deep", "Rosanna", "Roses Are Red", "Royals", "Ruby Tuesday", "Rudolph, the Red-Nosed Reindeer", "Rum & Coca-Cola", "Runaround Sue", "Runaway", "Running Scared", "Rush Rush", "Sailing", "Save the Best For Last", "Save the Last Dance For Me", "Say It Right", "Say My Name", "Say Say Say", "Say You, Say Me", "School's Out", "Seasons in the Sun", "Secret Love", "Sentimental Journey", "Sexyback", "Sh-Boom (Life Could Be a Dream)", "Shadow Dancing", "Shake Down", "Shake You Down", "She Drives Me Crazy", "She Loves You", "She's a Lady", "Shining Star", "Shop Around", "Shout", "Silly Love Songs", "Since U Been Gone", "Sing, Sing, Sing (With A Swing)", "Singing The Blues", "Single Ladies (Put A Ring On It)", "Sir Duke", "Sixteen Tons", "Sledgehammer", "Sleep Walk", "Sleepy Lagoon", "Slow Poke", "Smells Like Teen Spirit", "Smoke Gets in Your Eyes", "Smoke On the Water", "Smoke! Smoke! Smoke! (That Cigarette)", "Smooth", "So Much in Love", "Soldier Boy", "Some Enchanted Evening", "Some of These Days", "Somebody That I Used to Know", "Somebody to Love", "Someday", "Somethin' Stupid", "Something", "Soul Man", "Spanish Harlem", "Spill the Wine", "Spinning Wheel", "Spirit in the Sky", "St George & the Dragonette", "St Louis Blues", "Stagger Lee", "Stairway to Heaven", "Stand By Me", "Stardust", "Stars & Stripes Forever", "Stay (I Missed You)", "Stayin' Alive", "Stop! in the Name of Love", "Stormy Weather (Keeps Rainin' All the Time)", "Straight Up", "Strange Fruit", "Stranger On the Shore", "Strangers in the Night", "Strawberry Fields Forever", "Streets of Philadelphia", "Stronger", "Stuck On You", "Sugar Shack", "Sugar Sugar", "Summer in the City", "Summertime Blues", "Sunday, Monday or Always", "Sunshine Superman", "Sunshine of Your Love", "Superstar", "Superstition", "Surfin' USA", "Suspicious Minds", "Swanee", "Sweet Caroline (Good Times Never Seemed So Good)", "Sweet Child O' Mine", "Sweet Dreams (Are Made of This)", "Sweet Georgia Brown", "Sweet Home Alabama", "Sweet Soul Music", "Swinging On a Star", "T For Texas (Blue Yodel No 1)", "TSOP (The Sound of Philadelphia)", "Take Me Home, Country Roads", "Take My Breath Away", "Take On Me", "Take The 'A' Train", "Take a Bow", "Tammy", "Tangerine", "Tears in Heaven", "Tears of a Clown", "Temperature", "Tennessee Waltz", "Tequila", "Tha Crossroads", "Thank You (Falettinme be Mice Elf Again)", "That Lucky Old Sun (Just Rolls Around Heaven All Day)", "That Old Black Magic", "That'll Be the Day", "That's Amore", "That's What Friends Are For", "That's the Way (I Like It)", "That's the Way Love Goes", "The Boy is Mine", "The Boys of Summer", "The Christmas Song (Chestnuts Roasting On An Open Fire)", "The End of the World", "The First Time Ever I Saw Your Face", "The Girl From Ipanema", "The Glow-Worm", "The Great Pretender", "The Gypsy", "The Hustle", "The Joker", "The Last Dance", "The Letter", "The Loco-Motion", "The Long & Winding Road", "The Love You Save", "The Morning After", "The Power of Love", "The Prisoner's Song", "The Reason", "The Rose", "The Sign", "The Song From Moulin Rouge (Where Is Your Heart)", "The Sounds of Silence", "The Streak", "The Sweet Escape", "The Thing", "The Tide is High", "The Tracks of My Tears", "The Twist", "The Wanderer", "The Way We Were", "The Way You Look Tonight", "The Way You Move", "Theme From 'A Summer Place'", "Theme From 'Greatest American Hero' (Believe It Or Not)", "Theme From 'Shaft'", "There goes my baby", "These Boots Are Made For Walking", "Third Man Theme", "This Diamond Ring", "This Guy's in Love With You", "This Land is Your Land", "This Love", "This Ole House", "This Used to Be My Playground", "Three Coins in the Fountain", "Three Times a Lady", "Thrift Shop", "Thriller", "Ticket to Ride", "Tie a Yellow Ribbon 'round the Old Oak Tree", "Tiger Rag", "Tighten Up", "Tik-Toc", "Till I Waltz Again With You", "Till The End of Time", "Time After Time", "Time of the Season", "To Sir, with Love", "Tom Dooley", "Tonight's the Night (Gonna Be Alright)", "Too Close", "Too Young", "Tossing & Turning", "Total Eclipse of the Heart", "Touch Me", "Toxic", "Travellin' Band", "Travellin' Man", "Truly Madly Deeply", "Turn! Turn! Turn! (To Everything There is a Season)", "Tutti Frutti", "Twist & Shout", "Two Hearts", "U Can't Touch This", "U Got it Bad", "Umbrella", "Un-Break My Heart", "Unbelievable", "Unchained Melody", "Uncle Albert (Admiral Halsey)", "Under the Boardwalk", "Under the Bridge", "Unforgettable", "Up Around the Bend", "Up Up & Away", "Up Where We Belong", "Upside Down", "Use Somebody", "Vaya Con Dios (may God Be With You)", "Venus", "Vision of Love", "Viva La Vida", "Vogue", "Volare", "Wabash Cannonball", "Waiting For a Girl Like You", "Wake Me Up Before You Go Go", "Wake Up Little Susie", "Walk Don't Run", "Walk Like a Man", "Walk Like an Egyptian", "Walk On By", "Walk On the Wild Side", "Walk This Way", "Wannabe", "Want Ads", "Wanted", "War", "Waterfalls", "Wayward Wind", "We Are Family", "We Are Young", "We Are the Champions", "We Are the World", "We Belong Together", "We Built This City", "We Can Work it Out", "We Didn't Start the Fire", "We Found Love", "We Got The Beat", "We Will Rock You", "We've Only Just Begun", "Weak", "Wedding Bell Blues", "West End Blues", "West End Girls", "What Goes Around Comes Around", "What a Fool Believes", "What'd I Say", "What's Going On?", "What's Love Got to Do With It?", "Whatcha Say", "Wheel of Fortune", "When Doves Cry", "When You Wish Upon a Star", "When a Man Loves a Woman", "Where Did Our Love Go", "Where is the Love?", "Whip It", "Whispering", "White Christmas", "White Rabbit", "Whole Lotta Love", "Whole Lotta Shakin' Goin' On", "Whoomp! (There it Is)", "Why Do Fools Fall in Love?", "Why Don't You Believe Me?", "Wichita Lineman", "Wicked Game", "Wild Thing", "Wild Wild West", "Will It Go Round In Circles", "Will You Love Me Tomorrow", "Winchester Cathedral", "Wind Beneath My Wings", "Wipe Out", "Wishing Well", "With Or Without You", "Without Me", "Without You", "Woman", "Won't Get Fooled Again", "Wooly Bully", "Working My Way Back to You", "YMCA", "Yakety Yak", "Yeah!", "Yellow Rose of Texas", "Yesterday", "You Ain't Seen Nothin' Yet", "You Always Hurt the One You Love", "You Are the Sunshine of My Life", "You Belong With Me", "You Belong to Me", "You Can't Hurry Love", "You Don't Bring Me Flowers", "You Don't Have to Be a Star (To Be in My Show)", "You Light Up My Life", "You Make Me Feel Brand New", "You Make Me Feel Like Dancing", "You Really Got Me", "You Send Me", "You Sexy Thing", "You Were Meant for Me", "You make Me Wanna", "You'll Never Know", "You're Beautiful", "You're So Vain", "You're Still the One", "You're the One That I Want", "You've Got a Friend", "You've Lost That Lovin' Feelin'", "Your Cheatin' Heart", "Your Song"];
var hr = { album: aa, artist: ra, genre: oa, song_name: na };
var ia = hr;
var ta = ["activist", "artist", "author", "blogger", "business owner", "coach", "creator", "designer", "developer", "dreamer", "educator", "engineer", "entrepreneur", "environmentalist", "film lover", "filmmaker", "foodie", "founder", "friend", "gamer", "geek", "grad", "inventor", "leader", "model", "musician", "nerd", "parent", "patriot", "person", "philosopher", "photographer", "public speaker", "scientist", "singer", "streamer", "student", "teacher", "traveler", "veteran", "writer"];
var la = ["{{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}} {{internet.emoji}}", "{{word.noun}} {{person.bio_supporter}}", "{{word.noun}} {{person.bio_supporter}}  {{internet.emoji}}", "{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}}", "{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}} {{internet.emoji}}"];
var sa = ["advocate", "devotee", "enthusiast", "fan", "junkie", "lover", "supporter"];
var da = { generic: ["Aaliyah", "Aaron", "Abagail", "Abbey", "Abbie", "Abbigail", "Abby", "Abdiel", "Abdul", "Abdullah", "Abe", "Abel", "Abelardo", "Abigail", "Abigale", "Abigayle", "Abner", "Abraham", "Ada", "Adah", "Adalberto", "Adaline", "Adam", "Adan", "Addie", "Addison", "Adela", "Adelbert", "Adele", "Adelia", "Adeline", "Adell", "Adella", "Adelle", "Aditya", "Adolf", "Adolfo", "Adolph", "Adolphus", "Adonis", "Adrain", "Adrian", "Adriana", "Adrianna", "Adriel", "Adrien", "Adrienne", "Afton", "Aglae", "Agnes", "Agustin", "Agustina", "Ahmad", "Ahmed", "Aida", "Aidan", "Aiden", "Aileen", "Aimee", "Aisha", "Aiyana", "Akeem", "Al", "Alaina", "Alan", "Alana", "Alanis", "Alanna", "Alayna", "Alba", "Albert", "Alberta", "Albertha", "Alberto", "Albin", "Albina", "Alda", "Alden", "Alec", "Aleen", "Alejandra", "Alejandrin", "Alek", "Alena", "Alene", "Alessandra", "Alessandro", "Alessia", "Aletha", "Alex", "Alexa", "Alexander", "Alexandra", "Alexandre", "Alexandrea", "Alexandria", "Alexandrine", "Alexandro", "Alexane", "Alexanne", "Alexie", "Alexis", "Alexys", "Alexzander", "Alf", "Alfonso", "Alfonzo", "Alford", "Alfred", "Alfreda", "Alfredo", "Ali", "Alia", "Alice", "Alicia", "Alisa", "Alisha", "Alison", "Alivia", "Aliya", "Aliyah", "Aliza", "Alize", "Allan", "Allen", "Allene", "Allie", "Allison", "Ally", "Alphonso", "Alta", "Althea", "Alva", "Alvah", "Alvena", "Alvera", "Alverta", "Alvina", "Alvis", "Alyce", "Alycia", "Alysa", "Alysha", "Alyson", "Alysson", "Amalia", "Amanda", "Amani", "Amara", "Amari", "Amaya", "Amber", "Ambrose", "Amelia", "Amelie", "Amely", "America", "Americo", "Amie", "Amina", "Amir", "Amira", "Amiya", "Amos", "Amparo", "Amy", "Amya", "Ana", "Anabel", "Anabelle", "Anahi", "Anais", "Anastacio", "Anastasia", "Anderson", "Andre", "Andreane", "Andreanne", "Andres", "Andrew", "Andy", "Angel", "Angela", "Angelica", "Angelina", "Angeline", "Angelita", "Angelo", "Angie", "Angus", "Anibal", "Anika", "Anissa", "Anita", "Aniya", "Aniyah", "Anjali", "Anna", "Annabel", "Annabell", "Annabelle", "Annalise", "Annamae", "Annamarie", "Anne", "Annetta", "Annette", "Annie", "Ansel", "Ansley", "Anthony", "Antoinette", "Antone", "Antonetta", "Antonette", "Antonia", "Antonietta", "Antonina", "Antonio", "Antwan", "Antwon", "Anya", "April", "Ara", "Araceli", "Aracely", "Arch", "Archibald", "Ardella", "Arden", "Ardith", "Arely", "Ari", "Ariane", "Arianna", "Aric", "Ariel", "Arielle", "Arjun", "Arlene", "Arlie", "Arlo", "Armand", "Armando", "Armani", "Arnaldo", "Arne", "Arno", "Arnold", "Arnoldo", "Arnulfo", "Aron", "Art", "Arthur", "Arturo", "Arvel", "Arvid", "Arvilla", "Aryanna", "Asa", "Asha", "Ashlee", "Ashleigh", "Ashley", "Ashly", "Ashlynn", "Ashton", "Ashtyn", "Asia", "Assunta", "Astrid", "Athena", "Aubree", "Aubrey", "Audie", "Audra", "Audreanne", "Audrey", "August", "Augusta", "Augustine", "Augustus", "Aurelia", "Aurelie", "Aurelio", "Aurore", "Austen", "Austin", "Austyn", "Autumn", "Ava", "Avery", "Avis", "Axel", "Ayana", "Ayden", "Ayla", "Aylin", "Baby", "Bailee", "Bailey", "Barbara", "Barney", "Baron", "Barrett", "Barry", "Bart", "Bartholome", "Barton", "Baylee", "Beatrice", "Beau", "Beaulah", "Bell", "Bella", "Belle", "Ben", "Benedict", "Benjamin", "Bennett", "Bennie", "Benny", "Benton", "Berenice", "Bernadette", "Bernadine", "Bernard", "Bernardo", "Berneice", "Bernhard", "Bernice", "Bernie", "Berniece", "Bernita", "Berry", "Bert", "Berta", "Bertha", "Bertram", "Bertrand", "Beryl", "Bessie", "Beth", "Bethany", "Bethel", "Betsy", "Bette", "Bettie", "Betty", "Bettye", "Beulah", "Beverly", "Bianka", "Bill", "Billie", "Billy", "Birdie", "Blair", "Blaise", "Blake", "Blanca", "Blanche", "Blaze", "Bo", "Bobbie", "Bobby", "Bonita", "Bonnie", "Boris", "Boyd", "Brad", "Braden", "Bradford", "Bradley", "Bradly", "Brady", "Braeden", "Brain", "Brandi", "Brando", "Brandon", "Brandt", "Brandy", "Brandyn", "Brannon", "Branson", "Brant", "Braulio", "Braxton", "Brayan", "Breana", "Breanna", "Breanne", "Brenda", "Brendan", "Brenden", "Brendon", "Brenna", "Brennan", "Brennon", "Brent", "Bret", "Brett", "Bria", "Brian", "Briana", "Brianne", "Brice", "Bridget", "Bridgette", "Bridie", "Brielle", "Brigitte", "Brionna", "Brisa", "Britney", "Brittany", "Brock", "Broderick", "Brody", "Brook", "Brooke", "Brooklyn", "Brooks", "Brown", "Bruce", "Bryana", "Bryce", "Brycen", "Bryon", "Buck", "Bud", "Buddy", "Buford", "Bulah", "Burdette", "Burley", "Burnice", "Buster", "Cade", "Caden", "Caesar", "Caitlyn", "Cale", "Caleb", "Caleigh", "Cali", "Calista", "Callie", "Camden", "Cameron", "Camila", "Camilla", "Camille", "Camren", "Camron", "Camryn", "Camylle", "Candace", "Candelario", "Candice", "Candida", "Candido", "Cara", "Carey", "Carissa", "Carlee", "Carleton", "Carley", "Carli", "Carlie", "Carlo", "Carlos", "Carlotta", "Carmel", "Carmela", "Carmella", "Carmelo", "Carmen", "Carmine", "Carol", "Carolanne", "Carole", "Carolina", "Caroline", "Carolyn", "Carolyne", "Carrie", "Carroll", "Carson", "Carter", "Cary", "Casandra", "Casey", "Casimer", "Casimir", "Casper", "Cassandra", "Cassandre", "Cassidy", "Cassie", "Catalina", "Caterina", "Catharine", "Catherine", "Cathrine", "Cathryn", "Cathy", "Cayla", "Ceasar", "Cecelia", "Cecil", "Cecile", "Cecilia", "Cedrick", "Celestine", "Celestino", "Celia", "Celine", "Cesar", "Chad", "Chadd", "Chadrick", "Chaim", "Chance", "Chandler", "Chanel", "Chanelle", "Charity", "Charlene", "Charles", "Charley", "Charlie", "Charlotte", "Chase", "Chasity", "Chauncey", "Chaya", "Chaz", "Chelsea", "Chelsey", "Chelsie", "Chesley", "Chester", "Chet", "Cheyanne", "Cheyenne", "Chloe", "Chris", "Christ", "Christa", "Christelle", "Christian", "Christiana", "Christina", "Christine", "Christop", "Christophe", "Christopher", "Christy", "Chyna", "Ciara", "Cicero", "Cielo", "Cierra", "Cindy", "Citlalli", "Clair", "Claire", "Clara", "Clarabelle", "Clare", "Clarissa", "Clark", "Claud", "Claude", "Claudia", "Claudie", "Claudine", "Clay", "Clemens", "Clement", "Clementina", "Clementine", "Clemmie", "Cleo", "Cleora", "Cleta", "Cletus", "Cleve", "Cleveland", "Clifford", "Clifton", "Clint", "Clinton", "Clotilde", "Clovis", "Cloyd", "Clyde", "Coby", "Cody", "Colby", "Cole", "Coleman", "Colin", "Colleen", "Collin", "Colt", "Colten", "Colton", "Columbus", "Concepcion", "Conner", "Connie", "Connor", "Conor", "Conrad", "Constance", "Constantin", "Consuelo", "Cooper", "Cora", "Coralie", "Corbin", "Cordelia", "Cordell", "Cordia", "Cordie", "Corene", "Corine", "Cornelius", "Cornell", "Corrine", "Cortez", "Cortney", "Cory", "Coty", "Courtney", "Coy", "Craig", "Crawford", "Creola", "Cristal", "Cristian", "Cristina", "Cristobal", "Cristopher", "Cruz", "Crystal", "Crystel", "Cullen", "Curt", "Curtis", "Cydney", "Cynthia", "Cyril", "Cyrus", "D'angelo", "Dagmar", "Dahlia", "Daija", "Daisha", "Daisy", "Dakota", "Dale", "Dallas", "Dallin", "Dalton", "Damaris", "Dameon", "Damian", "Damien", "Damion", "Damon", "Dan", "Dana", "Dandre", "Dane", "Dangelo", "Danial", "Daniela", "Daniella", "Danielle", "Danika", "Dannie", "Danny", "Dante", "Danyka", "Daphne", "Daphnee", "Daphney", "Darby", "Daren", "Darian", "Dariana", "Darien", "Dario", "Darion", "Darius", "Darlene", "Daron", "Darrel", "Darrell", "Darren", "Darrick", "Darrin", "Darrion", "Darron", "Darryl", "Darwin", "Daryl", "Dashawn", "Dasia", "Dave", "David", "Davin", "Davion", "Davon", "Davonte", "Dawn", "Dawson", "Dax", "Dayana", "Dayna", "Dayne", "Dayton", "Dean", "Deangelo", "Deanna", "Deborah", "Declan", "Dedric", "Dedrick", "Dee", "Deion", "Deja", "Dejah", "Dejon", "Dejuan", "Delaney", "Delbert", "Delfina", "Delia", "Delilah", "Dell", "Della", "Delmer", "Delores", "Delpha", "Delphia", "Delphine", "Delta", "Demarco", "Demarcus", "Demario", "Demetris", "Demetrius", "Demond", "Dena", "Denis", "Dennis", "Deon", "Deondre", "Deontae", "Deonte", "Dereck", "Derek", "Derick", "Deron", "Derrick", "Deshaun", "Deshawn", "Desiree", "Desmond", "Dessie", "Destany", "Destin", "Destinee", "Destiney", "Destini", "Destiny", "Devan", "Devante", "Deven", "Devin", "Devon", "Devonte", "Devyn", "Dewayne", "Dewitt", "Dexter", "Diamond", "Diana", "Dianna", "Diego", "Dillan", "Dillon", "Dimitri", "Dina", "Dino", "Dion", "Dixie", "Dock", "Dolly", "Dolores", "Domenic", "Domenica", "Domenick", "Domenico", "Domingo", "Dominic", "Dominique", "Don", "Donald", "Donato", "Donavon", "Donna", "Donnell", "Donnie", "Donny", "Dora", "Dorcas", "Dorian", "Doris", "Dorothea", "Dorothy", "Dorris", "Dortha", "Dorthy", "Doug", "Douglas", "Dovie", "Doyle", "Drake", "Drew", "Duane", "Dudley", "Dulce", "Duncan", "Durward", "Dustin", "Dusty", "Dwight", "Dylan", "Earl", "Earlene", "Earline", "Earnest", "Earnestine", "Easter", "Easton", "Ebba", "Ebony", "Ed", "Eda", "Edd", "Eddie", "Eden", "Edgar", "Edgardo", "Edison", "Edmond", "Edmund", "Edna", "Eduardo", "Edward", "Edwardo", "Edwin", "Edwina", "Edyth", "Edythe", "Effie", "Efrain", "Efren", "Eileen", "Einar", "Eino", "Eladio", "Elaina", "Elbert", "Elda", "Eldon", "Eldora", "Eldred", "Eldridge", "Eleanora", "Eleanore", "Eleazar", "Electa", "Elena", "Elenor", "Elenora", "Eleonore", "Elfrieda", "Eli", "Elian", "Eliane", "Elias", "Eliezer", "Elijah", "Elinor", "Elinore", "Elisa", "Elisabeth", "Elise", "Eliseo", "Elisha", "Elissa", "Eliza", "Elizabeth", "Ella", "Ellen", "Ellie", "Elliot", "Elliott", "Ellis", "Ellsworth", "Elmer", "Elmira", "Elmo", "Elmore", "Elna", "Elnora", "Elody", "Eloisa", "Eloise", "Elouise", "Eloy", "Elroy", "Elsa", "Else", "Elsie", "Elta", "Elton", "Elva", "Elvera", "Elvie", "Elvis", "Elwin", "Elwyn", "Elyse", "Elyssa", "Elza", "Emanuel", "Emelia", "Emelie", "Emely", "Emerald", "Emerson", "Emery", "Emie", "Emil", "Emile", "Emilia", "Emiliano", "Emilie", "Emilio", "Emily", "Emma", "Emmalee", "Emmanuel", "Emmanuelle", "Emmet", "Emmett", "Emmie", "Emmitt", "Emmy", "Emory", "Ena", "Enid", "Enoch", "Enola", "Enos", "Enrico", "Enrique", "Ephraim", "Era", "Eriberto", "Eric", "Erica", "Erich", "Erick", "Ericka", "Erik", "Erika", "Erin", "Erling", "Erna", "Ernest", "Ernestina", "Ernestine", "Ernesto", "Ernie", "Ervin", "Erwin", "Eryn", "Esmeralda", "Esperanza", "Esta", "Esteban", "Estefania", "Estel", "Estell", "Estella", "Estelle", "Estevan", "Esther", "Estrella", "Etha", "Ethan", "Ethel", "Ethelyn", "Ethyl", "Ettie", "Eudora", "Eugene", "Eugenia", "Eula", "Eulah", "Eulalia", "Euna", "Eunice", "Eusebio", "Eva", "Evalyn", "Evan", "Evangeline", "Evans", "Eve", "Eveline", "Evelyn", "Everardo", "Everett", "Everette", "Evert", "Evie", "Ewald", "Ewell", "Ezekiel", "Ezequiel", "Ezra", "Fabian", "Fabiola", "Fae", "Fannie", "Fanny", "Fatima", "Faustino", "Fausto", "Favian", "Fay", "Faye", "Federico", "Felicia", "Felicita", "Felicity", "Felipa", "Felipe", "Felix", "Felton", "Fermin", "Fern", "Fernando", "Ferne", "Fidel", "Filiberto", "Filomena", "Finn", "Fiona", "Flavie", "Flavio", "Fleta", "Fletcher", "Flo", "Florence", "Florencio", "Florian", "Florida", "Florine", "Flossie", "Floy", "Floyd", "Ford", "Forest", "Forrest", "Foster", "Frances", "Francesca", "Francesco", "Francis", "Francisca", "Francisco", "Franco", "Frank", "Frankie", "Franz", "Fred", "Freda", "Freddie", "Freddy", "Frederic", "Frederick", "Frederik", "Frederique", "Fredrick", "Fredy", "Freeda", "Freeman", "Freida", "Frida", "Frieda", "Friedrich", "Fritz", "Furman", "Gabe", "Gabriel", "Gabriella", "Gabrielle", "Gaetano", "Gage", "Gail", "Gardner", "Garett", "Garfield", "Garland", "Garnet", "Garnett", "Garret", "Garrett", "Garrick", "Garrison", "Garry", "Garth", "Gaston", "Gavin", "Gayle", "Gene", "General", "Genesis", "Genevieve", "Gennaro", "Genoveva", "Geo", "Geoffrey", "George", "Georgette", "Georgiana", "Georgianna", "Geovanni", "Geovanny", "Geovany", "Gerald", "Geraldine", "Gerard", "Gerardo", "Gerda", "Gerhard", "Germaine", "German", "Gerry", "Gerson", "Gertrude", "Gia", "Gianni", "Gideon", "Gilbert", "Gilberto", "Gilda", "Giles", "Gillian", "Gina", "Gino", "Giovani", "Giovanna", "Giovanni", "Giovanny", "Gisselle", "Giuseppe", "Gladyce", "Gladys", "Glen", "Glenda", "Glenna", "Glennie", "Gloria", "Godfrey", "Golda", "Golden", "Gonzalo", "Gordon", "Grace", "Gracie", "Graciela", "Grady", "Graham", "Grant", "Granville", "Grayce", "Grayson", "Green", "Greg", "Gregg", "Gregoria", "Gregorio", "Gregory", "Greta", "Gretchen", "Greyson", "Griffin", "Grover", "Guadalupe", "Gudrun", "Guido", "Guillermo", "Guiseppe", "Gunnar", "Gunner", "Gus", "Gussie", "Gust", "Gustave", "Guy", "Gwen", "Gwendolyn", "Hadley", "Hailee", "Hailey", "Hailie", "Hal", "Haleigh", "Haley", "Halie", "Halle", "Hallie", "Hank", "Hanna", "Hannah", "Hans", "Hardy", "Harley", "Harmon", "Harmony", "Harold", "Harrison", "Harry", "Harvey", "Haskell", "Hassan", "Hassie", "Hattie", "Haven", "Hayden", "Haylee", "Hayley", "Haylie", "Hazel", "Hazle", "Heath", "Heather", "Heaven", "Heber", "Hector", "Heidi", "Helen", "Helena", "Helene", "Helga", "Hellen", "Helmer", "Heloise", "Henderson", "Henri", "Henriette", "Henry", "Herbert", "Herman", "Hermann", "Hermina", "Herminia", "Herminio", "Hershel", "Herta", "Hertha", "Hester", "Hettie", "Hilario", "Hilbert", "Hilda", "Hildegard", "Hillard", "Hillary", "Hilma", "Hilton", "Hipolito", "Hiram", "Hobart", "Holden", "Hollie", "Hollis", "Holly", "Hope", "Horace", "Horacio", "Hortense", "Hosea", "Houston", "Howard", "Howell", "Hoyt", "Hubert", "Hudson", "Hugh", "Hulda", "Humberto", "Hunter", "Hyman", "Ian", "Ibrahim", "Icie", "Ida", "Idell", "Idella", "Ignacio", "Ignatius", "Ike", "Ila", "Ilene", "Iliana", "Ima", "Imani", "Imelda", "Immanuel", "Imogene", "Ines", "Irma", "Irving", "Irwin", "Isaac", "Isabel", "Isabell", "Isabella", "Isabelle", "Isac", "Isadore", "Isai", "Isaiah", "Isaias", "Isidro", "Ismael", "Isobel", "Isom", "Israel", "Issac", "Itzel", "Iva", "Ivah", "Ivory", "Ivy", "Izabella", "Izaiah", "Jabari", "Jace", "Jacey", "Jacinthe", "Jacinto", "Jack", "Jackeline", "Jackie", "Jacklyn", "Jackson", "Jacky", "Jaclyn", "Jacquelyn", "Jacques", "Jacynthe", "Jada", "Jade", "Jaden", "Jadon", "Jadyn", "Jaeden", "Jaida", "Jaiden", "Jailyn", "Jaime", "Jairo", "Jakayla", "Jake", "Jakob", "Jaleel", "Jalen", "Jalon", "Jalyn", "Jamaal", "Jamal", "Jamar", "Jamarcus", "Jamel", "Jameson", "Jamey", "Jamie", "Jamil", "Jamir", "Jamison", "Jammie", "Jan", "Jana", "Janae", "Jane", "Janelle", "Janessa", "Janet", "Janice", "Janick", "Janie", "Janis", "Janiya", "Jannie", "Jany", "Jaquan", "Jaquelin", "Jaqueline", "Jared", "Jaren", "Jarod", "Jaron", "Jarred", "Jarrell", "Jarret", "Jarrett", "Jarrod", "Jarvis", "Jasen", "Jasmin", "Jason", "Jasper", "Jaunita", "Javier", "Javon", "Javonte", "Jay", "Jayce", "Jaycee", "Jayda", "Jayde", "Jayden", "Jaydon", "Jaylan", "Jaylen", "Jaylin", "Jaylon", "Jayme", "Jayne", "Jayson", "Jazlyn", "Jazmin", "Jazmyn", "Jazmyne", "Jean", "Jeanette", "Jeanie", "Jeanne", "Jed", "Jedediah", "Jedidiah", "Jeff", "Jefferey", "Jeffery", "Jeffrey", "Jeffry", "Jena", "Jenifer", "Jennie", "Jennifer", "Jennings", "Jennyfer", "Jensen", "Jerad", "Jerald", "Jeramie", "Jeramy", "Jerel", "Jeremie", "Jeremy", "Jermain", "Jermaine", "Jermey", "Jerod", "Jerome", "Jeromy", "Jerrell", "Jerrod", "Jerrold", "Jerry", "Jess", "Jesse", "Jessica", "Jessie", "Jessika", "Jessy", "Jessyca", "Jesus", "Jett", "Jettie", "Jevon", "Jewel", "Jewell", "Jillian", "Jimmie", "Jimmy", "Jo", "Joan", "Joana", "Joanie", "Joanne", "Joannie", "Joanny", "Joany", "Joaquin", "Jocelyn", "Jodie", "Jody", "Joe", "Joel", "Joelle", "Joesph", "Joey", "Johan", "Johann", "Johanna", "Johathan", "John", "Johnathan", "Johnathon", "Johnnie", "Johnny", "Johnpaul", "Johnson", "Jolie", "Jon", "Jonas", "Jonatan", "Jonathan", "Jonathon", "Jordan", "Jordane", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Jose", "Josefa", "Josefina", "Joseph", "Josephine", "Josh", "Joshua", "Joshuah", "Josiah", "Josiane", "Josianne", "Josie", "Josue", "Jovan", "Jovani", "Jovanny", "Jovany", "Joy", "Joyce", "Juana", "Juanita", "Judah", "Judd", "Jude", "Judge", "Judson", "Judy", "Jules", "Julia", "Julian", "Juliana", "Julianne", "Julie", "Julien", "Juliet", "Julio", "Julius", "June", "Junior", "Junius", "Justen", "Justice", "Justina", "Justine", "Juston", "Justus", "Justyn", "Juvenal", "Juwan", "Kacey", "Kaci", "Kacie", "Kade", "Kaden", "Kadin", "Kaela", "Kaelyn", "Kaia", "Kailee", "Kailey", "Kailyn", "Kaitlin", "Kaitlyn", "Kale", "Kaleb", "Kaleigh", "Kaley", "Kali", "Kallie", "Kameron", "Kamille", "Kamren", "Kamron", "Kamryn", "Kane", "Kara", "Kareem", "Karelle", "Karen", "Kari", "Kariane", "Karianne", "Karina", "Karine", "Karl", "Karlee", "Karley", "Karli", "Karlie", "Karolann", "Karson", "Kasandra", "Kasey", "Kassandra", "Katarina", "Katelin", "Katelyn", "Katelynn", "Katharina", "Katherine", "Katheryn", "Kathleen", "Kathlyn", "Kathryn", "Kathryne", "Katlyn", "Katlynn", "Katrina", "Katrine", "Kattie", "Kavon", "Kay", "Kaya", "Kaycee", "Kayden", "Kayla", "Kaylah", "Kaylee", "Kayleigh", "Kayley", "Kayli", "Kaylie", "Kaylin", "Keagan", "Keanu", "Keara", "Keaton", "Keegan", "Keeley", "Keely", "Keenan", "Keira", "Keith", "Kellen", "Kelley", "Kelli", "Kellie", "Kelly", "Kelsi", "Kelsie", "Kelton", "Kelvin", "Ken", "Kendall", "Kendra", "Kendrick", "Kenna", "Kennedi", "Kennedy", "Kenneth", "Kennith", "Kenny", "Kenton", "Kenya", "Kenyatta", "Kenyon", "Keon", "Keshaun", "Keshawn", "Keven", "Kevin", "Kevon", "Keyon", "Keyshawn", "Khalid", "Khalil", "Kian", "Kiana", "Kianna", "Kiara", "Kiarra", "Kiel", "Kiera", "Kieran", "Kiley", "Kim", "Kimberly", "King", "Kip", "Kira", "Kirk", "Kirsten", "Kirstin", "Kitty", "Kobe", "Koby", "Kody", "Kolby", "Kole", "Korbin", "Korey", "Kory", "Kraig", "Kris", "Krista", "Kristian", "Kristin", "Kristina", "Kristofer", "Kristoffer", "Kristopher", "Kristy", "Krystal", "Krystel", "Krystina", "Kurt", "Kurtis", "Kyla", "Kyle", "Kylee", "Kyleigh", "Kyler", "Kylie", "Kyra", "Lacey", "Lacy", "Ladarius", "Lafayette", "Laila", "Laisha", "Lamar", "Lambert", "Lamont", "Lance", "Landen", "Lane", "Laney", "Larissa", "Laron", "Larry", "Larue", "Laura", "Laurel", "Lauren", "Laurence", "Lauretta", "Lauriane", "Laurianne", "Laurie", "Laurine", "Laury", "Lauryn", "Lavada", "Lavern", "Laverna", "Laverne", "Lavina", "Lavinia", "Lavon", "Lavonne", "Lawrence", "Lawson", "Layla", "Layne", "Lazaro", "Lea", "Leann", "Leanna", "Leanne", "Leatha", "Leda", "Lee", "Leif", "Leila", "Leilani", "Lela", "Lelah", "Leland", "Lelia", "Lempi", "Lemuel", "Lenna", "Lennie", "Lenny", "Lenora", "Lenore", "Leo", "Leola", "Leon", "Leonard", "Leonardo", "Leone", "Leonel", "Leonie", "Leonor", "Leonora", "Leopold", "Leopoldo", "Leora", "Lera", "Lesley", "Leslie", "Lesly", "Lessie", "Lester", "Leta", "Letha", "Letitia", "Levi", "Lew", "Lewis", "Lexi", "Lexie", "Lexus", "Lia", "Liam", "Liana", "Libbie", "Libby", "Lila", "Lilian", "Liliana", "Liliane", "Lilla", "Lillian", "Lilliana", "Lillie", "Lilly", "Lily", "Lilyan", "Lina", "Lincoln", "Linda", "Lindsay", "Lindsey", "Linnea", "Linnie", "Linwood", "Lionel", "Lisa", "Lisandro", "Lisette", "Litzy", "Liza", "Lizeth", "Lizzie", "Llewellyn", "Lloyd", "Logan", "Lois", "Lola", "Lolita", "Loma", "Lon", "London", "Lonie", "Lonnie", "Lonny", "Lonzo", "Lora", "Loraine", "Loren", "Lorena", "Lorenz", "Lorenza", "Lorenzo", "Lori", "Lorine", "Lorna", "Lottie", "Lou", "Louie", "Louisa", "Lourdes", "Louvenia", "Lowell", "Loy", "Loyal", "Loyce", "Lucas", "Luciano", "Lucie", "Lucienne", "Lucile", "Lucinda", "Lucio", "Lucious", "Lucius", "Lucy", "Ludie", "Ludwig", "Lue", "Luella", "Luigi", "Luis", "Luisa", "Lukas", "Lula", "Lulu", "Luna", "Lupe", "Lura", "Lurline", "Luther", "Luz", "Lyda", "Lydia", "Lyla", "Lynn", "Lyric", "Lysanne", "Mabel", "Mabelle", "Mable", "Mac", "Macey", "Maci", "Macie", "Mack", "Mackenzie", "Macy", "Madaline", "Madalyn", "Maddison", "Madeline", "Madelyn", "Madelynn", "Madge", "Madie", "Madilyn", "Madisen", "Madison", "Madisyn", "Madonna", "Madyson", "Mae", "Maegan", "Maeve", "Mafalda", "Magali", "Magdalen", "Magdalena", "Maggie", "Magnolia", "Magnus", "Maia", "Maida", "Maiya", "Major", "Makayla", "Makenna", "Makenzie", "Malachi", "Malcolm", "Malika", "Malinda", "Mallie", "Mallory", "Malvina", "Mandy", "Manley", "Manuel", "Manuela", "Mara", "Marc", "Marcel", "Marcelina", "Marcelino", "Marcella", "Marcelle", "Marcellus", "Marcelo", "Marcia", "Marco", "Marcos", "Marcus", "Margaret", "Margarete", "Margarett", "Margaretta", "Margarette", "Margarita", "Marge", "Margie", "Margot", "Margret", "Marguerite", "Maria", "Mariah", "Mariam", "Marian", "Mariana", "Mariane", "Marianna", "Marianne", "Mariano", "Maribel", "Marie", "Mariela", "Marielle", "Marietta", "Marilie", "Marilou", "Marilyne", "Marina", "Mario", "Marion", "Marisa", "Marisol", "Maritza", "Marjolaine", "Marjorie", "Marjory", "Mark", "Markus", "Marlee", "Marlen", "Marlene", "Marley", "Marlin", "Marlon", "Marques", "Marquis", "Marquise", "Marshall", "Marta", "Martin", "Martina", "Martine", "Marty", "Marvin", "Mary", "Maryam", "Maryjane", "Maryse", "Mason", "Mateo", "Mathew", "Mathias", "Mathilde", "Matilda", "Matilde", "Matt", "Matteo", "Mattie", "Maud", "Maude", "Maudie", "Maureen", "Maurice", "Mauricio", "Maurine", "Maverick", "Mavis", "Max", "Maxie", "Maxime", "Maximilian", "Maximillia", "Maximillian", "Maximo", "Maximus", "Maxine", "Maxwell", "May", "Maya", "Maybell", "Maybelle", "Maye", "Maymie", "Maynard", "Mayra", "Mazie", "Mckayla", "Mckenna", "Mckenzie", "Meagan", "Meaghan", "Meda", "Megane", "Meggie", "Meghan", "Mekhi", "Melany", "Melba", "Melisa", "Melissa", "Mellie", "Melody", "Melvin", "Melvina", "Melyna", "Melyssa", "Mercedes", "Meredith", "Merl", "Merle", "Merlin", "Merritt", "Mertie", "Mervin", "Meta", "Mia", "Micaela", "Micah", "Michael", "Michaela", "Michale", "Micheal", "Michel", "Michele", "Michelle", "Miguel", "Mikayla", "Mike", "Mikel", "Milan", "Miles", "Milford", "Miller", "Millie", "Milo", "Milton", "Mina", "Minerva", "Minnie", "Miracle", "Mireille", "Mireya", "Misael", "Missouri", "Misty", "Mitchel", "Mitchell", "Mittie", "Modesta", "Modesto", "Mohamed", "Mohammad", "Mohammed", "Moises", "Mollie", "Molly", "Mona", "Monica", "Monique", "Monroe", "Monserrat", "Monserrate", "Montana", "Monte", "Monty", "Morgan", "Moriah", "Morris", "Mortimer", "Morton", "Mose", "Moses", "Moshe", "Mossie", "Mozell", "Mozelle", "Muhammad", "Muriel", "Murl", "Murphy", "Murray", "Mustafa", "Mya", "Myah", "Mylene", "Myles", "Myra", "Myriam", "Myrl", "Myrna", "Myron", "Myrtice", "Myrtie", "Myrtis", "Myrtle", "Nadia", "Nakia", "Name", "Nannie", "Naomi", "Naomie", "Napoleon", "Narciso", "Nash", "Nasir", "Nat", "Natalia", "Natalie", "Natasha", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathen", "Nayeli", "Neal", "Ned", "Nedra", "Neha", "Neil", "Nelda", "Nella", "Nelle", "Nellie", "Nels", "Nelson", "Neoma", "Nestor", "Nettie", "Neva", "Newell", "Newton", "Nia", "Nicholas", "Nicholaus", "Nichole", "Nick", "Nicklaus", "Nickolas", "Nico", "Nicola", "Nicolas", "Nicole", "Nicolette", "Nigel", "Nikita", "Nikki", "Nikko", "Niko", "Nikolas", "Nils", "Nina", "Noah", "Noble", "Noe", "Noel", "Noelia", "Noemi", "Noemie", "Noemy", "Nola", "Nolan", "Nona", "Nora", "Norbert", "Norberto", "Norene", "Norma", "Norris", "Norval", "Norwood", "Nova", "Novella", "Nya", "Nyah", "Nyasia", "Obie", "Oceane", "Ocie", "Octavia", "Oda", "Odell", "Odessa", "Odie", "Ofelia", "Okey", "Ola", "Olaf", "Ole", "Olen", "Oleta", "Olga", "Olin", "Oliver", "Ollie", "Oma", "Omari", "Omer", "Ona", "Onie", "Opal", "Ophelia", "Ora", "Oral", "Oran", "Oren", "Orie", "Orin", "Orion", "Orland", "Orlando", "Orlo", "Orpha", "Orrin", "Orval", "Orville", "Osbaldo", "Osborne", "Oscar", "Osvaldo", "Oswald", "Oswaldo", "Otha", "Otho", "Otilia", "Otis", "Ottilie", "Ottis", "Otto", "Ova", "Owen", "Ozella", "Pablo", "Paige", "Palma", "Pamela", "Pansy", "Paolo", "Paris", "Parker", "Pascale", "Pasquale", "Pat", "Patience", "Patricia", "Patrick", "Patsy", "Pattie", "Paul", "Paula", "Pauline", "Paxton", "Payton", "Pearl", "Pearlie", "Pearline", "Pedro", "Peggie", "Penelope", "Percival", "Percy", "Perry", "Pete", "Peter", "Petra", "Peyton", "Philip", "Phoebe", "Phyllis", "Pierce", "Pierre", "Pietro", "Pink", "Pinkie", "Piper", "Polly", "Porter", "Precious", "Presley", "Preston", "Price", "Prince", "Princess", "Priscilla", "Providenci", "Prudence", "Queen", "Queenie", "Quentin", "Quincy", "Quinn", "Quinten", "Quinton", "Rachael", "Rachel", "Rachelle", "Rae", "Raegan", "Rafael", "Rafaela", "Raheem", "Rahsaan", "Rahul", "Raina", "Raleigh", "Ralph", "Ramiro", "Ramon", "Ramona", "Randal", "Randall", "Randi", "Randy", "Ransom", "Raoul", "Raphael", "Raphaelle", "Raquel", "Rashad", "Rashawn", "Rasheed", "Raul", "Raven", "Ray", "Raymond", "Raymundo", "Reagan", "Reanna", "Reba", "Rebeca", "Rebecca", "Rebeka", "Rebekah", "Reece", "Reed", "Reese", "Regan", "Reggie", "Reginald", "Reid", "Reilly", "Reina", "Reinhold", "Remington", "Rene", "Renee", "Ressie", "Reta", "Retha", "Retta", "Reuben", "Reva", "Rex", "Rey", "Reyes", "Reymundo", "Reyna", "Reynold", "Rhea", "Rhett", "Rhianna", "Rhiannon", "Rhoda", "Ricardo", "Richard", "Richie", "Richmond", "Rick", "Rickey", "Rickie", "Ricky", "Rico", "Rigoberto", "Riley", "Rita", "River", "Robb", "Robbie", "Robert", "Roberta", "Roberto", "Robin", "Robyn", "Rocio", "Rocky", "Rod", "Roderick", "Rodger", "Rodolfo", "Rodrick", "Rodrigo", "Roel", "Rogelio", "Roger", "Rogers", "Rolando", "Rollin", "Roma", "Romaine", "Roman", "Ron", "Ronaldo", "Ronny", "Roosevelt", "Rory", "Rosa", "Rosalee", "Rosalia", "Rosalind", "Rosalinda", "Rosalyn", "Rosamond", "Rosanna", "Rosario", "Roscoe", "Rose", "Rosella", "Roselyn", "Rosemarie", "Rosemary", "Rosendo", "Rosetta", "Rosie", "Rosina", "Roslyn", "Ross", "Rossie", "Rowan", "Rowena", "Rowland", "Roxane", "Roxanne", "Roy", "Royal", "Royce", "Rozella", "Ruben", "Rubie", "Ruby", "Rubye", "Rudolph", "Rudy", "Rupert", "Russ", "Russel", "Russell", "Rusty", "Ruth", "Ruthe", "Ruthie", "Ryan", "Ryann", "Ryder", "Rylan", "Rylee", "Ryleigh", "Ryley", "Sabina", "Sabrina", "Sabryna", "Sadie", "Sadye", "Sage", "Saige", "Sallie", "Sally", "Salma", "Salvador", "Salvatore", "Sam", "Samanta", "Samantha", "Samara", "Samir", "Sammie", "Sammy", "Samson", "Sandra", "Sandrine", "Sandy", "Sanford", "Santa", "Santiago", "Santina", "Santino", "Santos", "Sarah", "Sarai", "Sarina", "Sasha", "Saul", "Savanah", "Savanna", "Savannah", "Savion", "Scarlett", "Schuyler", "Scot", "Scottie", "Scotty", "Seamus", "Sean", "Sebastian", "Sedrick", "Selena", "Selina", "Selmer", "Serena", "Serenity", "Seth", "Shad", "Shaina", "Shakira", "Shana", "Shane", "Shanel", "Shanelle", "Shania", "Shanie", "Shaniya", "Shanna", "Shannon", "Shanny", "Shanon", "Shany", "Sharon", "Shaun", "Shawn", "Shawna", "Shaylee", "Shayna", "Shayne", "Shea", "Sheila", "Sheldon", "Shemar", "Sheridan", "Sherman", "Sherwood", "Shirley", "Shyann", "Shyanne", "Sibyl", "Sid", "Sidney", "Sienna", "Sierra", "Sigmund", "Sigrid", "Sigurd", "Silas", "Sim", "Simeon", "Simone", "Sincere", "Sister", "Skye", "Skyla", "Skylar", "Sofia", "Soledad", "Solon", "Sonia", "Sonny", "Sonya", "Sophia", "Sophie", "Spencer", "Stacey", "Stacy", "Stan", "Stanford", "Stanley", "Stanton", "Stefan", "Stefanie", "Stella", "Stephan", "Stephania", "Stephanie", "Stephany", "Stephen", "Stephon", "Sterling", "Steve", "Stevie", "Stewart", "Stone", "Stuart", "Summer", "Sunny", "Susan", "Susana", "Susanna", "Susie", "Suzanne", "Sven", "Syble", "Sydnee", "Sydney", "Sydni", "Sydnie", "Sylvan", "Sylvester", "Sylvia", "Tabitha", "Tad", "Talia", "Talon", "Tamara", "Tamia", "Tania", "Tanner", "Tanya", "Tara", "Taryn", "Tate", "Tatum", "Tatyana", "Taurean", "Tavares", "Taya", "Taylor", "Teagan", "Ted", "Telly", "Terence", "Teresa", "Terrance", "Terrell", "Terrence", "Terrill", "Terry", "Tess", "Tessie", "Tevin", "Thad", "Thaddeus", "Thalia", "Thea", "Thelma", "Theo", "Theodora", "Theodore", "Theresa", "Therese", "Theresia", "Theron", "Thomas", "Thora", "Thurman", "Tia", "Tiana", "Tianna", "Tiara", "Tierra", "Tiffany", "Tillman", "Timmothy", "Timmy", "Timothy", "Tina", "Tito", "Titus", "Tobin", "Toby", "Tod", "Tom", "Tomas", "Tomasa", "Tommie", "Toney", "Toni", "Tony", "Torey", "Torrance", "Torrey", "Toy", "Trace", "Tracey", "Tracy", "Travis", "Travon", "Tre", "Tremaine", "Tremayne", "Trent", "Trenton", "Tressa", "Tressie", "Treva", "Trever", "Trevion", "Trevor", "Trey", "Trinity", "Trisha", "Tristian", "Tristin", "Triston", "Troy", "Trudie", "Trycia", "Trystan", "Turner", "Twila", "Tyler", "Tyra", "Tyree", "Tyreek", "Tyrel", "Tyrell", "Tyrese", "Tyrique", "Tyshawn", "Tyson", "Ubaldo", "Ulices", "Ulises", "Una", "Unique", "Urban", "Uriah", "Uriel", "Ursula", "Vada", "Valentin", "Valentina", "Valentine", "Valerie", "Vallie", "Van", "Vance", "Vanessa", "Vaughn", "Veda", "Velda", "Vella", "Velma", "Velva", "Vena", "Verda", "Verdie", "Vergie", "Verla", "Verlie", "Vern", "Verna", "Verner", "Vernice", "Vernie", "Vernon", "Verona", "Veronica", "Vesta", "Vicenta", "Vicente", "Vickie", "Vicky", "Victor", "Victoria", "Vida", "Vidal", "Vilma", "Vince", "Vincent", "Vincenza", "Vincenzo", "Vinnie", "Viola", "Violet", "Violette", "Virgie", "Virgil", "Virginia", "Virginie", "Vita", "Vito", "Viva", "Vivian", "Viviane", "Vivianne", "Vivien", "Vivienne", "Vladimir", "Wade", "Waino", "Waldo", "Walker", "Wallace", "Walter", "Walton", "Wanda", "Ward", "Warren", "Watson", "Wava", "Waylon", "Wayne", "Webster", "Weldon", "Wellington", "Wendell", "Wendy", "Werner", "Westley", "Weston", "Whitney", "Wilber", "Wilbert", "Wilburn", "Wiley", "Wilford", "Wilfred", "Wilfredo", "Wilfrid", "Wilhelm", "Wilhelmine", "Will", "Willa", "Willard", "William", "Willie", "Willis", "Willow", "Willy", "Wilma", "Wilmer", "Wilson", "Wilton", "Winfield", "Winifred", "Winnifred", "Winona", "Winston", "Woodrow", "Wyatt", "Wyman", "Xander", "Xavier", "Xzavier", "Yadira", "Yasmeen", "Yasmin", "Yasmine", "Yazmin", "Yesenia", "Yessenia", "Yolanda", "Yoshiko", "Yvette", "Yvonne", "Zachariah", "Zachary", "Zachery", "Zack", "Zackary", "Zackery", "Zakary", "Zander", "Zane", "Zaria", "Zechariah", "Zelda", "Zella", "Zelma", "Zena", "Zetta", "Zion", "Zita", "Zoe", "Zoey", "Zoie", "Zoila", "Zola", "Zora", "Zula"], female: ["Ada", "Adrienne", "Agnes", "Alberta", "Alexandra", "Alexis", "Alice", "Alicia", "Alison", "Allison", "Alma", "Alyssa", "Amanda", "Amber", "Amelia", "Amy", "Ana", "Andrea", "Angel", "Angela", "Angelica", "Angelina", "Angie", "Anita", "Ann", "Anna", "Anne", "Annette", "Annie", "Antoinette", "Antonia", "April", "Arlene", "Ashley", "Audrey", "Barbara", "Beatrice", "Becky", "Belinda", "Bernadette", "Bernice", "Bertha", "Bessie", "Beth", "Bethany", "Betsy", "Betty", "Beulah", "Beverly", "Billie", "Blanca", "Blanche", "Bobbie", "Bonnie", "Brandi", "Brandy", "Brenda", "Bridget", "Brittany", "Brooke", "Camille", "Candace", "Candice", "Carla", "Carmen", "Carol", "Carole", "Caroline", "Carolyn", "Carrie", "Casey", "Cassandra", "Catherine", "Cathy", "Cecelia", "Cecilia", "Celia", "Charlene", "Charlotte", "Chelsea", "Cheryl", "Christie", "Christina", "Christine", "Christy", "Cindy", "Claire", "Clara", "Claudia", "Colleen", "Connie", "Constance", "Cora", "Courtney", "Cristina", "Crystal", "Cynthia", "Daisy", "Dana", "Danielle", "Darla", "Darlene", "Dawn", "Deanna", "Debbie", "Deborah", "Debra", "Delia", "Della", "Delores", "Denise", "Desiree", "Diana", "Diane", "Dianna", "Dianne", "Dixie", "Dolores", "Donna", "Dora", "Doreen", "Doris", "Dorothy", "Ebony", "Edith", "Edna", "Eileen", "Elaine", "Eleanor", "Elena", "Elisa", "Elizabeth", "Ella", "Ellen", "Eloise", "Elsa", "Elsie", "Elvira", "Emily", "Emma", "Erica", "Erika", "Erin", "Erma", "Ernestine", "Essie", "Estelle", "Esther", "Ethel", "Eula", "Eunice", "Eva", "Evelyn", "Faith", "Fannie", "Faye", "Felicia", "Flora", "Florence", "Frances", "Francis", "Freda", "Gail", "Gayle", "Geneva", "Genevieve", "Georgia", "Geraldine", "Gertrude", "Gina", "Ginger", "Gladys", "Glenda", "Gloria", "Grace", "Gretchen", "Guadalupe", "Gwen", "Gwendolyn", "Hannah", "Harriet", "Hattie", "Hazel", "Heather", "Heidi", "Helen", "Henrietta", "Hilda", "Holly", "Hope", "Ida", "Inez", "Irene", "Iris", "Irma", "Isabel", "Jackie", "Jacqueline", "Jacquelyn", "Jaime", "Jamie", "Jan", "Jana", "Jane", "Janet", "Janice", "Janie", "Janis", "Jasmine", "Jean", "Jeanette", "Jeanne", "Jeannette", "Jeannie", "Jenna", "Jennie", "Jennifer", "Jenny", "Jessica", "Jessie", "Jill", "Jo", "Joan", "Joann", "Joanna", "Joanne", "Jodi", "Jody", "Johanna", "Johnnie", "Josefina", "Josephine", "Joy", "Joyce", "Juana", "Juanita", "Judith", "Judy", "Julia", "Julie", "June", "Kara", "Karen", "Kari", "Karla", "Kate", "Katherine", "Kathleen", "Kathryn", "Kathy", "Katie", "Katrina", "Kay", "Kayla", "Kelley", "Kelli", "Kellie", "Kelly", "Kendra", "Kerry", "Kim", "Kimberly", "Krista", "Kristen", "Kristi", "Kristie", "Kristin", "Kristina", "Kristine", "Kristy", "Krystal", "Lana", "Latoya", "Laura", "Lauren", "Laurie", "Laverne", "Leah", "Lee", "Leigh", "Lela", "Lena", "Leona", "Leslie", "Leticia", "Lila", "Lillian", "Lillie", "Linda", "Lindsay", "Lindsey", "Lisa", "Lois", "Lola", "Lora", "Lorena", "Lorene", "Loretta", "Lori", "Lorraine", "Louise", "Lucia", "Lucille", "Lucy", "Lula", "Luz", "Lydia", "Lynda", "Lynette", "Lynn", "Lynne", "Mabel", "Mable", "Madeline", "Mae", "Maggie", "Mamie", "Mandy", "Marcella", "Marcia", "Margaret", "Margarita", "Margie", "Marguerite", "Maria", "Marian", "Marianne", "Marie", "Marilyn", "Marion", "Marjorie", "Marlene", "Marsha", "Marta", "Martha", "Mary", "Maryann", "Mattie", "Maureen", "Maxine", "May", "Megan", "Meghan", "Melanie", "Melba", "Melinda", "Melissa", "Melody", "Mercedes", "Meredith", "Michele", "Michelle", "Mildred", "Mindy", "Minnie", "Miranda", "Miriam", "Misty", "Molly", "Mona", "Monica", "Monique", "Muriel", "Myra", "Myrtle", "Nadine", "Nancy", "Naomi", "Natalie", "Natasha", "Nellie", "Nettie", "Nichole", "Nicole", "Nina", "Nora", "Norma", "Olga", "Olive", "Olivia", "Ollie", "Opal", "Ora", "Pam", "Pamela", "Pat", "Patricia", "Patsy", "Patti", "Patty", "Paula", "Paulette", "Pauline", "Pearl", "Peggy", "Penny", "Phyllis", "Priscilla", "Rachael", "Rachel", "Ramona", "Raquel", "Rebecca", "Regina", "Renee", "Rhonda", "Rita", "Roberta", "Robin", "Robyn", "Rochelle", "Rosa", "Rosalie", "Rose", "Rosemarie", "Rosemary", "Rosie", "Roxanne", "Ruby", "Ruth", "Sabrina", "Sadie", "Sally", "Samantha", "Sandra", "Sandy", "Sara", "Sarah", "Shannon", "Shari", "Sharon", "Shawna", "Sheila", "Shelia", "Shelley", "Shelly", "Sheri", "Sherri", "Sherry", "Sheryl", "Shirley", "Silvia", "Sonia", "Sonja", "Sonya", "Sophia", "Sophie", "Stacey", "Stacy", "Stella", "Stephanie", "Sue", "Susan", "Susie", "Suzanne", "Sylvia", "Tabitha", "Tamara", "Tami", "Tammy", "Tanya", "Tara", "Tasha", "Teresa", "Teri", "Terri", "Terry", "Thelma", "Theresa", "Tiffany", "Tina", "Toni", "Tonya", "Tracey", "Traci", "Tracy", "Tricia", "Valerie", "Vanessa", "Velma", "Vera", "Verna", "Veronica", "Vicki", "Vickie", "Vicky", "Victoria", "Viola", "Violet", "Virginia", "Vivian", "Wanda", "Wendy", "Whitney", "Willie", "Wilma", "Winifred", "Yolanda", "Yvette", "Yvonne"], male: ["Aaron", "Abel", "Abraham", "Adam", "Adrian", "Al", "Alan", "Albert", "Alberto", "Alejandro", "Alex", "Alexander", "Alfonso", "Alfred", "Alfredo", "Allan", "Allen", "Alonzo", "Alton", "Alvin", "Amos", "Andre", "Andres", "Andrew", "Andy", "Angel", "Angelo", "Anthony", "Antonio", "Archie", "Armando", "Arnold", "Arthur", "Arturo", "Aubrey", "Austin", "Barry", "Ben", "Benjamin", "Bennie", "Benny", "Bernard", "Bert", "Bill", "Billy", "Blake", "Bob", "Bobby", "Boyd", "Brad", "Bradford", "Bradley", "Brandon", "Brendan", "Brent", "Brett", "Brian", "Bruce", "Bryan", "Bryant", "Byron", "Caleb", "Calvin", "Cameron", "Carl", "Carlos", "Carlton", "Carroll", "Cary", "Casey", "Cecil", "Cedric", "Cesar", "Chad", "Charles", "Charlie", "Chester", "Chris", "Christian", "Christopher", "Clarence", "Clark", "Claude", "Clay", "Clayton", "Clifford", "Clifton", "Clint", "Clinton", "Clyde", "Cody", "Colin", "Conrad", "Corey", "Cornelius", "Cory", "Courtney", "Craig", "Curtis", "Dale", "Dallas", "Damon", "Dan", "Dana", "Daniel", "Danny", "Darin", "Darnell", "Darrel", "Darrell", "Darren", "Darrin", "Darryl", "Daryl", "Dave", "David", "Dean", "Delbert", "Dennis", "Derek", "Derrick", "Devin", "Dewey", "Dexter", "Domingo", "Dominic", "Dominick", "Don", "Donald", "Donnie", "Doug", "Douglas", "Doyle", "Drew", "Duane", "Dustin", "Dwayne", "Dwight", "Earl", "Earnest", "Ed", "Eddie", "Edgar", "Edmond", "Edmund", "Eduardo", "Edward", "Edwin", "Elbert", "Elias", "Elijah", "Ellis", "Elmer", "Emanuel", "Emilio", "Emmett", "Enrique", "Eric", "Erick", "Erik", "Ernest", "Ernesto", "Ervin", "Eugene", "Evan", "Everett", "Felipe", "Felix", "Fernando", "Floyd", "Forrest", "Francis", "Francisco", "Frank", "Frankie", "Franklin", "Fred", "Freddie", "Frederick", "Fredrick", "Gabriel", "Garrett", "Garry", "Gary", "Gene", "Geoffrey", "George", "Gerald", "Gerard", "Gerardo", "Gilbert", "Gilberto", "Glen", "Glenn", "Gordon", "Grady", "Grant", "Greg", "Gregg", "Gregory", "Guadalupe", "Guillermo", "Gustavo", "Guy", "Harold", "Harry", "Harvey", "Hector", "Henry", "Herbert", "Herman", "Homer", "Horace", "Howard", "Hubert", "Hugh", "Hugo", "Ian", "Ignacio", "Ira", "Irvin", "Irving", "Isaac", "Ismael", "Israel", "Ivan", "Jack", "Jackie", "Jacob", "Jaime", "Jake", "James", "Jamie", "Jan", "Jared", "Jason", "Javier", "Jay", "Jean", "Jeff", "Jeffery", "Jeffrey", "Jerald", "Jeremiah", "Jeremy", "Jermaine", "Jerome", "Jerry", "Jesse", "Jessie", "Jesus", "Jim", "Jimmie", "Jimmy", "Jody", "Joe", "Joel", "Joey", "John", "Johnathan", "Johnnie", "Johnny", "Jon", "Jonathan", "Jonathon", "Jordan", "Jorge", "Jose", "Joseph", "Josh", "Joshua", "Juan", "Julian", "Julio", "Julius", "Justin", "Karl", "Keith", "Kelly", "Kelvin", "Ken", "Kenneth", "Kenny", "Kent", "Kerry", "Kevin", "Kim", "Kirk", "Kristopher", "Kurt", "Kyle", "Lamar", "Lance", "Larry", "Laurence", "Lawrence", "Lee", "Leland", "Leo", "Leon", "Leonard", "Leroy", "Leslie", "Lester", "Levi", "Lewis", "Lionel", "Lloyd", "Lonnie", "Loren", "Lorenzo", "Louis", "Lowell", "Lucas", "Luis", "Luke", "Luther", "Lyle", "Lynn", "Mack", "Malcolm", "Manuel", "Marc", "Marco", "Marcos", "Marcus", "Mario", "Marion", "Mark", "Marlon", "Marshall", "Martin", "Marty", "Marvin", "Mathew", "Matt", "Matthew", "Maurice", "Max", "Melvin", "Merle", "Michael", "Micheal", "Miguel", "Mike", "Milton", "Mitchell", "Morris", "Moses", "Myron", "Nathan", "Nathaniel", "Neal", "Neil", "Nelson", "Nicholas", "Nick", "Nicolas", "Noah", "Noel", "Norman", "Oliver", "Omar", "Orlando", "Orville", "Oscar", "Otis", "Owen", "Pablo", "Pat", "Patrick", "Paul", "Pedro", "Percy", "Perry", "Pete", "Peter", "Phil", "Philip", "Phillip", "Preston", "Rafael", "Ralph", "Ramiro", "Ramon", "Randal", "Randall", "Randolph", "Randy", "Raul", "Ray", "Raymond", "Reginald", "Rene", "Rex", "Ricardo", "Richard", "Rick", "Rickey", "Ricky", "Robert", "Roberto", "Robin", "Roderick", "Rodney", "Rodolfo", "Rogelio", "Roger", "Roland", "Rolando", "Roman", "Ron", "Ronald", "Ronnie", "Roosevelt", "Ross", "Roy", "Ruben", "Rudolph", "Rudy", "Rufus", "Russell", "Ryan", "Salvador", "Salvatore", "Sam", "Sammy", "Samuel", "Santiago", "Santos", "Saul", "Scott", "Sean", "Sergio", "Seth", "Shane", "Shannon", "Shaun", "Shawn", "Sheldon", "Sherman", "Sidney", "Simon", "Spencer", "Stanley", "Stephen", "Steve", "Steven", "Stewart", "Stuart", "Sylvester", "Taylor", "Ted", "Terence", "Terrance", "Terrell", "Terrence", "Terry", "Theodore", "Thomas", "Tim", "Timmy", "Timothy", "Toby", "Todd", "Tom", "Tomas", "Tommie", "Tommy", "Tony", "Tracy", "Travis", "Trevor", "Troy", "Tyler", "Tyrone", "Van", "Vernon", "Victor", "Vincent", "Virgil", "Wade", "Wallace", "Walter", "Warren", "Wayne", "Wendell", "Wesley", "Wilbert", "Wilbur", "Wilfred", "Willard", "William", "Willie", "Willis", "Wilson", "Winston", "Wm", "Woodrow", "Zachary"] };
var ua = ["Agender", "Androgyne", "Androgynous", "Bigender", "Cis female", "Cis male", "Cis man", "Cis woman", "Cis", "Cisgender female", "Cisgender male", "Cisgender man", "Cisgender woman", "Cisgender", "Demi-boy", "Demi-girl", "Demi-man", "Demi-woman", "Demiflux", "Demigender", "F2M", "FTM", "Female to male trans man", "Female to male transgender man", "Female to male transsexual man", "Female to male", "Gender fluid", "Gender neutral", "Gender nonconforming", "Gender questioning", "Gender variant", "Genderflux", "Genderqueer", "Hermaphrodite", "Intersex man", "Intersex person", "Intersex woman", "Intersex", "M2F", "MTF", "Male to female trans woman", "Male to female transgender woman", "Male to female transsexual woman", "Male to female", "Man", "Multigender", "Neither", "Neutrois", "Non-binary", "Omnigender", "Other", "Pangender", "Polygender", "T* man", "T* woman", "Trans female", "Trans male", "Trans man", "Trans person", "Trans woman", "Trans", "Transsexual female", "Transsexual male", "Transsexual man", "Transsexual person", "Transsexual woman", "Transsexual", "Transgender female", "Transgender person", "Transmasculine", "Trigender", "Two* person", "Two-spirit person", "Two-spirit", "Woman", "Xenogender"];
var ca = ["Solutions", "Program", "Brand", "Security", "Research", "Marketing", "Directives", "Implementation", "Integration", "Functionality", "Response", "Paradigm", "Tactics", "Identity", "Markets", "Group", "Division", "Applications", "Optimization", "Operations", "Infrastructure", "Intranet", "Communications", "Web", "Branding", "Quality", "Assurance", "Mobility", "Accounts", "Data", "Creative", "Configuration", "Accountability", "Interactions", "Factors", "Usability", "Metrics"];
var ma = ["Lead", "Senior", "Direct", "Corporate", "Dynamic", "Future", "Product", "National", "Regional", "District", "Central", "Global", "Customer", "Investor", "International", "Legacy", "Forward", "Internal", "Human", "Chief", "Principal"];
var ha = ["{{person.jobDescriptor}} {{person.jobArea}} {{person.jobType}}"];
var ya = ["Supervisor", "Associate", "Executive", "Liaison", "Officer", "Manager", "Engineer", "Specialist", "Director", "Coordinator", "Administrator", "Architect", "Analyst", "Designer", "Planner", "Orchestrator", "Technician", "Developer", "Producer", "Consultant", "Assistant", "Facilitator", "Agent", "Representative", "Strategist"];
var pa = { generic: ["Abbott", "Abernathy", "Abshire", "Adams", "Altenwerth", "Anderson", "Ankunding", "Armstrong", "Auer", "Aufderhar", "Bahringer", "Bailey", "Balistreri", "Barrows", "Bartell", "Bartoletti", "Barton", "Bashirian", "Batz", "Bauch", "Baumbach", "Bayer", "Beahan", "Beatty", "Bechtelar", "Becker", "Bednar", "Beer", "Beier", "Berge", "Bergnaum", "Bergstrom", "Bernhard", "Bernier", "Bins", "Blanda", "Blick", "Block", "Bode", "Boehm", "Bogan", "Bogisich", "Borer", "Bosco", "Botsford", "Boyer", "Boyle", "Bradtke", "Brakus", "Braun", "Breitenberg", "Brekke", "Brown", "Bruen", "Buckridge", "Carroll", "Carter", "Cartwright", "Casper", "Cassin", "Champlin", "Christiansen", "Cole", "Collier", "Collins", "Conn", "Connelly", "Conroy", "Considine", "Corkery", "Cormier", "Corwin", "Cremin", "Crist", "Crona", "Cronin", "Crooks", "Cruickshank", "Cummerata", "Cummings", "D'Amore", "Dach", "Daniel", "Dare", "Daugherty", "Davis", "Deckow", "Denesik", "Dibbert", "Dickens", "Dicki", "Dickinson", "Dietrich", "Donnelly", "Dooley", "Douglas", "Doyle", "DuBuque", "Durgan", "Ebert", "Effertz", "Emard", "Emmerich", "Erdman", "Ernser", "Fadel", "Fahey", "Farrell", "Fay", "Feeney", "Feest", "Feil", "Ferry", "Fisher", "Flatley", "Frami", "Franecki", "Franey", "Friesen", "Fritsch", "Funk", "Gerhold", "Gerlach", "Gibson", "Gislason", "Gleason", "Gleichner", "Glover", "Goldner", "Goodwin", "Gorczany", "Gottlieb", "Goyette", "Grady", "Graham", "Grant", "Green", "Greenfelder", "Greenholt", "Grimes", "Gulgowski", "Gusikowski", "Gutkowski", "Gutmann", "Haag", "Hackett", "Hagenes", "Hahn", "Haley", "Halvorson", "Hamill", "Hammes", "Hand", "Hane", "Hansen", "Harber", "Harris", "Hartmann", "Harvey", "Hauck", "Hayes", "Heaney", "Heathcote", "Hegmann", "Heidenreich", "Heller", "Herman", "Hermann", "Hermiston", "Herzog", "Hessel", "Hettinger", "Hickle", "Hilll", "Hills", "Hilpert", "Hintz", "Hirthe", "Hodkiewicz", "Hoeger", "Homenick", "Hoppe", "Howe", "Howell", "Hudson", "Huel", "Huels", "Hyatt", "Jacobi", "Jacobs", "Jacobson", "Jakubowski", "Jaskolski", "Jast", "Jenkins", "Jerde", "Johns", "Johnson", "Johnston", "Jones", "Kassulke", "Kautzer", "Keebler", "Keeling", "Kemmer", "Kerluke", "Kertzmann", "Kessler", "Kiehn", "Kihn", "Kilback", "King", "Kirlin", "Klein", "Kling", "Klocko", "Koch", "Koelpin", "Koepp", "Kohler", "Konopelski", "Koss", "Kovacek", "Kozey", "Krajcik", "Kreiger", "Kris", "Kshlerin", "Kub", "Kuhic", "Kuhlman", "Kuhn", "Kulas", "Kunde", "Kunze", "Kuphal", "Kutch", "Kuvalis", "Labadie", "Lakin", "Lang", "Langosh", "Langworth", "Larkin", "Larson", "Leannon", "Lebsack", "Ledner", "Leffler", "Legros", "Lehner", "Lemke", "Lesch", "Leuschke", "Lind", "Lindgren", "Littel", "Little", "Lockman", "Lowe", "Lubowitz", "Lueilwitz", "Luettgen", "Lynch", "MacGyver", "Macejkovic", "Maggio", "Mann", "Mante", "Marks", "Marquardt", "Marvin", "Mayer", "Mayert", "McClure", "McCullough", "McDermott", "McGlynn", "McKenzie", "McLaughlin", "Medhurst", "Mertz", "Metz", "Miller", "Mills", "Mitchell", "Moen", "Mohr", "Monahan", "Moore", "Morar", "Morissette", "Mosciski", "Mraz", "Mueller", "Muller", "Murazik", "Murphy", "Murray", "Nader", "Nicolas", "Nienow", "Nikolaus", "Nitzsche", "Nolan", "O'Connell", "O'Conner", "O'Hara", "O'Keefe", "O'Kon", "O'Reilly", "Oberbrunner", "Okuneva", "Olson", "Ondricka", "Orn", "Ortiz", "Osinski", "Pacocha", "Padberg", "Pagac", "Parisian", "Parker", "Paucek", "Pfannerstill", "Pfeffer", "Pollich", "Pouros", "Powlowski", "Predovic", "Price", "Prohaska", "Prosacco", "Purdy", "Quigley", "Quitzon", "Rath", "Ratke", "Rau", "Raynor", "Reichel", "Reichert", "Reilly", "Reinger", "Rempel", "Renner", "Reynolds", "Rice", "Rippin", "Ritchie", "Robel", "Roberts", "Rodriguez", "Rogahn", "Rohan", "Rolfson", "Romaguera", "Roob", "Rosenbaum", "Rowe", "Ruecker", "Runolfsdottir", "Runolfsson", "Runte", "Russel", "Rutherford", "Ryan", "Sanford", "Satterfield", "Sauer", "Sawayn", "Schaden", "Schaefer", "Schamberger", "Schiller", "Schimmel", "Schinner", "Schmeler", "Schmidt", "Schmitt", "Schneider", "Schoen", "Schowalter", "Schroeder", "Schulist", "Schultz", "Schumm", "Schuppe", "Schuster", "Senger", "Shanahan", "Shields", "Simonis", "Sipes", "Skiles", "Smith", "Smitham", "Spencer", "Spinka", "Sporer", "Stamm", "Stanton", "Stark", "Stehr", "Steuber", "Stiedemann", "Stokes", "Stoltenberg", "Stracke", "Streich", "Stroman", "Strosin", "Swaniawski", "Swift", "Terry", "Thiel", "Thompson", "Tillman", "Torp", "Torphy", "Towne", "Toy", "Trantow", "Tremblay", "Treutel", "Tromp", "Turcotte", "Turner", "Ullrich", "Upton", "Vandervort", "Veum", "Volkman", "Von", "VonRueden", "Waelchi", "Walker", "Walsh", "Walter", "Ward", "Waters", "Watsica", "Weber", "Wehner", "Weimann", "Weissnat", "Welch", "West", "White", "Wiegand", "Wilderman", "Wilkinson", "Will", "Williamson", "Willms", "Windler", "Wintheiser", "Wisoky", "Wisozk", "Witting", "Wiza", "Wolf", "Wolff", "Wuckert", "Wunsch", "Wyman", "Yost", "Yundt", "Zboncak", "Zemlak", "Ziemann", "Zieme", "Zulauf"] };
var ga = { generic: [{ value: "{{person.last_name.generic}}", weight: 95 }, { value: "{{person.last_name.generic}}-{{person.last_name.generic}}", weight: 5 }] };
var ba = { generic: ["Addison", "Alex", "Anderson", "Angel", "Arden", "August", "Austin", "Avery", "Bailey", "Billie", "Blake", "Bowie", "Brooklyn", "Cameron", "Charlie", "Corey", "Dakota", "Drew", "Elliott", "Ellis", "Emerson", "Finley", "Gray", "Greer", "Harper", "Hayden", "Jaden", "James", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Kennedy", "Kyle", "Leslie", "Logan", "London", "Marlowe", "Micah", "Nico", "Noah", "North", "Parker", "Phoenix", "Quinn", "Reagan", "Reese", "Reign", "Riley", "River", "Robin", "Rory", "Rowan", "Ryan", "Sage", "Sasha", "Sawyer", "Shawn", "Shiloh", "Skyler", "Taylor"], female: ["Abigail", "Adele", "Alex", "Alice", "Alisha", "Amber", "Amelia", "Amora", "Ana\xEFs", "Angelou", "Anika", "Anise", "Annabel", "Anne", "Aphrodite", "Aretha", "Arya", "Ashton", "Aster", "Audrey", "Avery", "Bailee", "Bay", "Belle", "Beth", "Billie", "Blair", "Blaise", "Blake", "Blanche", "Blue", "Bree", "Brielle", "Brienne", "Brooke", "Caleen", "Candice", "Caprice", "Carelyn", "Caylen", "Celine", "Cerise", "Cia", "Claire", "Claudia", "Clementine", "Coral", "Coraline", "Dahlia", "Dakota", "Dawn", "Della", "Demi", "Denise", "Denver", "Devine", "Devon", "Diana", "Dylan", "Ebony", "Eden", "Eleanor", "Elein", "Elizabeth", "Ellen", "Elodie", "Eloise", "Ember", "Emma", "Erin", "Eyre", "Faith", "Farrah", "Fawn", "Fayre", "Fern", "France", "Francis", "Frida", "Genisis", "Georgia", "Grace", "Gwen", "Harley", "Harper", "Hazel", "Helen", "Hippolyta", "Holly", "Hope", "Imani", "Iowa", "Ireland", "Irene", "Iris", "Isa", "Isla", "Ivy", "Jade", "Jane", "Jazz", "Jean", "Jess", "Jett", "Jo", "Joan", "Jolie", "Jordan", "Josie", "Journey", "Joy", "Jules", "Julien", "Juliet", "Juniper", "Justice", "Kali", "Karma", "Kat", "Kate", "Kennedy", "Keva", "Kylie", "Lake", "Lane", "Lark", "Layla", "Lee", "Leigh", "Leona", "Lexi", "London", "Lou", "Louise", "Love", "Luna", "Lux", "Lynn", "Lyric", "Maddie", "Mae", "Marie", "Matilda", "Maude", "Maybel", "Meadow", "Medusa", "Mercy", "Michelle", "Mirabel", "Monroe", "Morgan", "Nalia", "Naomi", "Nova", "Olive", "Paige", "Parker", "Pax", "Pearl", "Penelope", "Phoenix", "Quinn", "Rae", "Rain", "Raven", "Ray", "Raye", "Rebel", "Reese", "Reeve", "Regan", "Riley", "River", "Robin", "Rory", "Rose", "Royal", "Ruth", "Rylie", "Sage", "Sam", "Saturn", "Scout", "Serena", "Sky", "Skylar", "Sofia", "Sophia", "Storm", "Sue", "Suzanne", "Sydney", "Taylen", "Taylor", "Teagan", "Tempest", "Tenley", "Thea", "Trinity", "Valerie", "Venus", "Vera", "Violet", "Willow", "Winter", "Xena", "Zaylee", "Zion", "Zoe"], male: ["Ace", "Aiden", "Alexander", "Ander", "Anthony", "Asher", "August", "Aziel", "Bear", "Beckham", "Benjamin", "Buddy", "Calvin", "Carter", "Charles", "Christopher", "Clyde", "Cooper", "Daniel", "David", "Dior", "Dylan", "Elijah", "Ellis", "Emerson", "Ethan", "Ezra", "Fletcher", "Flynn", "Gabriel", "Grayson", "Gus", "Hank", "Harrison", "Hendrix", "Henry", "Houston", "Hudson", "Hugh", "Isaac", "Jack", "Jackson", "Jacob", "Jakobe", "James", "Jaxon", "Jaxtyn", "Jayden", "John", "Joseph", "Josiah", "Jude", "Julian", "Karsyn", "Kenji", "Kobe", "Kylo", "Lennon", "Leo", "Levi", "Liam", "Lincoln", "Logan", "Louis", "Lucas", "Lucky", "Luke", "Mason", "Mateo", "Matthew", "Maverick", "Michael", "Monroe", "Nixon", "Ocean", "Oliver", "Otis", "Otto", "Owen", "Ozzy", "Parker", "Rocky", "Samuel", "Sebastian", "Sonny", "Teddy", "Theo", "Theodore", "Thomas", "Truett", "Walter", "Warren", "Watson", "William", "Wison", "Wyatt", "Ziggy", "Zyair"] };
var Sa = [{ value: "{{person.firstName}} {{person.lastName}}", weight: 49 }, { value: "{{person.prefix}} {{person.firstName}} {{person.lastName}}", weight: 7 }, { value: "{{person.firstName}} {{person.lastName}} {{person.suffix}}", weight: 7 }, { value: "{{person.prefix}} {{person.firstName}} {{person.lastName}} {{person.suffix}}", weight: 1 }];
var ka = { generic: ["Dr.", "Miss", "Mr.", "Mrs.", "Ms."], female: ["Dr.", "Miss", "Mrs.", "Ms."], male: ["Dr.", "Mr."] };
var Ca = ["female", "male"];
var fa = ["Jr.", "Sr.", "I", "II", "III", "IV", "V", "MD", "DDS", "PhD", "DVM"];
var va = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var yr = { bio_part: ta, bio_pattern: la, bio_supporter: sa, first_name: da, gender: ua, job_area: ca, job_descriptor: ma, job_title_pattern: ha, job_type: ya, last_name: pa, last_name_pattern: ga, middle_name: ba, name: Sa, prefix: ka, sex: Ca, suffix: fa, western_zodiac_sign: va };
var Aa = yr;
var Ba = ["!##-!##-####", "(!##) !##-####", "1-!##-!##-####", "!##.!##.####", "!##-!##-#### x###", "(!##) !##-#### x###", "1-!##-!##-#### x###", "!##.!##.#### x###", "!##-!##-#### x####", "(!##) !##-#### x####", "1-!##-!##-#### x####", "!##.!##.#### x####", "!##-!##-#### x#####", "(!##) !##-#### x#####", "1-!##-!##-#### x#####", "!##.!##.#### x#####"];
var Ta = ["+1!##!######"];
var Ma = ["(!##) !##-####"];
var pr = { human: Ba, international: Ta, national: Ma };
var wa = pr;
var gr = { format: wa };
var La = gr;
var Da = [{ symbol: "H", name: "Hydrogen", atomicNumber: 1 }, { symbol: "He", name: "Helium", atomicNumber: 2 }, { symbol: "Li", name: "Lithium", atomicNumber: 3 }, { symbol: "Be", name: "Beryllium", atomicNumber: 4 }, { symbol: "B", name: "Boron", atomicNumber: 5 }, { symbol: "C", name: "Carbon", atomicNumber: 6 }, { symbol: "N", name: "Nitrogen", atomicNumber: 7 }, { symbol: "O", name: "Oxygen", atomicNumber: 8 }, { symbol: "F", name: "Fluorine", atomicNumber: 9 }, { symbol: "Ne", name: "Neon", atomicNumber: 10 }, { symbol: "Na", name: "Sodium", atomicNumber: 11 }, { symbol: "Mg", name: "Magnesium", atomicNumber: 12 }, { symbol: "Al", name: "Aluminium", atomicNumber: 13 }, { symbol: "Si", name: "Silicon", atomicNumber: 14 }, { symbol: "P", name: "Phosphorus", atomicNumber: 15 }, { symbol: "S", name: "Sulfur", atomicNumber: 16 }, { symbol: "Cl", name: "Chlorine", atomicNumber: 17 }, { symbol: "Ar", name: "Argon", atomicNumber: 18 }, { symbol: "K", name: "Potassium", atomicNumber: 19 }, { symbol: "Ca", name: "Calcium", atomicNumber: 20 }, { symbol: "Sc", name: "Scandium", atomicNumber: 21 }, { symbol: "Ti", name: "Titanium", atomicNumber: 22 }, { symbol: "V", name: "Vanadium", atomicNumber: 23 }, { symbol: "Cr", name: "Chromium", atomicNumber: 24 }, { symbol: "Mn", name: "Manganese", atomicNumber: 25 }, { symbol: "Fe", name: "Iron", atomicNumber: 26 }, { symbol: "Co", name: "Cobalt", atomicNumber: 27 }, { symbol: "Ni", name: "Nickel", atomicNumber: 28 }, { symbol: "Cu", name: "Copper", atomicNumber: 29 }, { symbol: "Zn", name: "Zinc", atomicNumber: 30 }, { symbol: "Ga", name: "Gallium", atomicNumber: 31 }, { symbol: "Ge", name: "Germanium", atomicNumber: 32 }, { symbol: "As", name: "Arsenic", atomicNumber: 33 }, { symbol: "Se", name: "Selenium", atomicNumber: 34 }, { symbol: "Br", name: "Bromine", atomicNumber: 35 }, { symbol: "Kr", name: "Krypton", atomicNumber: 36 }, { symbol: "Rb", name: "Rubidium", atomicNumber: 37 }, { symbol: "Sr", name: "Strontium", atomicNumber: 38 }, { symbol: "Y", name: "Yttrium", atomicNumber: 39 }, { symbol: "Zr", name: "Zirconium", atomicNumber: 40 }, { symbol: "Nb", name: "Niobium", atomicNumber: 41 }, { symbol: "Mo", name: "Molybdenum", atomicNumber: 42 }, { symbol: "Tc", name: "Technetium", atomicNumber: 43 }, { symbol: "Ru", name: "Ruthenium", atomicNumber: 44 }, { symbol: "Rh", name: "Rhodium", atomicNumber: 45 }, { symbol: "Pd", name: "Palladium", atomicNumber: 46 }, { symbol: "Ag", name: "Silver", atomicNumber: 47 }, { symbol: "Cd", name: "Cadmium", atomicNumber: 48 }, { symbol: "In", name: "Indium", atomicNumber: 49 }, { symbol: "Sn", name: "Tin", atomicNumber: 50 }, { symbol: "Sb", name: "Antimony", atomicNumber: 51 }, { symbol: "Te", name: "Tellurium", atomicNumber: 52 }, { symbol: "I", name: "Iodine", atomicNumber: 53 }, { symbol: "Xe", name: "Xenon", atomicNumber: 54 }, { symbol: "Cs", name: "Caesium", atomicNumber: 55 }, { symbol: "Ba", name: "Barium", atomicNumber: 56 }, { symbol: "La", name: "Lanthanum", atomicNumber: 57 }, { symbol: "Ce", name: "Cerium", atomicNumber: 58 }, { symbol: "Pr", name: "Praseodymium", atomicNumber: 59 }, { symbol: "Nd", name: "Neodymium", atomicNumber: 60 }, { symbol: "Pm", name: "Promethium", atomicNumber: 61 }, { symbol: "Sm", name: "Samarium", atomicNumber: 62 }, { symbol: "Eu", name: "Europium", atomicNumber: 63 }, { symbol: "Gd", name: "Gadolinium", atomicNumber: 64 }, { symbol: "Tb", name: "Terbium", atomicNumber: 65 }, { symbol: "Dy", name: "Dysprosium", atomicNumber: 66 }, { symbol: "Ho", name: "Holmium", atomicNumber: 67 }, { symbol: "Er", name: "Erbium", atomicNumber: 68 }, { symbol: "Tm", name: "Thulium", atomicNumber: 69 }, { symbol: "Yb", name: "Ytterbium", atomicNumber: 70 }, { symbol: "Lu", name: "Lutetium", atomicNumber: 71 }, { symbol: "Hf", name: "Hafnium", atomicNumber: 72 }, { symbol: "Ta", name: "Tantalum", atomicNumber: 73 }, { symbol: "W", name: "Tungsten", atomicNumber: 74 }, { symbol: "Re", name: "Rhenium", atomicNumber: 75 }, { symbol: "Os", name: "Osmium", atomicNumber: 76 }, { symbol: "Ir", name: "Iridium", atomicNumber: 77 }, { symbol: "Pt", name: "Platinum", atomicNumber: 78 }, { symbol: "Au", name: "Gold", atomicNumber: 79 }, { symbol: "Hg", name: "Mercury", atomicNumber: 80 }, { symbol: "Tl", name: "Thallium", atomicNumber: 81 }, { symbol: "Pb", name: "Lead", atomicNumber: 82 }, { symbol: "Bi", name: "Bismuth", atomicNumber: 83 }, { symbol: "Po", name: "Polonium", atomicNumber: 84 }, { symbol: "At", name: "Astatine", atomicNumber: 85 }, { symbol: "Rn", name: "Radon", atomicNumber: 86 }, { symbol: "Fr", name: "Francium", atomicNumber: 87 }, { symbol: "Ra", name: "Radium", atomicNumber: 88 }, { symbol: "Ac", name: "Actinium", atomicNumber: 89 }, { symbol: "Th", name: "Thorium", atomicNumber: 90 }, { symbol: "Pa", name: "Protactinium", atomicNumber: 91 }, { symbol: "U", name: "Uranium", atomicNumber: 92 }, { symbol: "Np", name: "Neptunium", atomicNumber: 93 }, { symbol: "Pu", name: "Plutonium", atomicNumber: 94 }, { symbol: "Am", name: "Americium", atomicNumber: 95 }, { symbol: "Cm", name: "Curium", atomicNumber: 96 }, { symbol: "Bk", name: "Berkelium", atomicNumber: 97 }, { symbol: "Cf", name: "Californium", atomicNumber: 98 }, { symbol: "Es", name: "Einsteinium", atomicNumber: 99 }, { symbol: "Fm", name: "Fermium", atomicNumber: 100 }, { symbol: "Md", name: "Mendelevium", atomicNumber: 101 }, { symbol: "No", name: "Nobelium", atomicNumber: 102 }, { symbol: "Lr", name: "Lawrencium", atomicNumber: 103 }, { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104 }, { symbol: "Db", name: "Dubnium", atomicNumber: 105 }, { symbol: "Sg", name: "Seaborgium", atomicNumber: 106 }, { symbol: "Bh", name: "Bohrium", atomicNumber: 107 }, { symbol: "Hs", name: "Hassium", atomicNumber: 108 }, { symbol: "Mt", name: "Meitnerium", atomicNumber: 109 }, { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110 }, { symbol: "Rg", name: "Roentgenium", atomicNumber: 111 }, { symbol: "Cn", name: "Copernicium", atomicNumber: 112 }, { symbol: "Nh", name: "Nihonium", atomicNumber: 113 }, { symbol: "Fl", name: "Flerovium", atomicNumber: 114 }, { symbol: "Mc", name: "Moscovium", atomicNumber: 115 }, { symbol: "Lv", name: "Livermorium", atomicNumber: 116 }, { symbol: "Ts", name: "Tennessine", atomicNumber: 117 }, { symbol: "Og", name: "Oganesson", atomicNumber: 118 }];
var Ra = [{ name: "meter", symbol: "m" }, { name: "second", symbol: "s" }, { name: "mole", symbol: "mol" }, { name: "ampere", symbol: "A" }, { name: "kelvin", symbol: "K" }, { name: "candela", symbol: "cd" }, { name: "kilogram", symbol: "kg" }, { name: "radian", symbol: "rad" }, { name: "hertz", symbol: "Hz" }, { name: "newton", symbol: "N" }, { name: "pascal", symbol: "Pa" }, { name: "joule", symbol: "J" }, { name: "watt", symbol: "W" }, { name: "coulomb", symbol: "C" }, { name: "volt", symbol: "V" }, { name: "ohm", symbol: "\u03A9" }, { name: "tesla", symbol: "T" }, { name: "degree Celsius", symbol: "\xB0C" }, { name: "lumen", symbol: "lm" }, { name: "becquerel", symbol: "Bq" }, { name: "gray", symbol: "Gy" }, { name: "sievert", symbol: "Sv" }, { name: "steradian", symbol: "sr" }, { name: "farad", symbol: "F" }, { name: "siemens", symbol: "S" }, { name: "weber", symbol: "Wb" }, { name: "henry", symbol: "H" }, { name: "lux", symbol: "lx" }, { name: "katal", symbol: "kat" }];
var br = { chemical_element: Da, unit: Ra };
var Pa = br;
var Ha = ["ants", "bats", "bears", "bees", "birds", "buffalo", "cats", "chickens", "cattle", "dogs", "dolphins", "ducks", "elephants", "fishes", "foxes", "frogs", "geese", "goats", "horses", "kangaroos", "lions", "monkeys", "owls", "oxen", "penguins", "people", "pigs", "rabbits", "sheep", "tigers", "whales", "wolves", "zebras", "banshees", "crows", "black cats", "chimeras", "ghosts", "conspirators", "dragons", "dwarves", "elves", "enchanters", "exorcists", "sons", "foes", "giants", "gnomes", "goblins", "gooses", "griffins", "lycanthropes", "nemesis", "ogres", "oracles", "prophets", "sorcerors", "spiders", "spirits", "vampires", "warlocks", "vixens", "werewolves", "witches", "worshipers", "zombies", "druids"];
var Wa = ["{{location.state}} {{team.creature}}"];
var Sr = { creature: Ha, name: Wa };
var Ga = Sr;
var Fa = ["Adventure Road Bicycle", "BMX Bicycle", "City Bicycle", "Cruiser Bicycle", "Cyclocross Bicycle", "Dual-Sport Bicycle", "Fitness Bicycle", "Flat-Foot Comfort Bicycle", "Folding Bicycle", "Hybrid Bicycle", "Mountain Bicycle", "Recumbent Bicycle", "Road Bicycle", "Tandem Bicycle", "Touring Bicycle", "Track/Fixed-Gear Bicycle", "Triathlon/Time Trial Bicycle", "Tricycle"];
var Na = ["Diesel", "Electric", "Gasoline", "Hybrid"];
var Ea = ["Aston Martin", "Audi", "BMW", "BYD", "Bentley", "Bugatti", "Cadillac", "Chevrolet", "Chrysler", "Citro\xEBn", "Dodge", "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "MG", "Mahindra & Mahindra", "Maruti", "Maserati", "Mazda", "Mercedes Benz", "Mini", "Mitsubishi", "NIO", "Nissan", "Peugeot", "Polestar", "Porsche", "Renault", "Rivian", "Rolls Royce", "Skoda", "Smart", "Subaru", "Suzuki", "Tata", "Tesla", "Toyota", "Vauxhall", "Volkswagen", "Volvo"];
var Ja = ["1", "2", "911", "A4", "A8", "ATS", "Accord", "Alpine", "Altima", "Aventador", "Beetle", "CTS", "CX-9", "Camaro", "Camry", "Challenger", "Charger", "Civic", "Colorado", "Corvette", "Countach", "Cruze", "Durango", "El Camino", "Element", "Escalade", "Expedition", "Explorer", "F-150", "Fiesta", "Focus", "Fortwo", "Golf", "Grand Caravan", "Grand Cherokee", "Impala", "Jetta", "Land Cruiser", "LeBaron", "Malibu", "Mercielago", "Model 3", "Model S", "Model T", "Model X", "Model Y", "Mustang", "PT Cruiser", "Prius", "Ranchero", "Roadster", "Sentra", "Silverado", "Spyder", "Taurus", "V90", "Volt", "Wrangler", "XC90", "XTS"];
var Ia = ["Cargo Van", "Convertible", "Coupe", "Crew Cab Pickup", "Extended Cab Pickup", "Hatchback", "Minivan", "Passenger Van", "SUV", "Sedan", "Wagon"];
var kr = { bicycle_type: Fa, fuel: Na, manufacturer: Ea, model: Ja, type: Ia };
var Ka = kr;
var Oa = ["abandoned", "able", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "actual", "admired", "adolescent", "advanced", "affectionate", "afraid", "aged", "aggravating", "aggressive", "agile", "agitated", "agreeable", "ajar", "alarmed", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "angelic", "anguished", "animated", "annual", "another", "antique", "any", "apprehensive", "appropriate", "apt", "arid", "artistic", "ashamed", "assured", "astonishing", "athletic", "austere", "authentic", "authorized", "avaricious", "average", "aware", "awesome", "awful", "babyish", "back", "bad", "baggy", "bare", "basic", "beloved", "beneficial", "best", "better", "big", "biodegradable", "bitter", "black", "black-and-white", "blank", "blaring", "bleak", "blind", "blond", "blue", "blushing", "bogus", "boiling", "bony", "boring", "bossy", "both", "bouncy", "bowed", "brave", "breakable", "bright", "brilliant", "brisk", "broken", "brown", "bruised", "bulky", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "candid", "carefree", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complicated", "concerned", "concrete", "confused", "considerate", "content", "cool", "cooperative", "coordinated", "corny", "corrupt", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "criminal", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cumbersome", "curly", "cute", "damaged", "damp", "dapper", "dark", "darling", "dazzling", "dead", "deadly", "deafening", "dearest", "decent", "decisive", "deep", "defenseless", "defensive", "deficient", "definite", "definitive", "delectable", "delicious", "delirious", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "direct", "dirty", "discrete", "disloyal", "dismal", "distant", "distinct", "distorted", "doting", "downright", "drab", "dramatic", "dreary", "dual", "dull", "dutiful", "each", "early", "earnest", "easy", "ecstatic", "edible", "educated", "elastic", "elderly", "electric", "elegant", "elementary", "elliptical", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enraged", "entire", "equatorial", "essential", "esteemed", "ethical", "everlasting", "every", "evil", "exalted", "excellent", "excitable", "excited", "exhausted", "exotic", "expensive", "experienced", "expert", "extra-large", "extroverted", "failing", "faint", "fair", "fake", "familiar", "fantastic", "far", "far-flung", "far-off", "faraway", "fat", "fatal", "fatherly", "favorable", "favorite", "fearless", "feline", "filthy", "fine", "finished", "firm", "first", "firsthand", "fixed", "flashy", "flawed", "flawless", "flickering", "flimsy", "flowery", "fluffy", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "formal", "forsaken", "fortunate", "fragrant", "frail", "frank", "free", "french", "frequent", "friendly", "frightened", "frilly", "frivolous", "frizzy", "front", "frozen", "frugal", "fruitful", "functional", "funny", "fussy", "fuzzy", "gaseous", "general", "gentle", "genuine", "gifted", "gigantic", "giving", "glaring", "glass", "gleaming", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grandiose", "granular", "grave", "gray", "great", "greedy", "grim", "grimy", "gripping", "grizzled", "grouchy", "grounded", "growing", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "handsome", "handy", "happy", "happy-go-lucky", "hard-to-find", "harmful", "hasty", "hateful", "haunting", "heartfelt", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hoarse", "hollow", "homely", "honorable", "honored", "hopeful", "hospitable", "hot", "huge", "humble", "humiliating", "hungry", "hurtful", "husky", "icy", "ideal", "idealistic", "idolized", "ignorant", "ill", "ill-fated", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immediate", "immense", "impartial", "impassioned", "impeccable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incomplete", "inconsequential", "indelible", "indolent", "inexperienced", "infamous", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "intelligent", "intent", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "juvenile", "kaleidoscopic", "key", "knotty", "knowledgeable", "known", "kooky", "kosher", "lanky", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "left", "legal", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "lone", "lonely", "long", "long-term", "lost", "lovable", "lovely", "low", "lucky", "lumbering", "lumpy", "lustrous", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "mediocre", "medium", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "minor", "minty", "miserable", "miserly", "misguided", "mixed", "moist", "monstrous", "monthly", "monumental", "moral", "motionless", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "narrow", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "normal", "noted", "noteworthy", "noxious", "numb", "nutritious", "obedient", "oblong", "obvious", "odd", "oddball", "official", "oily", "old", "old-fashioned", "only", "optimal", "optimistic", "orange", "orderly", "ordinary", "ornate", "ornery", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding", "oval", "overcooked", "overdue", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "pastel", "peaceful", "peppery", "perfumed", "perky", "personal", "pertinent", "pessimistic", "petty", "phony", "physical", "pink", "pitiful", "plain", "pleasant", "pleased", "pleasing", "plump", "pointed", "pointless", "polished", "polite", "political", "poor", "portly", "posh", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "pricey", "prickly", "primary", "prime", "private", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quixotic", "radiant", "ragged", "rapid", "rare", "raw", "realistic", "reasonable", "recent", "reckless", "rectangular", "red", "reflecting", "regal", "regular", "remarkable", "remorseful", "repentant", "respectful", "responsible", "rewarding", "rich", "right", "rigid", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rundown", "runny", "rural", "rusty", "sad", "salty", "same", "sandy", "sarcastic", "sardonic", "scaly", "scared", "scary", "scented", "scientific", "scornful", "scratchy", "second", "second-hand", "secondary", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serpentine", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "shimmering", "shiny", "shocked", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silver", "similar", "simple", "simplistic", "sinful", "sizzling", "skeletal", "sleepy", "slight", "slimy", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "somber", "some", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "spanish", "sparkling", "sparse", "specific", "speedy", "spherical", "spiffy", "spirited", "spiteful", "splendid", "spotless", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "stark", "steel", "steep", "sticky", "stiff", "stingy", "stormy", "straight", "strange", "strict", "strident", "striking", "strong", "stunning", "stupendous", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "svelte", "sweet", "swift", "talkative", "tall", "tame", "tangible", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "that", "these", "thick", "thin", "thorny", "thorough", "those", "thrifty", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "tragic", "trained", "triangular", "tricky", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "turbulent", "twin", "ugly", "ultimate", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "uneven", "unfinished", "unfit", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "useless", "utilized", "utter", "vague", "vain", "valuable", "variable", "vast", "velvety", "vengeful", "vibrant", "victorious", "violent", "vivacious", "vivid", "voluminous", "warlike", "warm", "warmhearted", "warped", "wasteful", "waterlogged", "watery", "wavy", "wealthy", "weary", "webbed", "wee", "weekly", "weighty", "weird", "well-documented", "well-groomed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "willing", "wilted", "winding", "windy", "winged", "wise", "witty", "wobbly", "woeful", "wonderful", "wordy", "worldly", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty"];
var xa = ["abnormally", "absentmindedly", "accidentally", "acidly", "actually", "adventurously", "afterwards", "almost", "always", "angrily", "annually", "anxiously", "arrogantly", "awkwardly", "badly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "continually", "coolly", "correctly", "courageously", "crossly", "cruelly", "curiously", "daily", "daintily", "dearly", "deceivingly", "deeply", "defiantly", "deliberately", "delightfully", "diligently", "dimly", "doubtfully", "dreamily", "easily", "elegantly", "energetically", "enormously", "enthusiastically", "equally", "especially", "even", "evenly", "eventually", "exactly", "excitedly", "extremely", "fairly", "faithfully", "famously", "far", "fast", "fatally", "ferociously", "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frenetically", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "inquisitively", "instantly", "intensely", "intently", "interestingly", "inwardly", "irritably", "jaggedly", "jealously", "joshingly", "jovially", "joyfully", "joyously", "jubilantly", "judgementally", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "kissingly", "knavishly", "knottily", "knowingly", "knowledgeably", "kookily", "lazily", "less", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "more", "mortally", "mostly", "mysteriously", "naturally", "nearly", "neatly", "needily", "nervously", "never", "nicely", "noisily", "not", "obediently", "obnoxiously", "oddly", "offensively", "officially", "often", "only", "openly", "optimistically", "overconfidently", "owlishly", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "positively", "potentially", "powerfully", "promptly", "properly", "punctually", "quaintly", "quarrelsomely", "queasily", "questionably", "questioningly", "quicker", "quickly", "quietly", "quirkily", "quizzically", "rapidly", "rarely", "readily", "really", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "reproachfully", "restfully", "righteously", "rightfully", "rigidly", "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", "successfully", "suddenly", "surprisingly", "suspiciously", "sweetly", "swiftly", "sympathetically", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", "tomorrow", "too", "tremendously", "triumphantly", "truly", "truthfully", "ultimately", "unabashedly", "unaccountably", "unbearably", "unethically", "unexpectedly", "unfortunately", "unimpressively", "unnaturally", "unnecessarily", "upbeat", "upliftingly", "upright", "upside-down", "upward", "upwardly", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "very", "viciously", "victoriously", "violently", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "well", "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", "yesterday", "yieldingly", "youthfully"];
var za = ["after", "although", "and", "as", "because", "before", "but", "consequently", "even", "finally", "for", "furthermore", "hence", "how", "however", "if", "inasmuch", "incidentally", "indeed", "instead", "lest", "likewise", "meanwhile", "nor", "now", "once", "or", "provided", "since", "so", "supposing", "than", "that", "though", "till", "unless", "until", "what", "when", "whenever", "where", "whereas", "wherever", "whether", "which", "while", "who", "whoever", "whose", "why", "yet"];
var Va = ["yuck", "oh", "phooey", "blah", "boo", "whoa", "yowza", "huzzah", "boohoo", "fooey", "geez", "pfft", "ew", "ah", "yum", "brr", "hm", "yahoo", "aha", "woot", "drat", "gah", "meh", "psst", "aw", "ugh", "yippee", "eek", "gee", "bah", "gadzooks", "duh", "ha", "mmm", "ouch", "phew", "ack", "uh-huh", "gosh", "hmph", "pish", "zowie", "er", "ick", "oof", "um"];
var Ya = ["CD", "SUV", "abacus", "academics", "accelerator", "accompanist", "account", "accountability", "acquaintance", "ad", "adaptation", "address", "adrenalin", "adult", "advancement", "advertisement", "adviser", "affect", "affiliate", "aftermath", "agreement", "airbus", "aircraft", "airline", "airmail", "airman", "airport", "alb", "alert", "allegation", "alliance", "alligator", "allocation", "almighty", "amendment", "amnesty", "analogy", "angle", "annual", "antelope", "anticodon", "apparatus", "appliance", "approach", "apricot", "arcade", "archaeology", "armchair", "armoire", "asset", "assist", "atrium", "attraction", "availability", "avalanche", "awareness", "babushka", "backbone", "backburn", "bakeware", "bandwidth", "bar", "barge", "baritone", "barracks", "baseboard", "basket", "bathhouse", "bathrobe", "battle", "begonia", "behest", "bell", "bench", "bend", "beret", "best-seller", "bid", "bidet", "bin", "birdbath", "birdcage", "birth", "blight", "blossom", "blowgun", "bob", "bog", "bonfire", "bonnet", "bookcase", "bookend", "boulevard", "bourgeoisie", "bowler", "bowling", "boyfriend", "brace", "bracelet", "bran", "breastplate", "brief", "brochure", "brook", "brush", "bug", "bump", "bungalow", "cafe", "cake", "calculus", "cannon", "cantaloupe", "cap", "cappelletti", "captain", "caption", "carboxyl", "cardboard", "carnival", "case", "casement", "cash", "casket", "cassava", "castanet", "catalyst", "cauliflower", "cellar", "celsius", "cemetery", "ceramic", "ceramics", "certification", "chainstay", "chairperson", "challenge", "championship", "chap", "chapel", "character", "characterization", "charlatan", "charm", "chasuble", "cheese", "cheetah", "chiffonier", "chops", "chow", "cinder", "cinema", "circumference", "citizen", "clamp", "clavicle", "cleaner", "climb", "co-producer", "coal", "coast", "cod", "coil", "coin", "coliseum", "collaboration", "collectivization", "colon", "colonialism", "comestible", "commercial", "commodity", "community", "comparison", "completion", "complication", "compromise", "concentration", "configuration", "confusion", "conservation", "conservative", "consistency", "contractor", "contrail", "convection", "conversation", "cook", "coordination", "cop-out", "cope", "cork", "cornet", "corporation", "corral", "cosset", "costume", "couch", "council", "councilman", "countess", "courtroom", "cow", "creator", "creature", "crest", "cricket", "crocodile", "cross-contamination", "cruelty", "cuckoo", "curl", "custody", "custom", "cutlet", "cutover", "cycle", "daddy", "dandelion", "dash", "daughter", "dead", "decision", "deck", "declaration", "decongestant", "decryption", "deduction", "deed", "deer", "defendant", "density", "department", "dependency", "deployment", "depot", "derby", "descendant", "descent", "design", "designation", "desk", "detective", "devastation", "developing", "developmental", "devil", "diagram", "digestive", "digit", "dime", "director", "disadvantage", "disappointment", "disclosure", "disconnection", "discourse", "dish", "disk", "disposer", "distinction", "diver", "diversity", "dividend", "divine", "doing", "doorpost", "doubter", "draft", "draw", "dream", "dredger", "dress", "drive", "drug", "duffel", "dulcimer", "dusk", "duster", "dwell", "e-mail", "earth", "ecliptic", "ectoderm", "edge", "editor", "effector", "eggplant", "electronics", "elevation", "elevator", "elver", "embarrassment", "embossing", "emergent", "encouragement", "entry", "epic", "equal", "essence", "eternity", "ethyl", "euphonium", "event", "exasperation", "excess", "executor", "exhaust", "expansion", "expense", "experience", "exploration", "extension", "extent", "exterior", "eyebrow", "eyeliner", "farm", "farmer", "fat", "fax", "feather", "fedora", "fellow", "fen", "fencing", "ferret", "festival", "fibre", "filter", "final", "finding", "finer", "finger", "fireplace", "fisherman", "fishery", "fit", "flame", "flat", "fledgling", "flight", "flint", "flood", "flu", "fog", "fold", "folklore", "follower", "following", "foodstuffs", "footrest", "forage", "forager", "forgery", "fork", "formamide", "formation", "formula", "fort", "fowl", "fraudster", "freckle", "freezing", "freight", "fuel", "fun", "fund", "fundraising", "futon", "gallery", "galoshes", "gastropod", "gazebo", "gerbil", "ghost", "giant", "gift", "giggle", "glider", "gloom", "goat", "godfather", "godparent", "going", "goodwill", "governance", "government", "gown", "gradient", "graffiti", "grandpa", "grandson", "granny", "grass", "gray", "gripper", "grouper", "guacamole", "guard", "guidance", "guide", "gym", "gymnast", "habit", "haircut", "halt", "hamburger", "hammock", "handful", "handle", "handover", "harp", "haversack", "hawk", "heartache", "heartbeat", "heating", "hello", "help", "hepatitis", "heroine", "hexagon", "hierarchy", "hippodrome", "honesty", "hoof", "hope", "horde", "hornet", "horst", "hose", "hospitalization", "hovel", "hovercraft", "hubris", "humidity", "humor", "hundred", "hunger", "hunt", "husband", "hutch", "hydrant", "hydrocarbon", "hydrolyse", "hydrolyze", "hyena", "hygienic", "hyphenation", "ice-cream", "icebreaker", "igloo", "ignorance", "illusion", "impact", "import", "importance", "impostor", "in-joke", "incandescence", "independence", "individual", "information", "injunction", "innovation", "insolence", "inspection", "instance", "institute", "instruction", "instructor", "integer", "intellect", "intent", "interchange", "interior", "intervention", "interviewer", "invite", "iridescence", "issue", "jacket", "jazz", "jellyfish", "jet", "jogging", "joy", "juggernaut", "jump", "jungle", "junior", "jury", "kettledrum", "kick", "kielbasa", "kinase", "king", "kiss", "kit", "knickers", "knight", "knitting", "knuckle", "label", "labourer", "lace", "lady", "lamp", "language", "larva", "lashes", "laughter", "lava", "lawmaker", "lay", "leading", "league", "legend", "legging", "legislature", "lender", "license", "lid", "lieu", "lifestyle", "lift", "linseed", "litter", "loaf", "lobster", "longboat", "lotion", "lounge", "louse", "lox", "loyalty", "luck", "lyre", "maestro", "mainstream", "maintainer", "majority", "makeover", "making", "mallard", "management", "manner", "mantua", "marathon", "march", "marimba", "marketplace", "marksman", "markup", "marten", "massage", "masterpiece", "mathematics", "meadow", "meal", "meander", "meatloaf", "mechanic", "median", "membership", "mentor", "merit", "metabolite", "metal", "middle", "midwife", "milestone", "millet", "minion", "minister", "minor", "minority", "mixture", "mobility", "molasses", "mom", "moment", "monasticism", "monocle", "monster", "morbidity", "morning", "mortise", "mountain", "mouser", "mousse", "mozzarella", "muscat", "mythology", "napkin", "necklace", "nectarine", "negotiation", "nephew", "nerve", "netsuke", "newsletter", "newsprint", "newsstand", "nightlife", "noon", "nougat", "nucleotidase", "nudge", "numeracy", "numeric", "nun", "obedience", "obesity", "object", "obligation", "ocelot", "octave", "offset", "oil", "omelet", "onset", "opera", "operating", "optimal", "orchid", "order", "ostrich", "other", "outlaw", "outrun", "outset", "overcoat", "overheard", "overload", "ownership", "pacemaker", "packaging", "paintwork", "palate", "pants", "pantyhose", "papa", "parade", "parsnip", "partridge", "passport", "pasta", "patroller", "pear", "pearl", "pecan", "pendant", "peninsula", "pension", "peony", "pepper", "perfection", "permafrost", "perp", "petal", "petticoat", "pharmacopoeia", "phrase", "pick", "piglet", "pigpen", "pigsty", "pile", "pillbox", "pillow", "pilot", "pine", "pinstripe", "place", "plain", "planula", "plastic", "platter", "platypus", "pleasure", "pliers", "plugin", "plumber", "pneumonia", "pocket-watch", "poetry", "polarisation", "polyester", "pomelo", "pop", "poppy", "popularity", "populist", "porter", "possession", "postbox", "precedent", "premeditation", "premier", "premise", "premium", "pressure", "presume", "priesthood", "printer", "privilege", "procurement", "produce", "programme", "prohibition", "promise", "pronoun", "providence", "provider", "provision", "publication", "publicity", "pulse", "punctuation", "pupil", "puppet", "puritan", "quart", "quinoa", "quit", "railway", "range", "rationale", "ravioli", "rawhide", "reach", "reasoning", "reboot", "receptor", "recommendation", "reconsideration", "recovery", "redesign", "relative", "release", "remark", "reorganisation", "repeat", "replacement", "reporter", "representation", "republican", "request", "requirement", "reservation", "resolve", "resource", "responsibility", "restaurant", "retention", "retrospectivity", "reward", "ribbon", "rim", "riser", "roadway", "role", "rosemary", "roundabout", "rubric", "ruin", "rule", "runway", "rust", "safe", "sailor", "saloon", "sand", "sandbar", "sanity", "sarong", "sauerkraut", "saw", "scaffold", "scale", "scarification", "scenario", "schedule", "schnitzel", "scholarship", "scorn", "scorpion", "scout", "scrap", "scratch", "seafood", "seagull", "seal", "season", "secrecy", "secret", "section", "sediment", "self-confidence", "sermon", "sesame", "settler", "shadowbox", "shark", "shipper", "shore", "shoulder", "sideboard", "siege", "sightseeing", "signature", "silk", "simple", "singing", "skean", "skeleton", "skyline", "skyscraper", "slide", "slime", "slipper", "smog", "smoke", "sock", "soliloquy", "solution", "solvency", "someplace", "sonar", "sonata", "sonnet", "soup", "soybean", "space", "spear", "spirit", "spork", "sport", "spring", "sprinkles", "squid", "stall", "starboard", "statue", "status", "stay", "steak", "steeple", "step", "step-mother", "sticker", "stir-fry", "stitcher", "stock", "stool", "story", "strait", "stranger", "strategy", "straw", "stump", "subexpression", "submitter", "subsidy", "substitution", "suitcase", "summary", "summer", "sunbeam", "sundae", "supplier", "surface", "sushi", "suspension", "sustenance", "swanling", "swath", "sweatshop", "swim", "swine", "swing", "switch", "switchboard", "swordfish", "synergy", "t-shirt", "tabletop", "tackle", "tail", "tapioca", "taro", "tarragon", "taxicab", "teammate", "technician", "technologist", "tectonics", "tenant", "tenement", "tennis", "tentacle", "teriyaki", "term", "testimonial", "testing", "thigh", "thongs", "thorn", "thread", "thunderbolt", "thyme", "tinderbox", "toaster", "tomatillo", "tomb", "tomography", "tool", "tooth", "toothbrush", "toothpick", "topsail", "traditionalism", "traffic", "translation", "transom", "transparency", "trash", "travel", "tray", "trench", "tribe", "tributary", "trick", "trolley", "tuba", "tuber", "tune-up", "turret", "tusk", "tuxedo", "typeface", "typewriter", "unblinking", "underneath", "underpants", "understanding", "unibody", "unique", "unit", "utilization", "valentine", "validity", "valley", "valuable", "vanadyl", "vein", "velocity", "venom", "version", "verve", "vestment", "veto", "viability", "vibraphone", "vibration", "vicinity", "video", "violin", "vision", "vista", "vol", "volleyball", "wafer", "waist", "wallaby", "warming", "wasabi", "waterspout", "wear", "wedding", "whack", "whale", "wheel", "widow", "wilderness", "willow", "window", "wombat", "word", "worth", "wriggler", "yak", "yarmulke", "yeast", "yin", "yogurt", "zebra", "zen"];
var ja = ["a", "abaft", "aboard", "about", "above", "absent", "across", "afore", "after", "against", "along", "alongside", "amid", "amidst", "among", "amongst", "an", "anenst", "anti", "apropos", "apud", "around", "as", "aside", "astride", "at", "athwart", "atop", "barring", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "circa", "concerning", "considering", "despite", "down", "during", "except", "excepting", "excluding", "failing", "following", "for", "forenenst", "from", "given", "in", "including", "inside", "into", "lest", "like", "mid", "midst", "minus", "modulo", "near", "next", "notwithstanding", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "pace", "past", "per", "plus", "pro", "qua", "regarding", "round", "sans", "save", "since", "than", "the", "through", "throughout", "till", "times", "to", "toward", "towards", "under", "underneath", "unlike", "until", "unto", "up", "upon", "versus", "via", "vice", "with", "within", "without", "worth"];
var qa = ["abnegate", "abscond", "abseil", "absolve", "accentuate", "accept", "access", "accessorise", "accompany", "account", "accredit", "achieve", "acknowledge", "acquire", "adjourn", "adjudge", "admonish", "adumbrate", "advocate", "afford", "airbrush", "ameliorate", "amend", "amount", "anaesthetise", "analyse", "anesthetize", "anneal", "annex", "antagonize", "ape", "apologise", "apostrophize", "appertain", "appreciate", "appropriate", "approximate", "arbitrate", "archive", "arraign", "arrange", "ascertain", "ascribe", "assail", "atomize", "attend", "attest", "attribute", "augment", "avow", "axe", "baa", "banish", "bank", "baptise", "battle", "beard", "beep", "behold", "belabor", "bemuse", "besmirch", "bestride", "better", "bewail", "bicycle", "bide", "bind", "biodegrade", "blacken", "blaspheme", "bleach", "blend", "blink", "bliss", "bloom", "bludgeon", "bobble", "boggle", "bolster", "book", "boom", "bootleg", "border", "bore", "boss", "braid", "brand", "brandish", "break", "breed", "broadcast", "broadside", "brood", "browse", "buck", "burgeon", "bus", "butter", "buzzing", "camouflage", "cannibalise", "canter", "cap", "capitalise", "capitalize", "capsize", "card", "carouse", "carp", "carpool", "catalog", "catalyze", "catch", "categorise", "cease", "celebrate", "censor", "certify", "char", "charter", "chase", "chatter", "chime", "chip", "christen", "chromakey", "chunder", "chunter", "cinch", "circle", "circulate", "circumnavigate", "clamor", "clamour", "claw", "cleave", "clinch", "clinking", "clone", "clonk", "coagulate", "coexist", "coincide", "collaborate", "colligate", "colorize", "colour", "comb", "come", "commandeer", "commemorate", "communicate", "compete", "conceal", "conceptualize", "conclude", "concrete", "condense", "cone", "confide", "confirm", "confiscate", "confound", "confute", "congregate", "conjecture", "connect", "consign", "construe", "contradict", "contrast", "contravene", "controvert", "convalesce", "converse", "convince", "convoke", "coop", "cop", "corner", "covenant", "cow", "crackle", "cram", "crank", "creak", "creaking", "cripple", "croon", "cross", "crumble", "crystallize", "culminate", "culture", "curry", "curse", "customise", "cycle", "dally", "dampen", "darn", "debit", "debut", "decide", "decode", "decouple", "decriminalize", "deduce", "deduct", "deflate", "deflect", "deform", "defrag", "degenerate", "degrease", "delete", "delight", "deliquesce", "demob", "demobilise", "democratize", "demonstrate", "denitrify", "deny", "depart", "depend", "deplore", "deploy", "deprave", "depute", "dereference", "describe", "desecrate", "deselect", "destock", "detain", "develop", "devise", "dial", "dicker", "digitize", "dilate", "disapprove", "disarm", "disbar", "discontinue", "disgorge", "dishearten", "dishonor", "disinherit", "dislocate", "dispense", "display", "dispose", "disrespect", "dissemble", "ditch", "divert", "dock", "doodle", "downchange", "downshift", "dowse", "draft", "drag", "drain", "dramatize", "drowse", "drum", "dwell", "economise", "edge", "efface", "egg", "eke", "electrify", "embalm", "embed", "embody", "emboss", "emerge", "emphasise", "emphasize", "emulsify", "encode", "endow", "enfold", "engage", "engender", "enhance", "enlist", "enrage", "enrich", "enroll", "entice", "entomb", "entrench", "entwine", "equate", "essay", "etch", "eulogise", "even", "evince", "exacerbate", "exaggerate", "exalt", "exempt", "exonerate", "expatiate", "explode", "expostulate", "extract", "extricate", "eyeglasses", "fabricate", "facilitate", "factorise", "factorize", "fail", "fall", "familiarize", "fashion", "father", "fathom", "fax", "federate", "feminize", "fence", "fess", "fictionalize", "fiddle", "fidget", "fill", "flash", "fleck", "flight", "floodlight", "floss", "fluctuate", "fluff", "fly", "focalise", "foot", "forearm", "forecast", "foretell", "forgather", "forgo", "fork", "form", "forswear", "founder", "fraternise", "fray", "frizz", "fumigate", "function", "furlough", "fuss", "gad", "gallivant", "galvanize", "gape", "garage", "garrote", "gasp", "gestate", "give", "glimmer", "glisten", "gloat", "gloss", "glow", "gnash", "gnaw", "goose", "govern", "grade", "graduate", "graft", "grok", "guest", "guilt", "gulp", "gum", "gurn", "gust", "gut", "guzzle", "ham", "harangue", "harvest", "hassle", "haul", "haze", "headline", "hearten", "heighten", "highlight", "hoick", "hold", "hole", "hollow", "holster", "home", "homeschool", "hoot", "horn", "horse", "hotfoot", "house", "hover", "howl", "huddle", "huff", "hunger", "hunt", "husk", "hype", "hypothesise", "hypothesize", "idle", "ignite", "imagineer", "impact", "impanel", "implode", "incinerate", "incline", "inculcate", "industrialize", "ingratiate", "inhibit", "inject", "innovate", "inscribe", "insert", "insist", "inspect", "institute", "institutionalize", "intend", "intermarry", "intermesh", "intermix", "internalise", "internalize", "internationalize", "intrigue", "inure", "inveigle", "inventory", "investigate", "irk", "iterate", "jaywalk", "jell", "jeopardise", "jiggle", "jive", "joint", "jot", "jut", "keel", "knife", "knit", "know", "kowtow", "lack", "lampoon", "large", "leap", "lecture", "legitimize", "lend", "libel", "liberalize", "license", "ligate", "list", "lobotomise", "lock", "log", "loose", "low", "lowball", "machine", "magnetize", "major", "make", "malfunction", "manage", "manipulate", "maroon", "masculinize", "mash", "mask", "masquerade", "massage", "masticate", "materialise", "matter", "maul", "memorise", "merge", "mesh", "metabolise", "microblog", "microchip", "micromanage", "militate", "mill", "minister", "minor", "misappropriate", "miscalculate", "misfire", "misjudge", "miskey", "mismatch", "mispronounce", "misread", "misreport", "misspend", "mob", "mobilise", "mobilize", "moisten", "mooch", "moor", "moralise", "mortar", "mosh", "mothball", "motivate", "motor", "mould", "mount", "muddy", "mummify", "mutate", "mystify", "nab", "narrate", "narrowcast", "nasalise", "nauseate", "navigate", "neaten", "neck", "neglect", "norm", "notarize", "object", "obscure", "observe", "obsess", "obstruct", "obtrude", "offend", "offset", "option", "orchestrate", "orient", "orientate", "outbid", "outdo", "outfit", "outflank", "outfox", "outnumber", "outrank", "outrun", "outsource", "overburden", "overcharge", "overcook", "overdub", "overfeed", "overload", "overplay", "overproduce", "overreact", "override", "overspend", "overstay", "overtrain", "overvalue", "overwork", "own", "oxidise", "oxidize", "oxygenate", "pace", "pack", "pale", "pant", "paralyse", "parody", "part", "pause", "pave", "penalise", "persecute", "personalise", "perspire", "pertain", "peter", "pike", "pillory", "pinion", "pip", "pity", "pivot", "pixellate", "plagiarise", "plait", "plan", "please", "pluck", "ponder", "popularize", "portray", "prance", "preclude", "preheat", "prejudge", "preregister", "presell", "preside", "pretend", "print", "prioritize", "probate", "probe", "proceed", "procrastinate", "profane", "progress", "proliferate", "proofread", "propound", "proselytise", "provision", "pry", "publicize", "puff", "pull", "pulp", "pulverize", "purse", "put", "putrefy", "quadruple", "quaff", "quantify", "quarrel", "quash", "quaver", "question", "quiet", "quintuple", "quip", "quit", "rag", "rally", "ramp", "randomize", "rationalise", "rationalize", "ravage", "ravel", "react", "readies", "readjust", "readmit", "ready", "reapply", "rear", "reassemble", "rebel", "reboot", "reborn", "rebound", "rebuff", "rebuild", "rebuke", "recede", "reckon", "reclassify", "recompense", "reconstitute", "record", "recount", "redact", "redevelop", "redound", "redraw", "redress", "reel", "refer", "reference", "refine", "reflate", "refute", "regulate", "reiterate", "rejigger", "rejoin", "rekindle", "relaunch", "relieve", "remand", "remark", "reopen", "reorient", "replicate", "repossess", "represent", "reprimand", "reproach", "reprove", "repurpose", "requite", "reschedule", "resort", "respray", "restructure", "retool", "retract", "revere", "revitalise", "revoke", "reword", "rewrite", "ride", "ridge", "rim", "ring", "rise", "rival", "roger", "rosin", "rot", "rout", "row", "rue", "rule", "safeguard", "sashay", "sate", "satirise", "satirize", "satisfy", "saturate", "savour", "scale", "scamper", "scar", "scare", "scarper", "scent", "schematise", "scheme", "schlep", "scoff", "scoop", "scope", "scotch", "scowl", "scrabble", "scram", "scramble", "scrape", "screw", "scruple", "scrutinise", "scuffle", "scuttle", "search", "secularize", "see", "segregate", "sell", "sense", "sensitize", "sequester", "serenade", "serialize", "serve", "service", "settle", "sew", "shaft", "sham", "shampoo", "shanghai", "shear", "sheathe", "shell", "shinny", "shirk", "shoot", "shoulder", "shout", "shovel", "showboat", "shred", "shrill", "shudder", "shush", "sidetrack", "sign", "silt", "sin", "singe", "sit", "sizzle", "skateboard", "ski", "slake", "slap", "slather", "sleet", "slink", "slip", "slope", "slump", "smarten", "smuggle", "snack", "sneak", "sniff", "snoop", "snow", "snowplow", "snuggle", "soap", "solace", "solder", "solicit", "source", "spark", "spattering", "spectacles", "spectate", "spellcheck", "spew", "spice", "spirit", "splash", "splay", "split", "splosh", "splurge", "spook", "square", "squirm", "stabilise", "stable", "stack", "stage", "stake", "starch", "state", "statement", "stiffen", "stigmatize", "sting", "stint", "stoop", "store", "storyboard", "stratify", "structure", "stuff", "stunt", "substantiate", "subtract", "suckle", "suffice", "suffocate", "summarise", "sun", "sunbathe", "sunder", "sup", "surge", "surprise", "swat", "swathe", "sway", "swear", "swelter", "swerve", "swill", "swing", "symbolise", "synthesise", "syringe", "table", "tabulate", "tag", "tame", "tank", "tankful", "tarry", "task", "taxicab", "team", "telescope", "tenant", "terraform", "terrorise", "testify", "think", "throbbing", "thump", "tighten", "toady", "toe", "tough", "tousle", "traduce", "train", "transcend", "transplant", "trash", "treasure", "treble", "trek", "trial", "tromp", "trouser", "trust", "tune", "tut", "twine", "twist", "typify", "unbalance", "uncork", "uncover", "underachieve", "undergo", "underplay", "unearth", "unfreeze", "unfurl", "unlearn", "unscramble", "unzip", "uproot", "upsell", "usher", "vacation", "vamoose", "vanish", "vary", "veg", "venture", "verify", "vet", "veto", "volunteer", "vulgarise", "waft", "wallop", "waltz", "warp", "wash", "waver", "weary", "weatherize", "wedge", "weep", "weight", "welcome", "westernise", "westernize", "while", "whine", "whisper", "whistle", "whitewash", "whup", "wilt", "wing", "wire", "wisecrack", "wolf", "wound", "wring", "writ", "yak", "yawn", "yearn", "yuppify"];
var Cr = { adjective: Oa, adverb: xa, conjunction: za, interjection: Va, noun: Ya, preposition: ja, verb: qa };
var Ua = Cr;
var fr = { airline: o, animal: C, app: B, book: P, cell_phone: W, color: F, commerce: I, company: U, database: _, date: $, finance: ce, food: ve, hacker: Le, internet: He, location: Qe, lorem: $e, metadata: ea, music: ia, person: Aa, phone_number: La, science: Pa, team: Ga, vehicle: Ka, word: Ua };
var ys = fr;

// node_modules/@faker-js/faker/dist/chunk-RUBTNZQP.js
var m2 = class extends Error {
};
function Ce2(i2) {
  let e2 = Object.getPrototypeOf(i2);
  do {
    for (let r2 of Object.getOwnPropertyNames(e2))
      typeof i2[r2] == "function" && r2 !== "constructor" && (i2[r2] = i2[r2].bind(i2));
    e2 = Object.getPrototypeOf(e2);
  } while (e2 !== Object.prototype);
}
var x2 = class {
  constructor(e2) {
    this.faker = e2;
    Ce2(this);
  }
};
var p2 = class extends x2 {
  constructor(r2) {
    super(r2);
    this.faker = r2;
  }
};
var Ne2 = ((t2) => (t2.Narrowbody = "narrowbody", t2.Regional = "regional", t2.Widebody = "widebody", t2))(Ne2 || {});
var kr2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var xr = ["0", "O", "1", "I", "L"];
var Ar = { regional: 20, narrowbody: 35, widebody: 60 };
var Er = { regional: ["A", "B", "C", "D"], narrowbody: ["A", "B", "C", "D", "E", "F"], widebody: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] };
var F2 = class extends p2 {
  airport() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airport);
  }
  airline() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airline);
  }
  airplane() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airplane);
  }
  recordLocator(e2 = {}) {
    let { allowNumerics: r2 = false, allowVisuallySimilarCharacters: t2 = false } = e2, a2 = [];
    return r2 || a2.push(...kr2), t2 || a2.push(...xr), this.faker.string.alphanumeric({ length: 6, casing: "upper", exclude: a2 });
  }
  seat(e2 = {}) {
    let { aircraftType: r2 = "narrowbody" } = e2, t2 = Ar[r2], a2 = Er[r2], n2 = this.faker.number.int({ min: 1, max: t2 }), o2 = this.faker.helpers.arrayElement(a2);
    return `${n2}${o2}`;
  }
  aircraftType() {
    return this.faker.helpers.enumValue(Ne2);
  }
  flightNumber(e2 = {}) {
    let { length: r2 = { min: 1, max: 4 }, addLeadingZeros: t2 = false } = e2, a2 = this.faker.string.numeric({ length: r2, allowLeadingZeros: false });
    return t2 ? a2.padStart(4, "0") : a2;
  }
};
var De2 = ((n2) => (n2.SRGB = "sRGB", n2.DisplayP3 = "display-p3", n2.REC2020 = "rec2020", n2.A98RGB = "a98-rgb", n2.ProphotoRGB = "prophoto-rgb", n2))(De2 || {});
var Re2 = ((c2) => (c2.RGB = "rgb", c2.RGBA = "rgba", c2.HSL = "hsl", c2.HSLA = "hsla", c2.HWB = "hwb", c2.CMYK = "cmyk", c2.LAB = "lab", c2.LCH = "lch", c2.COLOR = "color", c2))(Re2 || {});
function wr(i2, e2) {
  let { prefix: r2, casing: t2 } = e2;
  switch (t2) {
    case "upper": {
      i2 = i2.toUpperCase();
      break;
    }
    case "lower": {
      i2 = i2.toLowerCase();
      break;
    }
    case "mixed":
  }
  return r2 && (i2 = r2 + i2), i2;
}
function Le2(i2) {
  return i2.map((r2) => {
    if (r2 % 1 !== 0) {
      let a2 = new ArrayBuffer(4);
      new DataView(a2).setFloat32(0, r2);
      let n2 = new Uint8Array(a2);
      return Le2([...n2]).replaceAll(" ", "");
    }
    return (r2 >>> 0).toString(2).padStart(8, "0");
  }).join(" ");
}
function A2(i2) {
  return Math.round(i2 * 100);
}
function Sr2(i2, e2 = "rgb", r2 = "sRGB") {
  switch (e2) {
    case "rgba":
      return `rgba(${i2[0]}, ${i2[1]}, ${i2[2]}, ${i2[3]})`;
    case "color":
      return `color(${r2} ${i2[0]} ${i2[1]} ${i2[2]})`;
    case "cmyk":
      return `cmyk(${A2(i2[0])}%, ${A2(i2[1])}%, ${A2(i2[2])}%, ${A2(i2[3])}%)`;
    case "hsl":
      return `hsl(${i2[0]}deg ${A2(i2[1])}% ${A2(i2[2])}%)`;
    case "hsla":
      return `hsl(${i2[0]}deg ${A2(i2[1])}% ${A2(i2[2])}% / ${A2(i2[3])})`;
    case "hwb":
      return `hwb(${i2[0]} ${A2(i2[1])}% ${A2(i2[2])}%)`;
    case "lab":
      return `lab(${A2(i2[0])}% ${i2[1]} ${i2[2]})`;
    case "lch":
      return `lch(${A2(i2[0])}% ${i2[1]} ${i2[2]})`;
    case "rgb":
      return `rgb(${i2[0]}, ${i2[1]}, ${i2[2]})`;
  }
}
function D2(i2, e2, r2 = "rgb", t2 = "sRGB") {
  switch (e2) {
    case "css":
      return Sr2(i2, r2, t2);
    case "binary":
      return Le2(i2);
    case "decimal":
      return i2;
  }
}
var G2 = class extends p2 {
  human() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.human);
  }
  space() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.space);
  }
  cssSupportedFunction() {
    return this.faker.helpers.enumValue(Re2);
  }
  cssSupportedSpace() {
    return this.faker.helpers.enumValue(De2);
  }
  rgb(e2 = {}) {
    let { format: r2 = "hex", includeAlpha: t2 = false, prefix: a2 = "#", casing: n2 = "lower" } = e2, o2, s2 = "rgb";
    return r2 === "hex" ? (o2 = this.faker.string.hexadecimal({ length: t2 ? 8 : 6, prefix: "" }), o2 = wr(o2, { prefix: a2, casing: n2 }), o2) : (o2 = Array.from({ length: 3 }, () => this.faker.number.int(255)), t2 && (o2.push(this.faker.number.float({ multipleOf: 0.01 })), s2 = "rgba"), D2(o2, r2, s2));
  }
  cmyk(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = Array.from({ length: 4 }, () => this.faker.number.float({ multipleOf: 0.01 }));
    return D2(t2, r2, "cmyk");
  }
  hsl(e2 = {}) {
    let { format: r2 = "decimal", includeAlpha: t2 = false } = e2, a2 = [this.faker.number.int(360)];
    for (let n2 = 0;n2 < (e2?.includeAlpha ? 3 : 2); n2++)
      a2.push(this.faker.number.float({ multipleOf: 0.01 }));
    return D2(a2, r2, t2 ? "hsla" : "hsl");
  }
  hwb(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = [this.faker.number.int(360)];
    for (let a2 = 0;a2 < 2; a2++)
      t2.push(this.faker.number.float({ multipleOf: 0.01 }));
    return D2(t2, r2, "hwb");
  }
  lab(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = [this.faker.number.float({ multipleOf: 0.000001 })];
    for (let a2 = 0;a2 < 2; a2++)
      t2.push(this.faker.number.float({ min: -100, max: 100, multipleOf: 0.0001 }));
    return D2(t2, r2, "lab");
  }
  lch(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = [this.faker.number.float({ multipleOf: 0.000001 })];
    for (let a2 = 0;a2 < 2; a2++)
      t2.push(this.faker.number.float({ max: 230, multipleOf: 0.1 }));
    return D2(t2, r2, "lch");
  }
  colorByCSSColorSpace(e2 = {}) {
    let { format: r2 = "decimal", space: t2 = "sRGB" } = e2, a2 = Array.from({ length: 3 }, () => this.faker.number.float({ multipleOf: 0.0001 }));
    return D2(a2, r2, "color", t2);
  }
};
var be2 = ((a2) => (a2.Legacy = "legacy", a2.Segwit = "segwit", a2.Bech32 = "bech32", a2.Taproot = "taproot", a2))(be2 || {});
var Pe2 = ((r2) => (r2.Mainnet = "mainnet", r2.Testnet = "testnet", r2))(Pe2 || {});
var Be2 = { legacy: { prefix: { mainnet: "1", testnet: "m" }, length: { min: 26, max: 34 }, casing: "mixed", exclude: "0OIl" }, segwit: { prefix: { mainnet: "3", testnet: "2" }, length: { min: 26, max: 34 }, casing: "mixed", exclude: "0OIl" }, bech32: { prefix: { mainnet: "bc1", testnet: "tb1" }, length: { min: 42, max: 42 }, casing: "lower", exclude: "1bBiIoO" }, taproot: { prefix: { mainnet: "bc1p", testnet: "tb1p" }, length: { min: 62, max: 62 }, casing: "lower", exclude: "1bBiIoO" } };
var de2 = typeof Buffer > "u" || !ve2("base64") ? (i2) => {
  let e2 = new TextEncoder().encode(i2), r2 = Array.from(e2, (t2) => String.fromCodePoint(t2)).join("");
  return btoa(r2);
} : (i2) => Buffer.from(i2).toString("base64");
var ge2 = typeof Buffer > "u" || !ve2("base64url") ? (i2) => de2(i2).replaceAll("+", "-").replaceAll("/", "_").replaceAll(/=+$/g, "") : (i2) => Buffer.from(i2).toString("base64url");
function ve2(i2) {
  try {
    return typeof Buffer.from("test").toString(i2) == "string";
  } catch {
    return false;
  }
}
function S2(i2) {
  let { deprecated: e2, since: r2, until: t2, proposed: a2 } = i2, n2 = `[@faker-js/faker]: ${e2} is deprecated`;
  r2 && (n2 += ` since v${r2}`), t2 && (n2 += ` and will be removed in v${t2}`), a2 && (n2 += `. Please use ${a2} instead`), console.warn(`${n2}.`);
}
var Mr = Object.fromEntries([["\u0410", "A"], ["\u0430", "a"], ["\u0411", "B"], ["\u0431", "b"], ["\u0412", "V"], ["\u0432", "v"], ["\u0413", "G"], ["\u0433", "g"], ["\u0414", "D"], ["\u0434", "d"], ["\u044A\u0435", "ye"], ["\u042A\u0435", "Ye"], ["\u044A\u0415", "yE"], ["\u042A\u0415", "YE"], ["\u0415", "E"], ["\u0435", "e"], ["\u0401", "Yo"], ["\u0451", "yo"], ["\u0416", "Zh"], ["\u0436", "zh"], ["\u0417", "Z"], ["\u0437", "z"], ["\u0418", "I"], ["\u0438", "i"], ["\u044B\u0439", "iy"], ["\u042B\u0439", "Iy"], ["\u042B\u0419", "IY"], ["\u044B\u0419", "iY"], ["\u0419", "Y"], ["\u0439", "y"], ["\u041A", "K"], ["\u043A", "k"], ["\u041B", "L"], ["\u043B", "l"], ["\u041C", "M"], ["\u043C", "m"], ["\u041D", "N"], ["\u043D", "n"], ["\u041E", "O"], ["\u043E", "o"], ["\u041F", "P"], ["\u043F", "p"], ["\u0420", "R"], ["\u0440", "r"], ["\u0421", "S"], ["\u0441", "s"], ["\u0422", "T"], ["\u0442", "t"], ["\u0423", "U"], ["\u0443", "u"], ["\u0424", "F"], ["\u0444", "f"], ["\u0425", "Kh"], ["\u0445", "kh"], ["\u0426", "Ts"], ["\u0446", "ts"], ["\u0427", "Ch"], ["\u0447", "ch"], ["\u0428", "Sh"], ["\u0448", "sh"], ["\u0429", "Sch"], ["\u0449", "sch"], ["\u042A", ""], ["\u044A", ""], ["\u042B", "Y"], ["\u044B", "y"], ["\u042C", ""], ["\u044C", ""], ["\u042D", "E"], ["\u044D", "e"], ["\u042E", "Yu"], ["\u044E", "yu"], ["\u042F", "Ya"], ["\u044F", "ya"]]);
var Tr = Object.fromEntries([["\u03B1", "a"], ["\u03B2", "v"], ["\u03B3", "g"], ["\u03B4", "d"], ["\u03B5", "e"], ["\u03B6", "z"], ["\u03B7", "i"], ["\u03B8", "th"], ["\u03B9", "i"], ["\u03BA", "k"], ["\u03BB", "l"], ["\u03BC", "m"], ["\u03BD", "n"], ["\u03BE", "ks"], ["\u03BF", "o"], ["\u03C0", "p"], ["\u03C1", "r"], ["\u03C3", "s"], ["\u03C4", "t"], ["\u03C5", "y"], ["\u03C6", "f"], ["\u03C7", "x"], ["\u03C8", "ps"], ["\u03C9", "o"], ["\u03AC", "a"], ["\u03AD", "e"], ["\u03AF", "i"], ["\u03CC", "o"], ["\u03CD", "y"], ["\u03AE", "i"], ["\u03CE", "o"], ["\u03C2", "s"], ["\u03CA", "i"], ["\u03B0", "y"], ["\u03CB", "y"], ["\u0390", "i"], ["\u0391", "A"], ["\u0392", "B"], ["\u0393", "G"], ["\u0394", "D"], ["\u0395", "E"], ["\u0396", "Z"], ["\u0397", "I"], ["\u0398", "TH"], ["\u0399", "I"], ["\u039A", "K"], ["\u039B", "L"], ["\u039C", "M"], ["\u039D", "N"], ["\u039E", "KS"], ["\u039F", "O"], ["\u03A0", "P"], ["\u03A1", "R"], ["\u03A3", "S"], ["\u03A4", "T"], ["\u03A5", "Y"], ["\u03A6", "F"], ["\u03A7", "X"], ["\u03A8", "PS"], ["\u03A9", "O"], ["\u0386", "A"], ["\u0388", "E"], ["\u038A", "I"], ["\u038C", "O"], ["\u038E", "Y"], ["\u0389", "I"], ["\u038F", "O"], ["\u03AA", "I"], ["\u03AB", "Y"]]);
var Cr2 = Object.fromEntries([["\u0621", "e"], ["\u0622", "a"], ["\u0623", "a"], ["\u0624", "w"], ["\u0625", "i"], ["\u0626", "y"], ["\u0627", "a"], ["\u0628", "b"], ["\u0629", "t"], ["\u062A", "t"], ["\u062B", "th"], ["\u062C", "j"], ["\u062D", "h"], ["\u062E", "kh"], ["\u062F", "d"], ["\u0630", "dh"], ["\u0631", "r"], ["\u0632", "z"], ["\u0633", "s"], ["\u0634", "sh"], ["\u0635", "s"], ["\u0636", "d"], ["\u0637", "t"], ["\u0638", "z"], ["\u0639", "e"], ["\u063A", "gh"], ["\u0640", "_"], ["\u0641", "f"], ["\u0642", "q"], ["\u0643", "k"], ["\u0644", "l"], ["\u0645", "m"], ["\u0646", "n"], ["\u0647", "h"], ["\u0648", "w"], ["\u0649", "a"], ["\u064A", "y"], ["\u064E\u200E", "a"], ["\u064F", "u"], ["\u0650\u200E", "i"]]);
var Nr = Object.fromEntries([["\u0561", "a"], ["\u0531", "A"], ["\u0562", "b"], ["\u0532", "B"], ["\u0563", "g"], ["\u0533", "G"], ["\u0564", "d"], ["\u0534", "D"], ["\u0565", "ye"], ["\u0535", "Ye"], ["\u0566", "z"], ["\u0536", "Z"], ["\u0567", "e"], ["\u0537", "E"], ["\u0568", "y"], ["\u0538", "Y"], ["\u0569", "t"], ["\u0539", "T"], ["\u056A", "zh"], ["\u053A", "Zh"], ["\u056B", "i"], ["\u053B", "I"], ["\u056C", "l"], ["\u053C", "L"], ["\u056D", "kh"], ["\u053D", "Kh"], ["\u056E", "ts"], ["\u053E", "Ts"], ["\u056F", "k"], ["\u053F", "K"], ["\u0570", "h"], ["\u0540", "H"], ["\u0571", "dz"], ["\u0541", "Dz"], ["\u0572", "gh"], ["\u0542", "Gh"], ["\u0573", "tch"], ["\u0543", "Tch"], ["\u0574", "m"], ["\u0544", "M"], ["\u0575", "y"], ["\u0545", "Y"], ["\u0576", "n"], ["\u0546", "N"], ["\u0577", "sh"], ["\u0547", "Sh"], ["\u0578", "vo"], ["\u0548", "Vo"], ["\u0579", "ch"], ["\u0549", "Ch"], ["\u057A", "p"], ["\u054A", "P"], ["\u057B", "j"], ["\u054B", "J"], ["\u057C", "r"], ["\u054C", "R"], ["\u057D", "s"], ["\u054D", "S"], ["\u057E", "v"], ["\u054E", "V"], ["\u057F", "t"], ["\u054F", "T"], ["\u0580", "r"], ["\u0550", "R"], ["\u0581", "c"], ["\u0551", "C"], ["\u0578\u0582", "u"], ["\u0548\u0552", "U"], ["\u0548\u0582", "U"], ["\u0583", "p"], ["\u0553", "P"], ["\u0584", "q"], ["\u0554", "Q"], ["\u0585", "o"], ["\u0555", "O"], ["\u0586", "f"], ["\u0556", "F"], ["\u0587", "yev"]]);
var Dr = Object.fromEntries([["\u0686", "ch"], ["\u06A9", "k"], ["\u06AF", "g"], ["\u067E", "p"], ["\u0698", "zh"], ["\u06CC", "y"]]);
var Rr = Object.fromEntries([["\u05D0", "a"], ["\u05D1", "b"], ["\u05D2", "g"], ["\u05D3", "d"], ["\u05D4", "h"], ["\u05D5", "v"], ["\u05D6", "z"], ["\u05D7", "ch"], ["\u05D8", "t"], ["\u05D9", "y"], ["\u05DB", "k"], ["\u05DA", "kh"], ["\u05DC", "l"], ["\u05DD", "m"], ["\u05DE", "m"], ["\u05DF", "n"], ["\u05E0", "n"], ["\u05E1", "s"], ["\u05E2", "a"], ["\u05E4", "f"], ["\u05E3", "ph"], ["\u05E6", "ts"], ["\u05E5", "ts"], ["\u05E7", "k"], ["\u05E8", "r"], ["\u05E9", "sh"], ["\u05EA", "t"], ["\u05D5", "v"]]);
var ye2 = { ...Mr, ...Tr, ...Cr2, ...Dr, ...Nr, ...Rr };
var Lr = ((u2) => (u2.Any = "any", u2.Loopback = "loopback", u2.PrivateA = "private-a", u2.PrivateB = "private-b", u2.PrivateC = "private-c", u2.TestNet1 = "test-net-1", u2.TestNet2 = "test-net-2", u2.TestNet3 = "test-net-3", u2.LinkLocal = "link-local", u2.Multicast = "multicast", u2))(Lr || {});
var Pr = { any: "0.0.0.0/0", loopback: "127.0.0.0/8", "private-a": "10.0.0.0/8", "private-b": "172.16.0.0/12", "private-c": "192.168.0.0/16", "test-net-1": "192.0.2.0/24", "test-net-2": "198.51.100.0/24", "test-net-3": "203.0.113.0/24", "link-local": "169.254.0.0/16", multicast: "224.0.0.0/4" };
function Ie2(i2) {
  return /^[a-z][a-z-]*[a-z]$/i.exec(i2) !== null;
}
function $e2(i2, e2) {
  let r2 = i2.helpers.slugify(e2);
  if (Ie2(r2))
    return r2;
  let t2 = i2.helpers.slugify(i2.lorem.word());
  return Ie2(t2) ? t2 : i2.string.alpha({ casing: "lower", length: i2.number.int({ min: 4, max: 8 }) });
}
function ke2(i2, e2) {
  return Math.floor((i2.number.int(256) + e2) / 2).toString(16).padStart(2, "0");
}
var O2 = class extends p2 {
  email(e2 = {}) {
    let { firstName: r2, lastName: t2, provider: a2 = this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email), allowSpecialCharacters: n2 = false } = e2, o2 = this.username({ firstName: r2, lastName: t2 });
    if (o2 = o2.replaceAll(/[^A-Za-z0-9._+-]+/g, ""), o2 = o2.substring(0, 50), n2) {
      let s2 = [..."._-"], l2 = [...".!#$%&'*+-/=?^_`{|}~"];
      o2 = o2.replace(this.faker.helpers.arrayElement(s2), this.faker.helpers.arrayElement(l2));
    }
    return o2 = o2.replaceAll(/\.{2,}/g, "."), o2 = o2.replace(/^\./, ""), o2 = o2.replace(/\.$/, ""), `${o2}@${a2}`;
  }
  exampleEmail(e2 = {}) {
    let { firstName: r2, lastName: t2, allowSpecialCharacters: a2 = false } = e2, n2 = this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);
    return this.email({ firstName: r2, lastName: t2, provider: n2, allowSpecialCharacters: a2 });
  }
  userName(e2 = {}) {
    return S2({ deprecated: "faker.internet.userName()", proposed: "faker.internet.username()", since: "9.1.0", until: "10.0.0" }), this.username(e2);
  }
  username(e2 = {}) {
    let { firstName: r2 = this.faker.person.firstName(), lastName: t2 = this.faker.person.lastName(), lastName: a2 } = e2, n2 = this.faker.helpers.arrayElement([".", "_"]), o2 = this.faker.number.int(99), s2 = [() => `${r2}${n2}${t2}${o2}`, () => `${r2}${n2}${t2}`];
    a2 || s2.push(() => `${r2}${o2}`);
    let l2 = this.faker.helpers.arrayElement(s2)();
    return l2 = l2.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g, ""), l2 = [...l2].map((c2) => {
      if (ye2[c2])
        return ye2[c2];
      let u2 = c2.codePointAt(0) ?? Number.NaN;
      return u2 < 128 ? c2 : u2.toString(36);
    }).join(""), l2 = l2.toString().replaceAll("'", ""), l2 = l2.replaceAll(" ", ""), l2;
  }
  displayName(e2 = {}) {
    let { firstName: r2 = this.faker.person.firstName(), lastName: t2 = this.faker.person.lastName() } = e2, a2 = this.faker.helpers.arrayElement([".", "_"]), n2 = this.faker.number.int(99), o2 = [() => `${r2}${n2}`, () => `${r2}${a2}${t2}`, () => `${r2}${a2}${t2}${n2}`], s2 = this.faker.helpers.arrayElement(o2)();
    return s2 = s2.toString().replaceAll("'", ""), s2 = s2.replaceAll(" ", ""), s2;
  }
  protocol() {
    let e2 = ["http", "https"];
    return this.faker.helpers.arrayElement(e2);
  }
  httpMethod() {
    let e2 = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    return this.faker.helpers.arrayElement(e2);
  }
  httpStatusCode(e2 = {}) {
    let { types: r2 = Object.keys(this.faker.definitions.internet.http_status_code) } = e2, t2 = this.faker.helpers.arrayElement(r2);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[t2]);
  }
  url(e2 = {}) {
    let { appendSlash: r2 = this.faker.datatype.boolean(), protocol: t2 = "https" } = e2;
    return `${t2}://${this.domainName()}${r2 ? "/" : ""}`;
  }
  domainName() {
    return `${this.domainWord()}.${this.domainSuffix()}`;
  }
  domainSuffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix);
  }
  domainWord() {
    let e2 = $e2(this.faker, this.faker.word.adjective()), r2 = $e2(this.faker, this.faker.word.noun());
    return `${e2}-${r2}`.toLowerCase();
  }
  ip() {
    return this.faker.datatype.boolean() ? this.ipv4() : this.ipv6();
  }
  ipv4(e2 = {}) {
    let { network: r2 = "any", cidrBlock: t2 = Pr[r2] } = e2;
    if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2}$/.test(t2))
      throw new m2(`Invalid CIDR block provided: ${t2}. Must be in the format x.x.x.x/y.`);
    let [a2, n2] = t2.split("/"), o2 = 4294967295 >>> Number.parseInt(n2), [s2, l2, c2, u2] = a2.split(".").map(Number), f2 = (s2 << 24 | l2 << 16 | c2 << 8 | u2) & ~o2, g2 = this.faker.number.int(o2), b2 = f2 | g2;
    return [b2 >>> 24 & 255, b2 >>> 16 & 255, b2 >>> 8 & 255, b2 & 255].join(".");
  }
  ipv6() {
    return Array.from({ length: 8 }, () => this.faker.string.hexadecimal({ length: 4, casing: "lower", prefix: "" })).join(":");
  }
  port() {
    return this.faker.number.int(65535);
  }
  userAgent() {
    return this.faker.helpers.fake(this.faker.definitions.internet.user_agent_pattern);
  }
  color(e2 = {}) {
    let { redBase: r2 = 0, greenBase: t2 = 0, blueBase: a2 = 0 } = e2, n2 = ke2(this.faker, r2), o2 = ke2(this.faker, t2), s2 = ke2(this.faker, a2);
    return `#${n2}${o2}${s2}`;
  }
  mac(e2 = {}) {
    typeof e2 == "string" && (e2 = { separator: e2 });
    let { separator: r2 = ":" } = e2, t2, a2 = "";
    for ([":", "-", ""].includes(r2) || (r2 = ":"), t2 = 0;t2 < 12; t2++)
      a2 += this.faker.number.hex(15), t2 % 2 === 1 && t2 !== 11 && (a2 += r2);
    return a2;
  }
  password(e2 = {}) {
    let r2 = /[aeiouAEIOU]$/, t2 = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/, a2 = (c2, u2, h2, f2) => {
      if (f2.length >= c2)
        return f2;
      u2 && (h2 = t2.test(f2) ? r2 : t2);
      let g2 = this.faker.number.int(94) + 33, b2 = String.fromCodePoint(g2);
      return u2 && (b2 = b2.toLowerCase()), h2.test(b2) ? a2(c2, u2, h2, f2 + b2) : a2(c2, u2, h2, f2);
    }, { length: n2 = 15, memorable: o2 = false, pattern: s2 = /\w/, prefix: l2 = "" } = e2;
    return a2(n2, o2, s2, l2);
  }
  emoji(e2 = {}) {
    let { types: r2 = Object.keys(this.faker.definitions.internet.emoji) } = e2, t2 = this.faker.helpers.arrayElement(r2);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[t2]);
  }
  jwtAlgorithm() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.jwt_algorithm);
  }
  jwt(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = this.faker.date.recent({ refDate: r2 }), { header: a2 = { alg: this.jwtAlgorithm(), typ: "JWT" }, payload: n2 = { iat: Math.round(t2.valueOf() / 1000), exp: Math.round(this.faker.date.soon({ refDate: t2 }).valueOf() / 1000), nbf: Math.round(this.faker.date.anytime({ refDate: r2 }).valueOf() / 1000), iss: this.faker.company.name(), sub: this.faker.string.uuid(), aud: this.faker.string.uuid(), jti: this.faker.string.uuid() } } = e2, o2 = ge2(JSON.stringify(a2)), s2 = ge2(JSON.stringify(n2)), l2 = this.faker.string.alphanumeric(64);
    return `${o2}.${s2}.${l2}`;
  }
};
var _e2 = ((r2) => (r2.Female = "female", r2.Male = "male", r2))(_e2 || {});
function R2(i2, e2, r2) {
  let { generic: t2, female: a2, male: n2 } = r2;
  switch (e2) {
    case "female":
      return a2 ?? t2;
    case "male":
      return n2 ?? t2;
    default:
      return t2 ?? i2.helpers.arrayElement([a2, n2]) ?? [];
  }
}
var U2 = class extends p2 {
  firstName(e2) {
    return this.faker.helpers.arrayElement(R2(this.faker, e2, this.faker.definitions.person.first_name));
  }
  lastName(e2) {
    if (this.faker.rawDefinitions.person?.last_name_pattern != null) {
      let r2 = this.faker.helpers.weightedArrayElement(R2(this.faker, e2, this.faker.rawDefinitions.person.last_name_pattern));
      return this.faker.helpers.fake(r2);
    }
    return this.faker.helpers.arrayElement(R2(this.faker, e2, this.faker.definitions.person.last_name));
  }
  middleName(e2) {
    return this.faker.helpers.arrayElement(R2(this.faker, e2, this.faker.definitions.person.middle_name));
  }
  fullName(e2 = {}) {
    let { sex: r2 = this.faker.helpers.arrayElement(["female", "male"]), firstName: t2 = this.firstName(r2), lastName: a2 = this.lastName(r2) } = e2, n2 = this.faker.helpers.weightedArrayElement(this.faker.definitions.person.name);
    return this.faker.helpers.mustache(n2, { "person.prefix": () => this.prefix(r2), "person.firstName": () => t2, "person.middleName": () => this.middleName(r2), "person.lastName": () => a2, "person.suffix": () => this.suffix() });
  }
  gender() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.gender);
  }
  sex() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.sex);
  }
  sexType() {
    return this.faker.helpers.enumValue(_e2);
  }
  bio() {
    let { bio_pattern: e2 } = this.faker.definitions.person;
    return this.faker.helpers.fake(e2);
  }
  prefix(e2) {
    return this.faker.helpers.arrayElement(R2(this.faker, e2, this.faker.definitions.person.prefix));
  }
  suffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.suffix);
  }
  jobTitle() {
    return this.faker.helpers.fake(this.faker.definitions.person.job_title_pattern);
  }
  jobDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_descriptor);
  }
  jobArea() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_area);
  }
  jobType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_type);
  }
  zodiacSign() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.western_zodiac_sign);
  }
};
var Br = 0.00000000023283064365386963;
var vr = 1 / 9007199254740992;
var { imul: Ae2, trunc: Ee2 } = Math;
function Fe2(i2) {
  return typeof i2 == "number" ? Ge2(i2) : Ir(i2);
}
function Ge2(i2) {
  let e2 = Array.from({ length: 624 });
  e2[0] = i2;
  for (let r2 = 1;r2 !== 624; ++r2) {
    let t2 = e2[r2 - 1] ^ e2[r2 - 1] >>> 30;
    e2[r2] = Ee2(Ae2(1812433253, t2) + r2);
  }
  return e2;
}
function Ir(i2) {
  let e2 = Ge2(19650218), r2 = 1, t2 = 0;
  for (let a2 = Math.max(624, i2.length);a2 !== 0; --a2) {
    let n2 = e2[r2 - 1] ^ e2[r2 - 1] >>> 30;
    e2[r2] = Ee2((e2[r2] ^ Ae2(n2, 1664525)) + i2[t2] + t2), r2++, t2++, r2 >= 624 && (e2[0] = e2[623], r2 = 1), t2 >= i2.length && (t2 = 0);
  }
  for (let a2 = 623;a2 !== 0; a2--)
    e2[r2] = Ee2((e2[r2] ^ Ae2(e2[r2 - 1] ^ e2[r2 - 1] >>> 30, 1566083941)) - r2), r2++, r2 >= 624 && (e2[0] = e2[623], r2 = 1);
  return e2[0] = 2147483648, e2;
}
function xe2(i2) {
  for (let r2 = 0;r2 !== 227; ++r2) {
    let t2 = (i2[r2] & 2147483648) + (i2[r2 + 1] & 2147483647);
    i2[r2] = i2[r2 + 397] ^ t2 >>> 1 ^ -(t2 & 1) & 2567483615;
  }
  for (let r2 = 227;r2 !== 623; ++r2) {
    let t2 = (i2[r2] & 2147483648) + (i2[r2 + 1] & 2147483647);
    i2[r2] = i2[r2 + 397 - 624] ^ t2 >>> 1 ^ -(t2 & 1) & 2567483615;
  }
  let e2 = (i2[623] & 2147483648) + (i2[0] & 2147483647);
  return i2[623] = i2[396] ^ e2 >>> 1 ^ -(e2 & 1) & 2567483615, i2;
}
var L2 = class {
  constructor(e2 = Math.random() * Number.MAX_SAFE_INTEGER, r2 = xe2(Fe2(e2)), t2 = 0) {
    this.states = r2;
    this.index = t2;
  }
  nextU32() {
    let e2 = this.states[this.index];
    return e2 ^= this.states[this.index] >>> 11, e2 ^= e2 << 7 & 2636928640, e2 ^= e2 << 15 & 4022730752, e2 ^= e2 >>> 18, ++this.index >= 624 && (this.states = xe2(this.states), this.index = 0), e2 >>> 0;
  }
  nextF32() {
    return this.nextU32() * Br;
  }
  nextU53() {
    let e2 = this.nextU32() >>> 5, r2 = this.nextU32() >>> 6;
    return e2 * 67108864 + r2;
  }
  nextF53() {
    return this.nextU53() * vr;
  }
  seed(e2) {
    this.states = xe2(Fe2(e2)), this.index = 0;
  }
};
function P2() {
  return Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
}
function Oe2(i2 = P2()) {
  let e2 = new L2(i2);
  return { next() {
    return e2.nextF53();
  }, seed(r2) {
    e2.seed(r2);
  } };
}
var K2 = class extends x2 {
  boolean(e2 = {}) {
    typeof e2 == "number" && (e2 = { probability: e2 });
    let { probability: r2 = 0.5 } = e2;
    return r2 <= 0 ? false : r2 >= 1 ? true : this.faker.number.float() < r2;
  }
};
function w2(i2, e2 = "refDate") {
  let r2 = new Date(i2);
  if (Number.isNaN(r2.valueOf()))
    throw new m2(`Invalid ${e2} date: ${i2.toString()}`);
  return r2;
}
var j2 = () => {
  throw new m2("You cannot edit the locale data on the faker instance");
};
function Ue2(i2) {
  let e2 = {};
  return new Proxy(i2, { has() {
    return true;
  }, get(r2, t2) {
    return typeof t2 == "symbol" || t2 === "nodeType" ? r2[t2] : (t2 in e2) ? e2[t2] : e2[t2] = $r(t2, r2[t2]);
  }, set: j2, deleteProperty: j2 });
}
function H2(i2, ...e2) {
  if (i2 === null)
    throw new m2(`The locale data for '${e2.join(".")}' aren't applicable to this locale.
  If you think this is a bug, please report it at: https://github.com/faker-js/faker`);
  if (i2 === undefined)
    throw new m2(`The locale data for '${e2.join(".")}' are missing in this locale.
  If this is a custom Faker instance, please make sure all required locales are used e.g. '[de_AT, de, en, base]'.
  Please contribute the missing data to the project or use a locale/Faker instance that has these data.
  For more information see https://fakerjs.dev/guide/localization.html`);
}
function $r(i2, e2 = {}) {
  return new Proxy(e2, { has(r2, t2) {
    return r2[t2] != null;
  }, get(r2, t2) {
    let a2 = r2[t2];
    return typeof t2 == "symbol" || t2 === "nodeType" || H2(a2, i2, t2.toString()), a2;
  }, set: j2, deleteProperty: j2 });
}
var B2 = class extends x2 {
  anytime(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = w2(r2).getTime();
    return this.between({ from: t2 - 1000 * 60 * 60 * 24 * 365, to: t2 + 1000 * 60 * 60 * 24 * 365 });
  }
  past(e2 = {}) {
    let { years: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0)
      throw new m2("Years must be greater than 0.");
    let a2 = w2(t2).getTime();
    return this.between({ from: a2 - r2 * 365 * 24 * 3600 * 1000, to: a2 - 1000 });
  }
  future(e2 = {}) {
    let { years: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0)
      throw new m2("Years must be greater than 0.");
    let a2 = w2(t2).getTime();
    return this.between({ from: a2 + 1000, to: a2 + r2 * 365 * 24 * 3600 * 1000 });
  }
  between(e2) {
    if (e2 == null || e2.from == null || e2.to == null)
      throw new m2("Must pass an options object with `from` and `to` values.");
    let { from: r2, to: t2 } = e2, a2 = w2(r2, "from").getTime(), n2 = w2(t2, "to").getTime();
    if (a2 > n2)
      throw new m2("`from` date must be before `to` date.");
    return new Date(this.faker.number.int({ min: a2, max: n2 }));
  }
  betweens(e2) {
    if (e2 == null || e2.from == null || e2.to == null)
      throw new m2("Must pass an options object with `from` and `to` values.");
    let { from: r2, to: t2, count: a2 = 3 } = e2;
    return this.faker.helpers.multiple(() => this.between({ from: r2, to: t2 }), { count: a2 }).sort((n2, o2) => n2.getTime() - o2.getTime());
  }
  recent(e2 = {}) {
    let { days: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0)
      throw new m2("Days must be greater than 0.");
    let a2 = w2(t2).getTime();
    return this.between({ from: a2 - r2 * 24 * 3600 * 1000, to: a2 - 1000 });
  }
  soon(e2 = {}) {
    let { days: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0)
      throw new m2("Days must be greater than 0.");
    let a2 = w2(t2).getTime();
    return this.between({ from: a2 + 1000, to: a2 + r2 * 24 * 3600 * 1000 });
  }
  birthdate(e2 = {}) {
    let { mode: r2 = "age", min: t2 = 18, max: a2 = 80, refDate: n2 = this.faker.defaultRefDate(), mode: o2, min: s2, max: l2 } = e2;
    if ([s2, l2, o2].filter((f2) => f2 != null).length % 3 !== 0)
      throw new m2("The 'min', 'max', and 'mode' options must be set together.");
    let u2 = w2(n2), h2 = u2.getUTCFullYear();
    switch (r2) {
      case "age": {
        let g2 = new Date(u2).setUTCFullYear(h2 - a2 - 1) + 86400000, b2 = new Date(u2).setUTCFullYear(h2 - t2);
        if (g2 > b2)
          throw new m2(`Max age ${a2} should be greater than or equal to min age ${t2}.`);
        return this.between({ from: g2, to: b2 });
      }
      case "year": {
        let f2 = new Date(Date.UTC(0, 0, 2)).setUTCFullYear(t2), g2 = new Date(Date.UTC(0, 11, 30)).setUTCFullYear(a2);
        if (f2 > g2)
          throw new m2(`Max year ${a2} should be greater than or equal to min year ${t2}.`);
        return this.between({ from: f2, to: g2 });
      }
    }
  }
};
var V2 = class extends B2 {
  constructor(r2) {
    super(r2);
    this.faker = r2;
  }
  month(r2 = {}) {
    let { abbreviated: t2 = false, context: a2 = false } = r2, n2 = this.faker.definitions.date.month, o2;
    t2 ? o2 = a2 && n2.abbr_context != null ? "abbr_context" : "abbr" : o2 = a2 && n2.wide_context != null ? "wide_context" : "wide";
    let s2 = n2[o2];
    return H2(s2, "date.month", o2), this.faker.helpers.arrayElement(s2);
  }
  weekday(r2 = {}) {
    let { abbreviated: t2 = false, context: a2 = false } = r2, n2 = this.faker.definitions.date.weekday, o2;
    t2 ? o2 = a2 && n2.abbr_context != null ? "abbr_context" : "abbr" : o2 = a2 && n2.wide_context != null ? "wide_context" : "wide";
    let s2 = n2[o2];
    return H2(s2, "date.weekday", o2), this.faker.helpers.arrayElement(s2);
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.date.time_zone);
  }
};
var _r = /\.|\(/;
function Ke2(i2, e2, r2 = [e2, e2.rawDefinitions]) {
  if (i2.length === 0)
    throw new m2("Eval expression cannot be empty.");
  if (r2.length === 0)
    throw new m2("Eval entrypoints cannot be empty.");
  let t2 = r2, a2 = i2;
  do {
    let o2;
    a2.startsWith("(") ? [o2, t2] = Fr(a2, t2, i2) : [o2, t2] = Or(a2, t2), a2 = a2.substring(o2), t2 = t2.filter((s2) => s2 != null).map((s2) => Array.isArray(s2) ? e2.helpers.arrayElement(s2) : s2);
  } while (a2.length > 0 && t2.length > 0);
  if (t2.length === 0)
    throw new m2(`Cannot resolve expression '${i2}'`);
  let n2 = t2[0];
  return typeof n2 == "function" ? n2() : n2;
}
function Fr(i2, e2, r2) {
  let [t2, a2] = Gr(i2), n2 = i2[t2 + 1];
  switch (n2) {
    case ".":
    case "(":
    case undefined:
      break;
    default:
      throw new m2(`Expected dot ('.'), open parenthesis ('('), or nothing after function call but got '${n2}'`);
  }
  return [t2 + (n2 === "." ? 2 : 1), e2.map((o2) => typeof o2 == "function" ? o2(...a2) : (console.warn(`[@faker-js/faker]: Invoking expressions which are not functions is deprecated since v9.0 and will be removed in v10.0.
Please remove the parentheses or replace the expression with an actual function.
${r2}
${" ".repeat(r2.length - i2.length)}^`), o2))];
}
function Gr(i2) {
  let e2 = i2.indexOf(")", 1);
  if (e2 === -1)
    throw new m2(`Missing closing parenthesis in '${i2}'`);
  for (;e2 !== -1; ) {
    let t2 = i2.substring(1, e2);
    try {
      return [e2, JSON.parse(`[${t2}]`)];
    } catch {
      if (!t2.includes("'") && !t2.includes('"'))
        try {
          return [e2, JSON.parse(`["${t2}"]`)];
        } catch {
        }
    }
    e2 = i2.indexOf(")", e2 + 1);
  }
  e2 = i2.lastIndexOf(")");
  let r2 = i2.substring(1, e2);
  return [e2, [r2]];
}
function Or(i2, e2) {
  let r2 = _r.exec(i2), t2 = (r2?.[0] ?? "") === ".", a2 = r2?.index ?? i2.length, n2 = i2.substring(0, a2);
  if (n2.length === 0)
    throw new m2(`Expression parts cannot be empty in '${i2}'`);
  let o2 = i2[a2 + 1];
  if (t2 && (o2 == null || o2 === "." || o2 === "("))
    throw new m2(`Found dot without property name in '${i2}'`);
  return [a2 + (t2 ? 1 : 0), e2.map((s2) => Ur(s2, n2))];
}
function Ur(i2, e2) {
  switch (typeof i2) {
    case "function": {
      try {
        i2 = i2();
      } catch {
        return;
      }
      return i2?.[e2];
    }
    case "object":
      return i2?.[e2];
    default:
      return;
  }
}
function je2(i2) {
  let e2 = Kr(i2.replace(/L?$/, "0"));
  return e2 === 0 ? 0 : 10 - e2;
}
function Kr(i2) {
  i2 = i2.replaceAll(/[\s-]/g, "");
  let e2 = 0, r2 = false;
  for (let t2 = i2.length - 1;t2 >= 0; t2--) {
    let a2 = Number.parseInt(i2[t2]);
    r2 && (a2 *= 2, a2 > 9 && (a2 = a2 % 10 + 1)), e2 += a2, r2 = !r2;
  }
  return e2 % 10;
}
function He2(i2, e2, r2, t2) {
  let a2 = 1;
  if (e2)
    switch (e2) {
      case "?": {
        a2 = i2.datatype.boolean() ? 0 : 1;
        break;
      }
      case "*": {
        let n2 = 1;
        for (;i2.datatype.boolean(); )
          n2 *= 2;
        a2 = i2.number.int({ min: 0, max: n2 });
        break;
      }
      case "+": {
        let n2 = 1;
        for (;i2.datatype.boolean(); )
          n2 *= 2;
        a2 = i2.number.int({ min: 1, max: n2 });
        break;
      }
      default:
        throw new m2("Unknown quantifier symbol provided.");
    }
  else
    r2 != null && t2 != null ? a2 = i2.number.int({ min: Number.parseInt(r2), max: Number.parseInt(t2) }) : r2 != null && t2 == null && (a2 = Number.parseInt(r2));
  return a2;
}
function jr(i2, e2 = "") {
  let r2 = /(.)\{(\d+),(\d+)\}/, t2 = /(.)\{(\d+)\}/, a2 = /\[(\d+)-(\d+)\]/, n2, o2, s2, l2, c2 = r2.exec(e2);
  for (;c2 != null; )
    n2 = Number.parseInt(c2[2]), o2 = Number.parseInt(c2[3]), n2 > o2 && (s2 = o2, o2 = n2, n2 = s2), l2 = i2.number.int({ min: n2, max: o2 }), e2 = e2.slice(0, c2.index) + c2[1].repeat(l2) + e2.slice(c2.index + c2[0].length), c2 = r2.exec(e2);
  for (c2 = t2.exec(e2);c2 != null; )
    l2 = Number.parseInt(c2[2]), e2 = e2.slice(0, c2.index) + c2[1].repeat(l2) + e2.slice(c2.index + c2[0].length), c2 = t2.exec(e2);
  for (c2 = a2.exec(e2);c2 != null; )
    n2 = Number.parseInt(c2[1]), o2 = Number.parseInt(c2[2]), n2 > o2 && (s2 = o2, o2 = n2, n2 = s2), e2 = e2.slice(0, c2.index) + i2.number.int({ min: n2, max: o2 }).toString() + e2.slice(c2.index + c2[0].length), c2 = a2.exec(e2);
  return e2;
}
function we2(i2, e2 = "", r2 = "#") {
  let t2 = "";
  for (let a2 = 0;a2 < e2.length; a2++)
    e2.charAt(a2) === r2 ? t2 += i2.number.int(9) : e2.charAt(a2) === "!" ? t2 += i2.number.int({ min: 2, max: 9 }) : t2 += e2.charAt(a2);
  return t2;
}
var v2 = class extends x2 {
  slugify(e2 = "") {
    return e2.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g, "").replaceAll(" ", "-").replaceAll(/[^\w.-]+/g, "");
  }
  replaceSymbols(e2 = "") {
    let r2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t2 = "";
    for (let a2 = 0;a2 < e2.length; a2++)
      e2.charAt(a2) === "#" ? t2 += this.faker.number.int(9) : e2.charAt(a2) === "?" ? t2 += this.arrayElement(r2) : e2.charAt(a2) === "*" ? t2 += this.faker.datatype.boolean() ? this.arrayElement(r2) : this.faker.number.int(9) : t2 += e2.charAt(a2);
    return t2;
  }
  replaceCreditCardSymbols(e2 = "6453-####-####-####-###L", r2 = "#") {
    e2 = jr(this.faker, e2), e2 = we2(this.faker, e2, r2);
    let t2 = je2(e2);
    return e2.replace("L", String(t2));
  }
  fromRegExp(e2) {
    let r2 = false;
    e2 instanceof RegExp && (r2 = e2.flags.includes("i"), e2 = e2.toString(), e2 = /\/(.+?)\//.exec(e2)?.[1] ?? "");
    let t2, a2, n2, o2 = /([.A-Za-z0-9])(?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+))(?![^[]*]|[^{]*})/, s2 = o2.exec(e2);
    for (;s2 != null; ) {
      let f2 = s2[2], g2 = s2[3], b2 = s2[4];
      n2 = He2(this.faker, b2, f2, g2);
      let y2;
      s2[1] === "." ? y2 = this.faker.string.alphanumeric(n2) : r2 ? y2 = this.faker.string.fromCharacters([s2[1].toLowerCase(), s2[1].toUpperCase()], n2) : y2 = s2[1].repeat(n2), e2 = e2.slice(0, s2.index) + y2 + e2.slice(s2.index + s2[0].length), s2 = o2.exec(e2);
    }
    let l2 = /(\d-\d|\w-\w|\d|\w|[-!@#$&()`.+,/"])/, c2 = /\[(\^|)(-|)(.+?)\](?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+)|)/;
    for (s2 = c2.exec(e2);s2 != null; ) {
      let f2 = s2[1] === "^", g2 = s2[2] === "-", b2 = s2[4], y2 = s2[5], N2 = s2[6], k2 = [], _2 = s2[3], C2 = l2.exec(_2);
      for (g2 && k2.push(45);C2 != null; ) {
        if (C2[0].includes("-")) {
          let E2 = C2[0].split("-").map((d2) => d2.codePointAt(0) ?? Number.NaN);
          if (t2 = E2[0], a2 = E2[1], t2 > a2)
            throw new m2("Character range provided is out of order.");
          for (let d2 = t2;d2 <= a2; d2++)
            if (r2 && Number.isNaN(Number(String.fromCodePoint(d2)))) {
              let Te2 = String.fromCodePoint(d2);
              k2.push(Te2.toUpperCase().codePointAt(0) ?? Number.NaN, Te2.toLowerCase().codePointAt(0) ?? Number.NaN);
            } else
              k2.push(d2);
        } else
          r2 && Number.isNaN(Number(C2[0])) ? k2.push(C2[0].toUpperCase().codePointAt(0) ?? Number.NaN, C2[0].toLowerCase().codePointAt(0) ?? Number.NaN) : k2.push(C2[0].codePointAt(0) ?? Number.NaN);
        _2 = _2.substring(C2[0].length), C2 = l2.exec(_2);
      }
      if (n2 = He2(this.faker, N2, b2, y2), f2) {
        let E2 = -1;
        for (let d2 = 48;d2 <= 57; d2++) {
          if (E2 = k2.indexOf(d2), E2 > -1) {
            k2.splice(E2, 1);
            continue;
          }
          k2.push(d2);
        }
        for (let d2 = 65;d2 <= 90; d2++) {
          if (E2 = k2.indexOf(d2), E2 > -1) {
            k2.splice(E2, 1);
            continue;
          }
          k2.push(d2);
        }
        for (let d2 = 97;d2 <= 122; d2++) {
          if (E2 = k2.indexOf(d2), E2 > -1) {
            k2.splice(E2, 1);
            continue;
          }
          k2.push(d2);
        }
      }
      let yr2 = this.multiple(() => String.fromCodePoint(this.arrayElement(k2)), { count: n2 }).join("");
      e2 = e2.slice(0, s2.index) + yr2 + e2.slice(s2.index + s2[0].length), s2 = c2.exec(e2);
    }
    let u2 = /(.)\{(\d+),(\d+)\}/;
    for (s2 = u2.exec(e2);s2 != null; ) {
      if (t2 = Number.parseInt(s2[2]), a2 = Number.parseInt(s2[3]), t2 > a2)
        throw new m2("Numbers out of order in {} quantifier.");
      n2 = this.faker.number.int({ min: t2, max: a2 }), e2 = e2.slice(0, s2.index) + s2[1].repeat(n2) + e2.slice(s2.index + s2[0].length), s2 = u2.exec(e2);
    }
    let h2 = /(.)\{(\d+)\}/;
    for (s2 = h2.exec(e2);s2 != null; )
      n2 = Number.parseInt(s2[2]), e2 = e2.slice(0, s2.index) + s2[1].repeat(n2) + e2.slice(s2.index + s2[0].length), s2 = h2.exec(e2);
    return e2;
  }
  shuffle(e2, r2 = {}) {
    let { inplace: t2 = false } = r2;
    t2 || (e2 = [...e2]);
    for (let a2 = e2.length - 1;a2 > 0; --a2) {
      let n2 = this.faker.number.int(a2);
      [e2[a2], e2[n2]] = [e2[n2], e2[a2]];
    }
    return e2;
  }
  uniqueArray(e2, r2) {
    if (Array.isArray(e2)) {
      let n2 = [...new Set(e2)];
      return this.shuffle(n2).splice(0, r2);
    }
    let t2 = new Set;
    try {
      if (typeof e2 == "function") {
        let a2 = 1000 * r2, n2 = 0;
        for (;t2.size < r2 && n2 < a2; )
          t2.add(e2()), n2++;
      }
    } catch {
    }
    return [...t2];
  }
  mustache(e2, r2) {
    if (e2 == null)
      return "";
    for (let t2 in r2) {
      let a2 = new RegExp(`{{${t2}}}`, "g"), n2 = r2[t2];
      typeof n2 == "string" && (n2 = n2.replaceAll("$", "$$$$")), e2 = e2.replace(a2, n2);
    }
    return e2;
  }
  maybe(e2, r2 = {}) {
    if (this.faker.datatype.boolean(r2))
      return e2();
  }
  objectKey(e2) {
    let r2 = Object.keys(e2);
    return this.arrayElement(r2);
  }
  objectValue(e2) {
    let r2 = this.faker.helpers.objectKey(e2);
    return e2[r2];
  }
  objectEntry(e2) {
    let r2 = this.faker.helpers.objectKey(e2);
    return [r2, e2[r2]];
  }
  arrayElement(e2) {
    if (e2.length === 0)
      throw new m2("Cannot get value from empty dataset.");
    let r2 = e2.length > 1 ? this.faker.number.int({ max: e2.length - 1 }) : 0;
    return e2[r2];
  }
  weightedArrayElement(e2) {
    if (e2.length === 0)
      throw new m2("weightedArrayElement expects an array with at least one element");
    if (!e2.every((n2) => n2.weight > 0))
      throw new m2("weightedArrayElement expects an array of { weight, value } objects where weight is a positive number");
    let r2 = e2.reduce((n2, { weight: o2 }) => n2 + o2, 0), t2 = this.faker.number.float({ min: 0, max: r2 }), a2 = 0;
    for (let { weight: n2, value: o2 } of e2)
      if (a2 += n2, t2 < a2)
        return o2;
    return e2.at(-1).value;
  }
  arrayElements(e2, r2) {
    if (e2.length === 0)
      return [];
    let t2 = this.rangeToNumber(r2 ?? { min: 1, max: e2.length });
    if (t2 >= e2.length)
      return this.shuffle(e2);
    if (t2 <= 0)
      return [];
    let a2 = [...e2], n2 = e2.length, o2 = n2 - t2, s2, l2;
    for (;n2-- > o2; )
      l2 = this.faker.number.int(n2), s2 = a2[l2], a2[l2] = a2[n2], a2[n2] = s2;
    return a2.slice(o2);
  }
  enumValue(e2) {
    let r2 = Object.keys(e2).filter((a2) => Number.isNaN(Number(a2))), t2 = this.arrayElement(r2);
    return e2[t2];
  }
  rangeToNumber(e2) {
    return typeof e2 == "number" ? e2 : this.faker.number.int(e2);
  }
  multiple(e2, r2 = {}) {
    let t2 = this.rangeToNumber(r2.count ?? 3);
    return t2 <= 0 ? [] : Array.from({ length: t2 }, e2);
  }
};
var z2 = class extends v2 {
  constructor(r2) {
    super(r2);
    this.faker = r2;
  }
  fake(r2) {
    r2 = typeof r2 == "string" ? r2 : this.arrayElement(r2);
    let t2 = r2.search(/{{[a-z]/), a2 = r2.indexOf("}}", t2);
    if (t2 === -1 || a2 === -1)
      return r2;
    let o2 = r2.substring(t2 + 2, a2 + 2).replace("}}", "").replace("{{", ""), s2 = Ke2(o2, this.faker), l2 = String(s2), c2 = r2.substring(0, t2) + l2 + r2.substring(a2 + 2);
    return this.fake(c2);
  }
};
var W2 = class extends x2 {
  int(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = Number.MAX_SAFE_INTEGER, multipleOf: a2 = 1 } = e2;
    if (!Number.isInteger(a2))
      throw new m2("multipleOf should be an integer.");
    if (a2 <= 0)
      throw new m2("multipleOf should be greater than 0.");
    let n2 = Math.ceil(r2 / a2), o2 = Math.floor(t2 / a2);
    if (n2 === o2)
      return n2 * a2;
    if (o2 < n2)
      throw t2 >= r2 ? new m2(`No suitable integer value between ${r2} and ${t2} found.`) : new m2(`Max ${t2} should be greater than min ${r2}.`);
    let l2 = this.faker._randomizer.next(), c2 = o2 - n2 + 1;
    return Math.floor(l2 * c2 + n2) * a2;
  }
  float(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 1, fractionDigits: a2, multipleOf: n2, multipleOf: o2 = a2 == null ? undefined : 10 ** -a2 } = e2;
    if (t2 === r2)
      return r2;
    if (t2 < r2)
      throw new m2(`Max ${t2} should be greater than min ${r2}.`);
    if (a2 != null) {
      if (n2 != null)
        throw new m2("multipleOf and fractionDigits cannot be set at the same time.");
      if (!Number.isInteger(a2))
        throw new m2("fractionDigits should be an integer.");
      if (a2 < 0)
        throw new m2("fractionDigits should be greater than or equal to 0.");
    }
    if (o2 != null) {
      if (o2 <= 0)
        throw new m2("multipleOf should be greater than 0.");
      let c2 = Math.log10(o2), u2 = o2 < 1 && Number.isInteger(c2) ? 10 ** -c2 : 1 / o2;
      return this.int({ min: r2 * u2, max: t2 * u2 }) / u2;
    }
    return this.faker._randomizer.next() * (t2 - r2) + r2;
  }
  binary(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 1 } = e2;
    return this.int({ max: t2, min: r2 }).toString(2);
  }
  octal(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 7 } = e2;
    return this.int({ max: t2, min: r2 }).toString(8);
  }
  hex(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 15 } = e2;
    return this.int({ max: t2, min: r2 }).toString(16);
  }
  bigInt(e2 = {}) {
    (typeof e2 == "bigint" || typeof e2 == "number" || typeof e2 == "string" || typeof e2 == "boolean") && (e2 = { max: e2 });
    let r2 = BigInt(e2.min ?? 0), t2 = BigInt(e2.max ?? r2 + BigInt(999999999999999));
    if (t2 === r2)
      return r2;
    if (t2 < r2)
      throw new m2(`Max ${t2} should be larger then min ${r2}.`);
    let a2 = t2 - r2, n2 = BigInt(this.faker.string.numeric({ length: a2.toString(10).length, allowLeadingZeros: true })) % (a2 + BigInt(1));
    return r2 + n2;
  }
  romanNumeral(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: a2 = 1, max: n2 = 3999 } = e2;
    if (a2 < 1)
      throw new m2(`Min value ${a2} should be 1 or greater.`);
    if (n2 > 3999)
      throw new m2(`Max value ${n2} should be 3999 or less.`);
    let o2 = this.int({ min: a2, max: n2 }), s2 = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]], l2 = "";
    for (let [c2, u2] of s2)
      l2 += c2.repeat(Math.floor(o2 / u2)), o2 %= u2;
    return l2;
  }
};
var Se2 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function Ve2(i2) {
  let e2 = i2.valueOf(), r2 = "";
  for (let t2 = 10;t2 > 0; t2--) {
    let a2 = e2 % 32;
    r2 = Se2[a2] + r2, e2 = (e2 - a2) / 32;
  }
  return r2;
}
var Y2 = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Z2 = [..."abcdefghijklmnopqrstuvwxyz"];
var ze2 = [..."0123456789"];
var J2 = class extends x2 {
  fromCharacters(e2, r2 = 1) {
    if (r2 = this.faker.helpers.rangeToNumber(r2), r2 <= 0)
      return "";
    if (typeof e2 == "string" && (e2 = [...e2]), e2.length === 0)
      throw new m2("Unable to generate string: No characters to select from.");
    return this.faker.helpers.multiple(() => this.faker.helpers.arrayElement(e2), { count: r2 }).join("");
  }
  alpha(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let r2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (r2 <= 0)
      return "";
    let { casing: t2 = "mixed" } = e2, { exclude: a2 = [] } = e2;
    typeof a2 == "string" && (a2 = [...a2]);
    let n2;
    switch (t2) {
      case "upper": {
        n2 = [...Y2];
        break;
      }
      case "lower": {
        n2 = [...Z2];
        break;
      }
      case "mixed": {
        n2 = [...Z2, ...Y2];
        break;
      }
    }
    return n2 = n2.filter((o2) => !a2.includes(o2)), this.fromCharacters(n2, r2);
  }
  alphanumeric(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let r2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (r2 <= 0)
      return "";
    let { casing: t2 = "mixed" } = e2, { exclude: a2 = [] } = e2;
    typeof a2 == "string" && (a2 = [...a2]);
    let n2 = [...ze2];
    switch (t2) {
      case "upper": {
        n2.push(...Y2);
        break;
      }
      case "lower": {
        n2.push(...Z2);
        break;
      }
      case "mixed": {
        n2.push(...Z2, ...Y2);
        break;
      }
    }
    return n2 = n2.filter((o2) => !a2.includes(o2)), this.fromCharacters(n2, r2);
  }
  binary(e2 = {}) {
    let { prefix: r2 = "0b" } = e2, t2 = r2;
    return t2 += this.fromCharacters(["0", "1"], e2.length ?? 1), t2;
  }
  octal(e2 = {}) {
    let { prefix: r2 = "0o" } = e2, t2 = r2;
    return t2 += this.fromCharacters(["0", "1", "2", "3", "4", "5", "6", "7"], e2.length ?? 1), t2;
  }
  hexadecimal(e2 = {}) {
    let { casing: r2 = "mixed", prefix: t2 = "0x" } = e2, a2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (a2 <= 0)
      return t2;
    let n2 = this.fromCharacters(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"], a2);
    return r2 === "upper" ? n2 = n2.toUpperCase() : r2 === "lower" && (n2 = n2.toLowerCase()), `${t2}${n2}`;
  }
  numeric(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let r2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (r2 <= 0)
      return "";
    let { allowLeadingZeros: t2 = true } = e2, { exclude: a2 = [] } = e2;
    typeof a2 == "string" && (a2 = [...a2]);
    let n2 = ze2.filter((s2) => !a2.includes(s2));
    if (n2.length === 0 || n2.length === 1 && !t2 && n2[0] === "0")
      throw new m2("Unable to generate numeric string, because all possible digits are excluded.");
    let o2 = "";
    return !t2 && !a2.includes("0") && (o2 += this.faker.helpers.arrayElement(n2.filter((s2) => s2 !== "0"))), o2 += this.fromCharacters(n2, r2 - o2.length), o2;
  }
  sample(e2 = 10) {
    e2 = this.faker.helpers.rangeToNumber(e2);
    let r2 = { min: 33, max: 125 }, t2 = "";
    for (;t2.length < e2; )
      t2 += String.fromCodePoint(this.faker.number.int(r2));
    return t2;
  }
  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll("x", () => this.faker.number.hex({ min: 0, max: 15 })).replaceAll("y", () => this.faker.number.hex({ min: 8, max: 11 }));
  }
  ulid(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = w2(r2);
    return Ve2(t2) + this.fromCharacters(Se2, 16);
  }
  nanoid(e2 = 21) {
    if (e2 = this.faker.helpers.rangeToNumber(e2), e2 <= 0)
      return "";
    let r2 = [{ value: () => this.alphanumeric(1), weight: 62 }, { value: () => this.faker.helpers.arrayElement(["_", "-"]), weight: 2 }], t2 = "";
    for (;t2.length < e2; ) {
      let a2 = this.faker.helpers.weightedArrayElement(r2);
      t2 += a2();
    }
    return t2;
  }
  symbol(e2 = 1) {
    return this.fromCharacters(["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"], e2);
  }
};
var I2 = class {
  _defaultRefDate = () => new Date;
  get defaultRefDate() {
    return this._defaultRefDate;
  }
  setDefaultRefDate(e2 = () => new Date) {
    typeof e2 == "function" ? this._defaultRefDate = e2 : this._defaultRefDate = () => new Date(e2);
  }
  _randomizer;
  datatype = new K2(this);
  date = new B2(this);
  helpers = new v2(this);
  number = new W2(this);
  string = new J2(this);
  constructor(e2 = {}) {
    let { randomizer: r2, seed: t2 } = e2;
    r2 != null && t2 != null && r2.seed(t2), this._randomizer = r2 ?? Oe2(t2);
  }
  seed(e2 = P2()) {
    return this._randomizer.seed(e2), e2;
  }
};
var fa2 = new I2;
function We2(i2) {
  let e2 = {};
  for (let r2 of i2)
    for (let t2 in r2) {
      let a2 = r2[t2];
      e2[t2] === undefined ? e2[t2] = { ...a2 } : e2[t2] = { ...a2, ...e2[t2] };
    }
  return e2;
}
var X2 = class extends p2 {
  dog() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.dog);
  }
  cat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cat);
  }
  snake() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.snake);
  }
  bear() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bear);
  }
  lion() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.lion);
  }
  cetacean() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cetacean);
  }
  horse() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.horse);
  }
  bird() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bird);
  }
  cow() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cow);
  }
  fish() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.fish);
  }
  crocodilia() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.crocodilia);
  }
  insect() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.insect);
  }
  rabbit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rabbit);
  }
  rodent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rodent);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.type);
  }
  petName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.pet_name);
  }
};
var Q2 = class extends p2 {
  author() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.author);
  }
  format() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.format);
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.genre);
  }
  publisher() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.publisher);
  }
  series() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.series);
  }
  title() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.title);
  }
};
var Hr = { 0: [[1999999, 2], [2279999, 3], [2289999, 4], [3689999, 3], [3699999, 4], [6389999, 3], [6397999, 4], [6399999, 7], [6449999, 3], [6459999, 7], [6479999, 3], [6489999, 7], [6549999, 3], [6559999, 4], [6999999, 3], [8499999, 4], [8999999, 5], [9499999, 6], [9999999, 7]], 1: [[99999, 3], [299999, 2], [349999, 3], [399999, 4], [499999, 3], [699999, 2], [999999, 4], [3979999, 3], [5499999, 4], [6499999, 5], [6799999, 4], [6859999, 5], [7139999, 4], [7169999, 3], [7319999, 4], [7399999, 7], [7749999, 5], [7753999, 7], [7763999, 5], [7764999, 7], [7769999, 5], [7782999, 7], [7899999, 5], [7999999, 4], [8004999, 5], [8049999, 5], [8379999, 5], [8384999, 7], [8671999, 5], [8675999, 4], [8697999, 5], [9159999, 6], [9165059, 7], [9168699, 6], [9169079, 7], [9195999, 6], [9196549, 7], [9729999, 6], [9877999, 4], [9911499, 6], [9911999, 7], [9989899, 6], [9999999, 7]] };
var q2 = class extends p2 {
  department() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.department);
  }
  productName() {
    return `${this.productAdjective()} ${this.productMaterial()} ${this.product()}`;
  }
  price(e2 = {}) {
    let { dec: r2 = 2, max: t2 = 1000, min: a2 = 1, symbol: n2 = "" } = e2;
    if (a2 < 0 || t2 < 0)
      return `${n2}0`;
    if (a2 === t2)
      return `${n2}${a2.toFixed(r2)}`;
    let o2 = this.faker.number.float({ min: a2, max: t2, fractionDigits: r2 });
    if (r2 === 0)
      return `${n2}${o2.toFixed(r2)}`;
    let s2 = o2 * 10 ** r2 % 10, l2 = this.faker.helpers.weightedArrayElement([{ weight: 5, value: 9 }, { weight: 3, value: 5 }, { weight: 1, value: 0 }, { weight: 1, value: this.faker.number.int({ min: 0, max: 9 }) }]), c2 = (1 / 10) ** r2, u2 = s2 * c2, h2 = l2 * c2, f2 = o2 - u2 + h2;
    return a2 <= f2 && f2 <= t2 ? `${n2}${f2.toFixed(r2)}` : `${n2}${o2.toFixed(r2)}`;
  }
  productAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.adjective);
  }
  productMaterial() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.material);
  }
  product() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.product);
  }
  productDescription() {
    return this.faker.helpers.fake(this.faker.definitions.commerce.product_description);
  }
  isbn(e2 = {}) {
    typeof e2 == "number" && (e2 = { variant: e2 });
    let { variant: r2 = 13, separator: t2 = "-" } = e2, a2 = "978", [n2, o2] = this.faker.helpers.objectEntry(Hr), s2 = this.faker.string.numeric(8), l2 = Number.parseInt(s2.slice(0, -1)), c2 = o2.find(([y2]) => l2 <= y2)?.[1];
    if (!c2)
      throw new m2(`Unable to find a registrant length for the group ${n2}`);
    let u2 = s2.slice(0, c2), h2 = s2.slice(c2), f2 = [a2, n2, u2, h2];
    r2 === 10 && f2.shift();
    let g2 = f2.join(""), b2 = 0;
    for (let y2 = 0;y2 < r2 - 1; y2++) {
      let N2 = r2 === 10 ? y2 + 1 : y2 % 2 ? 3 : 1;
      b2 += N2 * Number.parseInt(g2[y2]);
    }
    return b2 = r2 === 10 ? b2 % 11 : (10 - b2 % 10) % 10, f2.push(b2 === 10 ? "X" : b2.toString()), f2.join(t2);
  }
};
var ee2 = class extends p2 {
  name() {
    return this.faker.helpers.fake(this.faker.definitions.company.name_pattern);
  }
  catchPhrase() {
    return [this.catchPhraseAdjective(), this.catchPhraseDescriptor(), this.catchPhraseNoun()].join(" ");
  }
  buzzPhrase() {
    return [this.buzzVerb(), this.buzzAdjective(), this.buzzNoun()].join(" ");
  }
  catchPhraseAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective);
  }
  catchPhraseDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor);
  }
  catchPhraseNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.noun);
  }
  buzzAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_adjective);
  }
  buzzVerb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_verb);
  }
  buzzNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_noun);
  }
};
var re2 = class extends p2 {
  column() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.column);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.type);
  }
  collation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.collation);
  }
  engine() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.engine);
  }
  mongodbObjectId() {
    return this.faker.string.hexadecimal({ length: 24, casing: "lower", prefix: "" });
  }
};
var Vr = { alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], formats: [{ country: "AL", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "ALkk bbbs sssx cccc cccc cccc cccc" }, { country: "AD", total: 24, bban: [{ type: "n", count: 8 }, { type: "c", count: 12 }], format: "ADkk bbbb ssss cccc cccc cccc" }, { country: "AT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "ATkk bbbb bccc cccc cccc" }, { country: "AZ", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "AZkk bbbb cccc cccc cccc cccc cccc" }, { country: "BH", total: 22, bban: [{ type: "a", count: 4 }, { type: "c", count: 14 }], format: "BHkk bbbb cccc cccc cccc cc" }, { country: "BE", total: 16, bban: [{ type: "n", count: 3 }, { type: "n", count: 9 }], format: "BEkk bbbc cccc ccxx" }, { country: "BA", total: 20, bban: [{ type: "n", count: 6 }, { type: "n", count: 10 }], format: "BAkk bbbs sscc cccc ccxx" }, { country: "BR", total: 29, bban: [{ type: "n", count: 13 }, { type: "n", count: 10 }, { type: "a", count: 1 }, { type: "c", count: 1 }], format: "BRkk bbbb bbbb ssss sccc cccc ccct n" }, { country: "BG", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "c", count: 8 }], format: "BGkk bbbb ssss ddcc cccc cc" }, { country: "CR", total: 22, bban: [{ type: "n", count: 1 }, { type: "n", count: 3 }, { type: "n", count: 14 }], format: "CRkk xbbb cccc cccc cccc cc" }, { country: "HR", total: 21, bban: [{ type: "n", count: 7 }, { type: "n", count: 10 }], format: "HRkk bbbb bbbc cccc cccc c" }, { country: "CY", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "CYkk bbbs ssss cccc cccc cccc cccc" }, { country: "CZ", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "CZkk bbbb ssss sscc cccc cccc" }, { country: "DK", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "DKkk bbbb cccc cccc cc" }, { country: "DO", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "DOkk bbbb cccc cccc cccc cccc cccc" }, { country: "TL", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "TLkk bbbc cccc cccc cccc cxx" }, { country: "EE", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "EEkk bbss cccc cccc cccx" }, { country: "FO", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "FOkk bbbb cccc cccc cx" }, { country: "FI", total: 18, bban: [{ type: "n", count: 6 }, { type: "n", count: 8 }], format: "FIkk bbbb bbcc cccc cx" }, { country: "FR", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "FRkk bbbb bggg ggcc cccc cccc cxx" }, { country: "GE", total: 22, bban: [{ type: "a", count: 2 }, { type: "n", count: 16 }], format: "GEkk bbcc cccc cccc cccc cc" }, { country: "DE", total: 22, bban: [{ type: "n", count: 8 }, { type: "n", count: 10 }], format: "DEkk bbbb bbbb cccc cccc cc" }, { country: "GI", total: 23, bban: [{ type: "a", count: 4 }, { type: "c", count: 15 }], format: "GIkk bbbb cccc cccc cccc ccc" }, { country: "GR", total: 27, bban: [{ type: "n", count: 7 }, { type: "c", count: 16 }], format: "GRkk bbbs sssc cccc cccc cccc ccc" }, { country: "GL", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "GLkk bbbb cccc cccc cc" }, { country: "GT", total: 28, bban: [{ type: "c", count: 4 }, { type: "c", count: 4 }, { type: "c", count: 16 }], format: "GTkk bbbb mmtt cccc cccc cccc cccc" }, { country: "HU", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "HUkk bbbs sssk cccc cccc cccc cccx" }, { country: "IS", total: 26, bban: [{ type: "n", count: 6 }, { type: "n", count: 16 }], format: "ISkk bbbb sscc cccc iiii iiii ii" }, { country: "IE", total: 22, bban: [{ type: "c", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "IEkk aaaa bbbb bbcc cccc cc" }, { country: "IL", total: 23, bban: [{ type: "n", count: 6 }, { type: "n", count: 13 }], format: "ILkk bbbn nncc cccc cccc ccc" }, { country: "IT", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "ITkk xaaa aabb bbbc cccc cccc ccc" }, { country: "JO", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 18 }], format: "JOkk bbbb nnnn cccc cccc cccc cccc cc" }, { country: "KZ", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "KZkk bbbc cccc cccc cccc" }, { country: "XK", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "XKkk bbbb cccc cccc cccc" }, { country: "KW", total: 30, bban: [{ type: "a", count: 4 }, { type: "c", count: 22 }], format: "KWkk bbbb cccc cccc cccc cccc cccc cc" }, { country: "LV", total: 21, bban: [{ type: "a", count: 4 }, { type: "c", count: 13 }], format: "LVkk bbbb cccc cccc cccc c" }, { country: "LB", total: 28, bban: [{ type: "n", count: 4 }, { type: "c", count: 20 }], format: "LBkk bbbb cccc cccc cccc cccc cccc" }, { country: "LI", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "LIkk bbbb bccc cccc cccc c" }, { country: "LT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "LTkk bbbb bccc cccc cccc" }, { country: "LU", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "LUkk bbbc cccc cccc cccc" }, { country: "MK", total: 19, bban: [{ type: "n", count: 3 }, { type: "c", count: 10 }, { type: "n", count: 2 }], format: "MKkk bbbc cccc cccc cxx" }, { country: "MT", total: 31, bban: [{ type: "a", count: 4 }, { type: "n", count: 5 }, { type: "c", count: 18 }], format: "MTkk bbbb ssss sccc cccc cccc cccc ccc" }, { country: "MR", total: 27, bban: [{ type: "n", count: 10 }, { type: "n", count: 13 }], format: "MRkk bbbb bsss sscc cccc cccc cxx" }, { country: "MU", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 15 }, { type: "a", count: 3 }], format: "MUkk bbbb bbss cccc cccc cccc 000d dd" }, { country: "MC", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "MCkk bbbb bsss sscc cccc cccc cxx" }, { country: "MD", total: 24, bban: [{ type: "c", count: 2 }, { type: "c", count: 18 }], format: "MDkk bbcc cccc cccc cccc cccc" }, { country: "ME", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "MEkk bbbc cccc cccc cccc xx" }, { country: "NL", total: 18, bban: [{ type: "a", count: 4 }, { type: "n", count: 10 }], format: "NLkk bbbb cccc cccc cc" }, { country: "NO", total: 15, bban: [{ type: "n", count: 4 }, { type: "n", count: 7 }], format: "NOkk bbbb cccc ccx" }, { country: "PK", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "PKkk bbbb cccc cccc cccc cccc" }, { country: "PS", total: 29, bban: [{ type: "c", count: 4 }, { type: "n", count: 9 }, { type: "n", count: 12 }], format: "PSkk bbbb xxxx xxxx xccc cccc cccc c" }, { country: "PL", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "PLkk bbbs sssx cccc cccc cccc cccc" }, { country: "PT", total: 25, bban: [{ type: "n", count: 8 }, { type: "n", count: 13 }], format: "PTkk bbbb ssss cccc cccc cccx x" }, { country: "QA", total: 29, bban: [{ type: "a", count: 4 }, { type: "c", count: 21 }], format: "QAkk bbbb cccc cccc cccc cccc cccc c" }, { country: "RO", total: 24, bban: [{ type: "a", count: 4 }, { type: "c", count: 16 }], format: "ROkk bbbb cccc cccc cccc cccc" }, { country: "SM", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "SMkk xaaa aabb bbbc cccc cccc ccc" }, { country: "SA", total: 24, bban: [{ type: "n", count: 2 }, { type: "c", count: 18 }], format: "SAkk bbcc cccc cccc cccc cccc" }, { country: "RS", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "RSkk bbbc cccc cccc cccc xx" }, { country: "SK", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "SKkk bbbb ssss sscc cccc cccc" }, { country: "SI", total: 19, bban: [{ type: "n", count: 5 }, { type: "n", count: 10 }], format: "SIkk bbss sccc cccc cxx" }, { country: "ES", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "ESkk bbbb gggg xxcc cccc cccc" }, { country: "SE", total: 24, bban: [{ type: "n", count: 3 }, { type: "n", count: 17 }], format: "SEkk bbbc cccc cccc cccc cccc" }, { country: "CH", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "CHkk bbbb bccc cccc cccc c" }, { country: "TN", total: 24, bban: [{ type: "n", count: 5 }, { type: "n", count: 15 }], format: "TNkk bbss sccc cccc cccc cccc" }, { country: "TR", total: 26, bban: [{ type: "n", count: 5 }, { type: "n", count: 1 }, { type: "n", count: 16 }], format: "TRkk bbbb bxcc cccc cccc cccc cc" }, { country: "AE", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "AEkk bbbc cccc cccc cccc ccc" }, { country: "GB", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "GBkk bbbb ssss sscc cccc cc" }, { country: "VG", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "VGkk bbbb cccc cccc cccc cccc" }], iso3166: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], mod97: (i2) => {
  let e2 = 0;
  for (let r2 of i2)
    e2 = (e2 * 10 + +r2) % 97;
  return e2;
}, pattern10: ["01", "02", "03", "04", "05", "06", "07", "08", "09"], pattern100: ["001", "002", "003", "004", "005", "006", "007", "008", "009"], toDigitString: (i2) => i2.replaceAll(/[A-Z]/gi, (e2) => String((e2.toUpperCase().codePointAt(0) ?? Number.NaN) - 55)) };
var M2 = Vr;
function zr(i2) {
  let e2 = "";
  for (let r2 = 0;r2 < i2.length; r2 += 4)
    e2 += `${i2.substring(r2, r2 + 4)} `;
  return e2.trimEnd();
}
var te2 = class extends p2 {
  accountNumber(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let { length: r2 = 8 } = e2;
    return this.faker.string.numeric({ length: r2, allowLeadingZeros: true });
  }
  accountName() {
    return [this.faker.helpers.arrayElement(this.faker.definitions.finance.account_type), "Account"].join(" ");
  }
  routingNumber() {
    let e2 = this.faker.string.numeric({ length: 8, allowLeadingZeros: true }), r2 = 0;
    for (let t2 = 0;t2 < e2.length; t2 += 3)
      r2 += Number(e2[t2]) * 3, r2 += Number(e2[t2 + 1]) * 7, r2 += Number(e2[t2 + 2]) || 0;
    return `${e2}${Math.ceil(r2 / 10) * 10 - r2}`;
  }
  maskedNumber(e2 = {}) {
    S2({ deprecated: "faker.finance.maskedNumber()", proposed: "faker.finance.iban().replace(/(?<=.{4})\\w(?=.{2})/g, '*') or a similar approach", since: "9.3.0", until: "10.0.0" }), typeof e2 == "number" && (e2 = { length: e2 });
    let { ellipsis: r2 = true, length: t2 = 4, parens: a2 = true } = e2, n2 = this.faker.string.numeric({ length: t2 });
    return r2 && (n2 = `...${n2}`), a2 && (n2 = `(${n2})`), n2;
  }
  amount(e2 = {}) {
    let { autoFormat: r2 = false, dec: t2 = 2, max: a2 = 1000, min: n2 = 0, symbol: o2 = "" } = e2, s2 = this.faker.number.float({ max: a2, min: n2, fractionDigits: t2 }), l2 = r2 ? s2.toLocaleString(undefined, { minimumFractionDigits: t2 }) : s2.toFixed(t2);
    return o2 + l2;
  }
  transactionType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.transaction_type);
  }
  currency() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.currency);
  }
  currencyCode() {
    return this.currency().code;
  }
  currencyName() {
    return this.currency().name;
  }
  currencySymbol() {
    let e2;
    do
      e2 = this.currency().symbol;
    while (e2.length === 0);
    return e2;
  }
  bitcoinAddress(e2 = {}) {
    let { type: r2 = this.faker.helpers.enumValue(be2), network: t2 = "mainnet" } = e2, a2 = Be2[r2], n2 = a2.prefix[t2], o2 = this.faker.number.int(a2.length), s2 = this.faker.string.alphanumeric({ length: o2 - n2.length, casing: a2.casing, exclude: a2.exclude });
    return n2 + s2;
  }
  litecoinAddress() {
    let e2 = this.faker.number.int({ min: 26, max: 33 });
    return this.faker.string.fromCharacters("LM3") + this.faker.string.fromCharacters("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", e2 - 1);
  }
  creditCardNumber(e2 = {}) {
    typeof e2 == "string" && (e2 = { issuer: e2 });
    let { issuer: r2 = "" } = e2, t2, a2 = this.faker.definitions.finance.credit_card, n2 = r2.toLowerCase();
    if (n2 in a2)
      t2 = this.faker.helpers.arrayElement(a2[n2]);
    else if (r2.includes("#"))
      t2 = r2;
    else {
      let o2 = this.faker.helpers.objectValue(a2);
      t2 = this.faker.helpers.arrayElement(o2);
    }
    return t2 = t2.replaceAll("/", ""), this.faker.helpers.replaceCreditCardSymbols(t2);
  }
  creditCardCVV() {
    return this.faker.string.numeric({ length: 3, allowLeadingZeros: true });
  }
  creditCardIssuer() {
    return this.faker.helpers.objectKey(this.faker.definitions.finance.credit_card);
  }
  pin(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let { length: r2 = 4 } = e2;
    if (r2 < 1)
      throw new m2("minimum length is 1");
    return this.faker.string.numeric({ length: r2, allowLeadingZeros: true });
  }
  ethereumAddress() {
    return this.faker.string.hexadecimal({ length: 40, casing: "lower" });
  }
  iban(e2 = {}) {
    let { countryCode: r2, formatted: t2 = false } = e2, a2 = r2 ? M2.formats.find((c2) => c2.country === r2) : this.faker.helpers.arrayElement(M2.formats);
    if (!a2)
      throw new m2(`Country code ${r2} not supported.`);
    let n2 = "", o2 = 0;
    for (let c2 of a2.bban) {
      let u2 = c2.count;
      for (o2 += c2.count;u2 > 0; )
        c2.type === "a" ? n2 += this.faker.helpers.arrayElement(M2.alpha) : c2.type === "c" ? this.faker.datatype.boolean(0.8) ? n2 += this.faker.number.int(9) : n2 += this.faker.helpers.arrayElement(M2.alpha) : u2 >= 3 && this.faker.datatype.boolean(0.3) ? this.faker.datatype.boolean() ? (n2 += this.faker.helpers.arrayElement(M2.pattern100), u2 -= 2) : (n2 += this.faker.helpers.arrayElement(M2.pattern10), u2--) : n2 += this.faker.number.int(9), u2--;
      n2 = n2.substring(0, o2);
    }
    let s2 = 98 - M2.mod97(M2.toDigitString(`${n2}${a2.country}00`));
    s2 < 10 && (s2 = `0${s2}`);
    let l2 = `${a2.country}${s2}${n2}`;
    return t2 ? zr(l2) : l2;
  }
  bic(e2 = {}) {
    let { includeBranchCode: r2 = this.faker.datatype.boolean() } = e2, t2 = this.faker.string.alpha({ length: 4, casing: "upper" }), a2 = this.faker.helpers.arrayElement(M2.iso3166), n2 = this.faker.string.alphanumeric({ length: 2, casing: "upper" }), o2 = r2 ? this.faker.datatype.boolean() ? this.faker.string.alphanumeric({ length: 3, casing: "upper" }) : "XXX" : "";
    return `${t2}${a2}${n2}${o2}`;
  }
  transactionDescription() {
    return this.faker.helpers.fake(this.faker.definitions.finance.transaction_description_pattern);
  }
};
function Ye2(i2) {
  return i2.split(" ").map((e2) => e2.charAt(0).toUpperCase() + e2.slice(1)).join(" ");
}
var ae2 = class extends p2 {
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.adjective);
  }
  description() {
    return this.faker.helpers.fake(this.faker.definitions.food.description_pattern);
  }
  dish() {
    return this.faker.datatype.boolean() ? Ye2(this.faker.helpers.fake(this.faker.definitions.food.dish_pattern)) : Ye2(this.faker.helpers.arrayElement(this.faker.definitions.food.dish));
  }
  ethnicCategory() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.ethnic_category);
  }
  fruit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.fruit);
  }
  ingredient() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.ingredient);
  }
  meat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.meat);
  }
  spice() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.spice);
  }
  vegetable() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.vegetable);
  }
};
var Wr = "\xA0";
var ne2 = class extends p2 {
  branch() {
    let e2 = this.faker.hacker.noun().replace(" ", "-"), r2 = this.faker.hacker.verb().replace(" ", "-");
    return `${e2}-${r2}`;
  }
  commitEntry(e2 = {}) {
    let { merge: r2 = this.faker.datatype.boolean({ probability: 0.2 }), eol: t2 = "CRLF", refDate: a2 } = e2, n2 = [`commit ${this.faker.git.commitSha()}`];
    r2 && n2.push(`Merge: ${this.commitSha({ length: 7 })} ${this.commitSha({ length: 7 })}`);
    let o2 = this.faker.person.firstName(), s2 = this.faker.person.lastName(), l2 = this.faker.person.fullName({ firstName: o2, lastName: s2 }), c2 = this.faker.internet.username({ firstName: o2, lastName: s2 }), u2 = this.faker.helpers.arrayElement([l2, c2]), h2 = this.faker.internet.email({ firstName: o2, lastName: s2 });
    u2 = u2.replaceAll(/^[.,:;"\\']|[<>\n]|[.,:;"\\']$/g, ""), n2.push(`Author: ${u2} <${h2}>`, `Date: ${this.commitDate({ refDate: a2 })}`, "", `${Wr.repeat(4)}${this.commitMessage()}`, "");
    let f2 = t2 === "CRLF" ? `\r
` : `
`;
    return n2.join(f2);
  }
  commitMessage() {
    return `${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`;
  }
  commitDate(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], a2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], n2 = this.faker.date.recent({ days: 1, refDate: r2 }), o2 = t2[n2.getUTCDay()], s2 = a2[n2.getUTCMonth()], l2 = n2.getUTCDate(), c2 = n2.getUTCHours().toString().padStart(2, "0"), u2 = n2.getUTCMinutes().toString().padStart(2, "0"), h2 = n2.getUTCSeconds().toString().padStart(2, "0"), f2 = n2.getUTCFullYear(), g2 = this.faker.number.int({ min: -11, max: 12 }), b2 = Math.abs(g2).toString().padStart(2, "0"), y2 = "00", N2 = g2 >= 0 ? "+" : "-";
    return `${o2} ${s2} ${l2} ${c2}:${u2}:${h2} ${f2} ${N2}${b2}${y2}`;
  }
  commitSha(e2 = {}) {
    let { length: r2 = 40 } = e2;
    return this.faker.string.hexadecimal({ length: r2, casing: "lower", prefix: "" });
  }
};
var ie2 = class extends p2 {
  abbreviation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation);
  }
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective);
  }
  noun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun);
  }
  verb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb);
  }
  ingverb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb);
  }
  phrase() {
    let e2 = { abbreviation: this.abbreviation, adjective: this.adjective, ingverb: this.ingverb, noun: this.noun, verb: this.verb }, r2 = this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);
    return this.faker.helpers.mustache(r2, e2);
  }
};
var oe2 = class extends p2 {
  avatar() {
    return this.faker.helpers.arrayElement([this.personPortrait, this.avatarGitHub])();
  }
  avatarGitHub() {
    return `https://avatars.githubusercontent.com/u/${this.faker.number.int(1e8)}`;
  }
  personPortrait(e2 = {}) {
    let { sex: r2 = this.faker.person.sexType(), size: t2 = 512 } = e2;
    return `https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/${r2}/${t2}/${this.faker.number.int({ min: 0, max: 99 })}.jpg`;
  }
  avatarLegacy() {
    return S2({ deprecated: "faker.image.avatarLegacy()", proposed: "faker.image.avatar() or faker.image.personPortrait()", since: "9.0.2", until: "10.0.0" }), `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.number.int(1249)}.jpg`;
  }
  url(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }) } = e2;
    return this.faker.helpers.arrayElement([this.urlLoremFlickr, ({ width: n2, height: o2 }) => this.urlPicsumPhotos({ width: n2, height: o2, grayscale: false, blur: 0 })])({ width: r2, height: t2 });
  }
  urlLoremFlickr(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }), category: a2 } = e2;
    return `https://loremflickr.com/${r2}/${t2}${a2 == null ? "" : `/${a2}`}?lock=${this.faker.number.int()}`;
  }
  urlPicsumPhotos(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }), grayscale: a2 = this.faker.datatype.boolean(), blur: n2 = this.faker.number.int({ max: 10 }) } = e2, o2 = `https://picsum.photos/seed/${this.faker.string.alphanumeric({ length: { min: 5, max: 10 } })}/${r2}/${t2}`, s2 = typeof n2 == "number" && n2 >= 1 && n2 <= 10;
    return (a2 || s2) && (o2 += "?", a2 && (o2 += "grayscale"), a2 && s2 && (o2 += "&"), s2 && (o2 += `blur=${n2}`)), o2;
  }
  urlPlaceholder(e2 = {}) {
    S2({ deprecated: "faker.image.urlPlaceholder()", proposed: "faker.image.url() or faker.image.dataUri()", since: "9.4.0", until: "10.0.0" });
    let { width: r2 = this.faker.number.int({ min: 1, max: 3500 }), height: t2 = this.faker.number.int({ min: 1, max: 3500 }), backgroundColor: a2 = this.faker.color.rgb({ format: "hex", prefix: "" }), textColor: n2 = this.faker.color.rgb({ format: "hex", prefix: "" }), format: o2 = this.faker.helpers.arrayElement(["gif", "jpeg", "jpg", "png", "webp"]), text: s2 = this.faker.lorem.words() } = e2, l2 = "https://via.placeholder.com";
    return l2 += `/${r2}`, l2 += `x${t2}`, l2 += `/${a2}`, l2 += `/${n2}`, l2 += `.${o2}`, l2 += `?text=${encodeURIComponent(s2)}`, l2;
  }
  dataUri(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }), color: a2 = this.faker.color.rgb(), type: n2 = this.faker.helpers.arrayElement(["svg-uri", "svg-base64"]) } = e2, o2 = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${r2}" height="${t2}"><rect width="100%" height="100%" fill="${a2}"/><text x="${r2 / 2}" y="${t2 / 2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${r2}x${t2}</text></svg>`;
    return n2 === "svg-uri" ? `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(o2)}` : `data:image/svg+xml;base64,${de2(o2)}`;
  }
};
var se2 = class extends p2 {
  zipCode(e2 = {}) {
    typeof e2 == "string" && (e2 = { format: e2 });
    let { state: r2 } = e2;
    if (r2 != null) {
      let a2 = this.faker.definitions.location.postcode_by_state[r2];
      if (a2 == null)
        throw new m2(`No zip code definition found for state "${r2}"`);
      return this.faker.helpers.fake(a2);
    }
    let { format: t2 = this.faker.definitions.location.postcode } = e2;
    return typeof t2 == "string" && (t2 = [t2]), t2 = this.faker.helpers.arrayElement(t2), this.faker.helpers.replaceSymbols(t2);
  }
  city() {
    return this.faker.helpers.fake(this.faker.definitions.location.city_pattern);
  }
  buildingNumber() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.building_number).replaceAll(/#+/g, (e2) => this.faker.string.numeric({ length: e2.length, allowLeadingZeros: false }));
  }
  street() {
    return this.faker.helpers.fake(this.faker.definitions.location.street_pattern);
  }
  streetAddress(e2 = {}) {
    typeof e2 == "boolean" && (e2 = { useFullAddress: e2 });
    let { useFullAddress: r2 } = e2, a2 = this.faker.definitions.location.street_address[r2 ? "full" : "normal"];
    return this.faker.helpers.fake(a2);
  }
  secondaryAddress() {
    return this.faker.helpers.fake(this.faker.definitions.location.secondary_address).replaceAll(/#+/g, (e2) => this.faker.string.numeric({ length: e2.length, allowLeadingZeros: false }));
  }
  county() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.county);
  }
  country() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.country);
  }
  continent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.continent);
  }
  countryCode(e2 = {}) {
    typeof e2 == "string" && (e2 = { variant: e2 });
    let { variant: r2 = "alpha-2" } = e2, t2 = (() => {
      switch (r2) {
        case "numeric":
          return "numeric";
        case "alpha-3":
          return "alpha3";
        case "alpha-2":
          return "alpha2";
      }
    })();
    return this.faker.helpers.arrayElement(this.faker.definitions.location.country_code)[t2];
  }
  state(e2 = {}) {
    let { abbreviated: r2 = false } = e2, t2 = r2 ? this.faker.definitions.location.state_abbr : this.faker.definitions.location.state;
    return this.faker.helpers.arrayElement(t2);
  }
  latitude(e2 = {}) {
    let { max: r2 = 90, min: t2 = -90, precision: a2 = 4 } = e2;
    return this.faker.number.float({ min: t2, max: r2, fractionDigits: a2 });
  }
  longitude(e2 = {}) {
    let { max: r2 = 180, min: t2 = -180, precision: a2 = 4 } = e2;
    return this.faker.number.float({ max: r2, min: t2, fractionDigits: a2 });
  }
  direction(e2 = {}) {
    let { abbreviated: r2 = false } = e2;
    return r2 ? this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal_abbr, ...this.faker.definitions.location.direction.ordinal_abbr]) : this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal, ...this.faker.definitions.location.direction.ordinal]);
  }
  cardinalDirection(e2 = {}) {
    let { abbreviated: r2 = false } = e2;
    return r2 ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal);
  }
  ordinalDirection(e2 = {}) {
    let { abbreviated: r2 = false } = e2;
    return r2 ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal);
  }
  nearbyGPSCoordinate(e2 = {}) {
    let { origin: r2, radius: t2 = 10, isMetric: a2 = false } = e2;
    if (r2 == null)
      return [this.latitude(), this.longitude()];
    let n2 = this.faker.number.float({ max: 2 * Math.PI, fractionDigits: 5 }), o2 = a2 ? t2 : t2 * 1.60934, l2 = this.faker.number.float({ max: o2, fractionDigits: 3 }) * 0.995, c2 = 40000 / 360, u2 = l2 / c2, h2 = [r2[0] + Math.sin(n2) * u2, r2[1] + Math.cos(n2) * u2];
    return h2[0] = h2[0] % 180, (h2[0] < -90 || h2[0] > 90) && (h2[0] = Math.sign(h2[0]) * 180 - h2[0], h2[1] += 180), h2[1] = (h2[1] % 360 + 540) % 360 - 180, [h2[0], h2[1]];
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.time_zone);
  }
  language() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.language);
  }
};
function Ze2(i2, e2, r2 = (t2) => t2) {
  let t2 = {};
  for (let a2 of i2) {
    let n2 = e2(a2);
    t2[n2] === undefined && (t2[n2] = []), t2[n2].push(r2(a2));
  }
  return t2;
}
var Me2 = { fail: () => {
  throw new m2("No words found that match the given length.");
}, closest: (i2, e2) => {
  let r2 = Ze2(i2, (s2) => s2.length), t2 = Object.keys(r2).map(Number), a2 = Math.min(...t2), n2 = Math.max(...t2), o2 = Math.min(e2.min - a2, n2 - e2.max);
  return i2.filter((s2) => s2.length === e2.min - o2 || s2.length === e2.max + o2);
}, shortest: (i2) => {
  let e2 = Math.min(...i2.map((r2) => r2.length));
  return i2.filter((r2) => r2.length === e2);
}, longest: (i2) => {
  let e2 = Math.max(...i2.map((r2) => r2.length));
  return i2.filter((r2) => r2.length === e2);
}, "any-length": (i2) => [...i2] };
function T2(i2) {
  let { wordList: e2, length: r2, strategy: t2 = "any-length" } = i2;
  if (r2 != null) {
    let a2 = typeof r2 == "number" ? (o2) => o2.length === r2 : (o2) => o2.length >= r2.min && o2.length <= r2.max, n2 = e2.filter(a2);
    return n2.length > 0 ? n2 : typeof r2 == "number" ? Me2[t2](e2, { min: r2, max: r2 }) : Me2[t2](e2, r2);
  } else if (t2 === "shortest" || t2 === "longest")
    return Me2[t2](e2);
  return [...e2];
}
var ce2 = class extends p2 {
  word(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.lorem.word }));
  }
  words(e2 = 3) {
    return this.faker.helpers.multiple(() => this.word(), { count: e2 }).join(" ");
  }
  sentence(e2 = { min: 3, max: 10 }) {
    let r2 = this.words(e2);
    return `${r2.charAt(0).toUpperCase() + r2.substring(1)}.`;
  }
  slug(e2 = 3) {
    let r2 = this.words(e2);
    return this.faker.helpers.slugify(r2);
  }
  sentences(e2 = { min: 2, max: 6 }, r2 = " ") {
    return this.faker.helpers.multiple(() => this.sentence(), { count: e2 }).join(r2);
  }
  paragraph(e2 = 3) {
    return this.sentences(e2);
  }
  paragraphs(e2 = 3, r2 = `
`) {
    return this.faker.helpers.multiple(() => this.paragraph(), { count: e2 }).join(r2);
  }
  text() {
    let e2 = ["sentence", "sentences", "paragraph", "paragraphs", "lines"], r2 = this.faker.helpers.arrayElement(e2);
    return this[r2]();
  }
  lines(e2 = { min: 1, max: 5 }) {
    return this.sentences(e2, `
`);
  }
};
var le2 = class extends p2 {
  album() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.album);
  }
  artist() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.artist);
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.genre);
  }
  songName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name);
  }
};
var me2 = class extends p2 {
  number(e2 = {}) {
    let { style: r2 = "human" } = e2, a2 = this.faker.definitions.phone_number.format[r2];
    if (!a2)
      throw new Error(`No definitions for ${r2} in this locale`);
    let n2 = this.faker.helpers.arrayElement(a2);
    return we2(this.faker, n2);
  }
  imei() {
    return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L", "#");
  }
};
var ue2 = class extends p2 {
  chemicalElement() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.chemical_element);
  }
  unit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.unit);
  }
};
var Yr = ["video", "audio", "image", "text", "application"];
var Zr = ["application/pdf", "audio/mpeg", "audio/wav", "image/png", "image/jpeg", "image/gif", "video/mp4", "video/mpeg", "text/html"];
var Jr = ["en", "wl", "ww"];
var Je2 = { index: "o", slot: "s", mac: "x", pci: "p" };
var Xr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var pe2 = class extends p2 {
  fileName(e2 = {}) {
    let { extensionCount: r2 = 1 } = e2, t2 = this.faker.word.words().toLowerCase().replaceAll(/\W/g, "_"), a2 = this.faker.helpers.multiple(() => this.fileExt(), { count: r2 }).join(".");
    return a2.length === 0 ? t2 : `${t2}.${a2}`;
  }
  commonFileName(e2) {
    return `${this.fileName({ extensionCount: 0 })}.${e2 || this.commonFileExt()}`;
  }
  mimeType() {
    let e2 = Object.keys(this.faker.definitions.system.mime_type);
    return this.faker.helpers.arrayElement(e2);
  }
  commonFileType() {
    return this.faker.helpers.arrayElement(Yr);
  }
  commonFileExt() {
    return this.fileExt(this.faker.helpers.arrayElement(Zr));
  }
  fileType() {
    let e2 = this.faker.definitions.system.mime_type, r2 = new Set(Object.keys(e2).map((t2) => t2.split("/")[0]));
    return this.faker.helpers.arrayElement([...r2]);
  }
  fileExt(e2) {
    let r2 = this.faker.definitions.system.mime_type;
    if (typeof e2 == "string")
      return this.faker.helpers.arrayElement(r2[e2].extensions);
    let t2 = new Set(Object.values(r2).flatMap(({ extensions: a2 }) => a2));
    return this.faker.helpers.arrayElement([...t2]);
  }
  directoryPath() {
    let e2 = this.faker.definitions.system.directory_path;
    return this.faker.helpers.arrayElement(e2);
  }
  filePath() {
    return `${this.directoryPath()}/${this.fileName()}`;
  }
  semver() {
    return [this.faker.number.int(9), this.faker.number.int(20), this.faker.number.int(20)].join(".");
  }
  networkInterface(e2 = {}) {
    let { interfaceType: r2 = this.faker.helpers.arrayElement(Jr), interfaceSchema: t2 = this.faker.helpers.objectKey(Je2) } = e2, a2, n2 = "";
    switch (t2) {
      case "index": {
        a2 = this.faker.string.numeric();
        break;
      }
      case "slot": {
        a2 = `${this.faker.string.numeric()}${this.faker.helpers.maybe(() => `f${this.faker.string.numeric()}`) ?? ""}${this.faker.helpers.maybe(() => `d${this.faker.string.numeric()}`) ?? ""}`;
        break;
      }
      case "mac": {
        a2 = this.faker.internet.mac("");
        break;
      }
      case "pci": {
        n2 = this.faker.helpers.maybe(() => `P${this.faker.string.numeric()}`) ?? "", a2 = `${this.faker.string.numeric()}s${this.faker.string.numeric()}${this.faker.helpers.maybe(() => `f${this.faker.string.numeric()}`) ?? ""}${this.faker.helpers.maybe(() => `d${this.faker.string.numeric()}`) ?? ""}`;
        break;
      }
    }
    return `${n2}${r2}${Je2[t2]}${a2}`;
  }
  cron(e2 = {}) {
    let { includeYear: r2 = false, includeNonStandard: t2 = false } = e2, a2 = [this.faker.number.int(59), "*"], n2 = [this.faker.number.int(23), "*"], o2 = [this.faker.number.int({ min: 1, max: 31 }), "*", "?"], s2 = [this.faker.number.int({ min: 1, max: 12 }), "*"], l2 = [this.faker.number.int(6), this.faker.helpers.arrayElement(Xr), "*", "?"], c2 = [this.faker.number.int({ min: 1970, max: 2099 }), "*"], u2 = this.faker.helpers.arrayElement(a2), h2 = this.faker.helpers.arrayElement(n2), f2 = this.faker.helpers.arrayElement(o2), g2 = this.faker.helpers.arrayElement(s2), b2 = this.faker.helpers.arrayElement(l2), y2 = this.faker.helpers.arrayElement(c2), N2 = `${u2} ${h2} ${f2} ${g2} ${b2}`;
    r2 && (N2 += ` ${y2}`);
    let k2 = ["@annually", "@daily", "@hourly", "@monthly", "@reboot", "@weekly", "@yearly"];
    return !t2 || this.faker.datatype.boolean() ? N2 : this.faker.helpers.arrayElement(k2);
  }
};
var he2 = class extends p2 {
  vehicle() {
    return `${this.manufacturer()} ${this.model()}`;
  }
  manufacturer() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.manufacturer);
  }
  model() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.model);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.type);
  }
  fuel() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.fuel);
  }
  vin() {
    let e2 = ["o", "i", "q", "O", "I", "Q"];
    return `${this.faker.string.alphanumeric({ length: 10, casing: "upper", exclude: e2 })}${this.faker.string.alpha({ length: 1, casing: "upper", exclude: e2 })}${this.faker.string.alphanumeric({ length: 1, casing: "upper", exclude: e2 })}${this.faker.string.numeric({ length: 5, allowLeadingZeros: true })}`;
  }
  color() {
    return this.faker.color.human();
  }
  vrm() {
    return `${this.faker.string.alpha({ length: 2, casing: "upper" })}${this.faker.string.numeric({ length: 2, allowLeadingZeros: true })}${this.faker.string.alpha({ length: 3, casing: "upper" })}`;
  }
  bicycle() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.bicycle_type);
  }
};
var fe2 = class extends p2 {
  adjective(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.adjective }));
  }
  adverb(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.adverb }));
  }
  conjunction(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.conjunction }));
  }
  interjection(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.interjection }));
  }
  noun(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.noun }));
  }
  preposition(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.preposition }));
  }
  verb(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T2({ ...e2, wordList: this.faker.definitions.word.verb }));
  }
  sample(e2 = {}) {
    let r2 = this.faker.helpers.shuffle([this.adjective, this.adverb, this.conjunction, this.interjection, this.noun, this.preposition, this.verb]);
    for (let t2 of r2)
      try {
        return t2(e2);
      } catch {
        continue;
      }
    throw new m2("No matching word data available for the current locale");
  }
  words(e2 = {}) {
    typeof e2 == "number" && (e2 = { count: e2 });
    let { count: r2 = { min: 1, max: 3 } } = e2;
    return this.faker.helpers.multiple(() => this.sample(), { count: r2 }).join(" ");
  }
};
var Xe2 = class extends I2 {
  rawDefinitions;
  definitions;
  airline = new F2(this);
  animal = new X2(this);
  book = new Q2(this);
  color = new G2(this);
  commerce = new q2(this);
  company = new ee2(this);
  database = new re2(this);
  date = new V2(this);
  finance = new te2(this);
  food = new ae2(this);
  git = new ne2(this);
  hacker = new ie2(this);
  helpers = new z2(this);
  image = new oe2(this);
  internet = new O2(this);
  location = new se2(this);
  lorem = new ce2(this);
  music = new le2(this);
  person = new U2(this);
  phone = new me2(this);
  science = new ue2(this);
  system = new pe2(this);
  vehicle = new he2(this);
  word = new fe2(this);
  get address() {
    return S2({ deprecated: "faker.address", proposed: "faker.location", since: "8.0", until: "10.0" }), this.location;
  }
  get name() {
    return S2({ deprecated: "faker.name", proposed: "faker.person", since: "8.0", until: "10.0" }), this.person;
  }
  constructor(e2) {
    super({ randomizer: e2.randomizer, seed: e2.seed });
    let { locale: r2 } = e2;
    if (Array.isArray(r2)) {
      if (r2.length === 0)
        throw new m2("The locale option must contain at least one locale definition.");
      r2 = We2(r2);
    }
    this.rawDefinitions = r2, this.definitions = Ue2(this.rawDefinitions);
  }
  getMetadata() {
    return this.rawDefinitions.metadata ?? {};
  }
};
var Qe2 = ["Academy Color Encoding System (ACES)", "Adobe RGB", "Adobe Wide Gamut RGB", "British Standard Colour (BS)", "CIE 1931 XYZ", "CIELAB", "CIELUV", "CIEUVW", "CMY", "CMYK", "DCI-P3", "Display-P3", "Federal Standard 595C", "HKS", "HSL", "HSLA", "HSLuv", "HSV", "HWB", "LCh", "LMS", "Munsell Color System", "Natural Color System (NSC)", "Pantone Matching System (PMS)", "ProPhoto RGB Color Space", "RAL", "RG", "RGBA", "RGK", "Rec. 2020", "Rec. 2100", "Rec. 601", "Rec. 709", "Uniform Color Spaces (UCSs)", "YDbDr", "YIQ", "YPbPr", "sRGB", "sYCC", "scRGB", "xvYCC"];
var Qr = { space: Qe2 };
var qe2 = Qr;
var er2 = ["ascii_bin", "ascii_general_ci", "cp1250_bin", "cp1250_general_ci", "utf8_bin", "utf8_general_ci", "utf8_unicode_ci"];
var rr2 = ["ARCHIVE", "BLACKHOLE", "CSV", "InnoDB", "MEMORY", "MyISAM"];
var tr2 = ["bigint", "binary", "bit", "blob", "boolean", "date", "datetime", "decimal", "double", "enum", "float", "geometry", "int", "mediumint", "point", "real", "serial", "set", "smallint", "text", "time", "timestamp", "tinyint", "varchar"];
var qr = { collation: er2, engine: rr2, type: tr2 };
var ar2 = qr;
var $2 = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kirov", "Europe/Kyiv", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"];
var et = { time_zone: $2 };
var nr2 = et;
var ir2 = ["ADP", "AGP", "AI", "API", "ASCII", "CLI", "COM", "CSS", "DNS", "DRAM", "EXE", "FTP", "GB", "HDD", "HEX", "HTTP", "IB", "IP", "JBOD", "JSON", "OCR", "PCI", "PNG", "RAM", "RSS", "SAS", "SCSI", "SDD", "SMS", "SMTP", "SQL", "SSD", "SSL", "TCP", "THX", "TLS", "UDP", "USB", "UTF8", "VGA", "XML", "XSS"];
var rt = { abbreviation: ir2 };
var or2 = rt;
var sr2 = { smiley: ["\uD83D\uDE00", "\uD83D\uDE03", "\uD83D\uDE04", "\uD83D\uDE01", "\uD83D\uDE06", "\uD83D\uDE05", "\uD83E\uDD23", "\uD83D\uDE02", "\uD83D\uDE42", "\uD83D\uDE43", "\uD83D\uDE09", "\uD83D\uDE0A", "\uD83D\uDE07", "\uD83E\uDD70", "\uD83D\uDE0D", "\uD83E\uDD29", "\uD83D\uDE18", "\uD83D\uDE17", "\u263A\uFE0F", "\uD83D\uDE1A", "\uD83D\uDE19", "\uD83E\uDD72", "\uD83D\uDE0B", "\uD83D\uDE1B", "\uD83D\uDE1C", "\uD83E\uDD2A", "\uD83D\uDE1D", "\uD83E\uDD11", "\uD83E\uDD17", "\uD83E\uDD2D", "\uD83E\uDD2B", "\uD83E\uDD14", "\uD83E\uDD10", "\uD83E\uDD28", "\uD83D\uDE10", "\uD83D\uDE11", "\uD83D\uDE36", "\uD83D\uDE36\u200D\uD83C\uDF2B\uFE0F", "\uD83D\uDE0F", "\uD83D\uDE12", "\uD83D\uDE44", "\uD83D\uDE2C", "\uD83D\uDE2E\u200D\uD83D\uDCA8", "\uD83E\uDD25", "\uD83D\uDE0C", "\uD83D\uDE14", "\uD83D\uDE2A", "\uD83E\uDD24", "\uD83D\uDE34", "\uD83D\uDE37", "\uD83E\uDD12", "\uD83E\uDD15", "\uD83E\uDD22", "\uD83E\uDD2E", "\uD83E\uDD27", "\uD83E\uDD75", "\uD83E\uDD76", "\uD83E\uDD74", "\uD83D\uDE35", "\uD83D\uDE35\u200D\uD83D\uDCAB", "\uD83E\uDD2F", "\uD83E\uDD20", "\uD83E\uDD73", "\uD83E\uDD78", "\uD83D\uDE0E", "\uD83E\uDD13", "\uD83E\uDDD0", "\uD83D\uDE15", "\uD83D\uDE1F", "\uD83D\uDE41", "\u2639\uFE0F", "\uD83D\uDE2E", "\uD83D\uDE2F", "\uD83D\uDE32", "\uD83D\uDE33", "\uD83E\uDD7A", "\uD83D\uDE26", "\uD83D\uDE27", "\uD83D\uDE28", "\uD83D\uDE30", "\uD83D\uDE25", "\uD83D\uDE22", "\uD83D\uDE2D", "\uD83D\uDE31", "\uD83D\uDE16", "\uD83D\uDE23", "\uD83D\uDE1E", "\uD83D\uDE13", "\uD83D\uDE29", "\uD83D\uDE2B", "\uD83E\uDD71", "\uD83D\uDE24", "\uD83D\uDE21", "\uD83D\uDE20", "\uD83E\uDD2C", "\uD83D\uDE08", "\uD83D\uDC7F", "\uD83D\uDC80", "\u2620\uFE0F", "\uD83D\uDCA9", "\uD83E\uDD21", "\uD83D\uDC79", "\uD83D\uDC7A", "\uD83D\uDC7B", "\uD83D\uDC7D", "\uD83D\uDC7E", "\uD83E\uDD16", "\uD83D\uDE3A", "\uD83D\uDE38", "\uD83D\uDE39", "\uD83D\uDE3B", "\uD83D\uDE3C", "\uD83D\uDE3D", "\uD83D\uDE40", "\uD83D\uDE3F", "\uD83D\uDE3E", "\uD83D\uDE48", "\uD83D\uDE49", "\uD83D\uDE4A", "\uD83D\uDC8B", "\uD83D\uDC8C", "\uD83D\uDC98", "\uD83D\uDC9D", "\uD83D\uDC96", "\uD83D\uDC97", "\uD83D\uDC93", "\uD83D\uDC9E", "\uD83D\uDC95", "\uD83D\uDC9F", "\u2763\uFE0F", "\uD83D\uDC94", "\u2764\uFE0F\u200D\uD83D\uDD25", "\u2764\uFE0F\u200D\uD83E\uDE79", "\u2764\uFE0F", "\uD83E\uDDE1", "\uD83D\uDC9B", "\uD83D\uDC9A", "\uD83D\uDC99", "\uD83D\uDC9C", "\uD83E\uDD0E", "\uD83D\uDDA4", "\uD83E\uDD0D", "\uD83D\uDCAF", "\uD83D\uDCA2", "\uD83D\uDCA5", "\uD83D\uDCAB", "\uD83D\uDCA6", "\uD83D\uDCA8", "\uD83D\uDD73\uFE0F", "\uD83D\uDCA3", "\uD83D\uDCAC", "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F", "\uD83D\uDDE8\uFE0F", "\uD83D\uDDEF\uFE0F", "\uD83D\uDCAD", "\uD83D\uDCA4"], body: ["\uD83D\uDC4B", "\uD83D\uDC4B\uD83C\uDFFB", "\uD83D\uDC4B\uD83C\uDFFC", "\uD83D\uDC4B\uD83C\uDFFD", "\uD83D\uDC4B\uD83C\uDFFE", "\uD83D\uDC4B\uD83C\uDFFF", "\uD83E\uDD1A", "\uD83E\uDD1A\uD83C\uDFFB", "\uD83E\uDD1A\uD83C\uDFFC", "\uD83E\uDD1A\uD83C\uDFFD", "\uD83E\uDD1A\uD83C\uDFFE", "\uD83E\uDD1A\uD83C\uDFFF", "\uD83D\uDD90\uFE0F", "\uD83D\uDD90\uD83C\uDFFB", "\uD83D\uDD90\uD83C\uDFFC", "\uD83D\uDD90\uD83C\uDFFD", "\uD83D\uDD90\uD83C\uDFFE", "\uD83D\uDD90\uD83C\uDFFF", "\u270B", "\u270B\uD83C\uDFFB", "\u270B\uD83C\uDFFC", "\u270B\uD83C\uDFFD", "\u270B\uD83C\uDFFE", "\u270B\uD83C\uDFFF", "\uD83D\uDD96", "\uD83D\uDD96\uD83C\uDFFB", "\uD83D\uDD96\uD83C\uDFFC", "\uD83D\uDD96\uD83C\uDFFD", "\uD83D\uDD96\uD83C\uDFFE", "\uD83D\uDD96\uD83C\uDFFF", "\uD83D\uDC4C", "\uD83D\uDC4C\uD83C\uDFFB", "\uD83D\uDC4C\uD83C\uDFFC", "\uD83D\uDC4C\uD83C\uDFFD", "\uD83D\uDC4C\uD83C\uDFFE", "\uD83D\uDC4C\uD83C\uDFFF", "\uD83E\uDD0C", "\uD83E\uDD0C\uD83C\uDFFB", "\uD83E\uDD0C\uD83C\uDFFC", "\uD83E\uDD0C\uD83C\uDFFD", "\uD83E\uDD0C\uD83C\uDFFE", "\uD83E\uDD0C\uD83C\uDFFF", "\uD83E\uDD0F", "\uD83E\uDD0F\uD83C\uDFFB", "\uD83E\uDD0F\uD83C\uDFFC", "\uD83E\uDD0F\uD83C\uDFFD", "\uD83E\uDD0F\uD83C\uDFFE", "\uD83E\uDD0F\uD83C\uDFFF", "\u270C\uFE0F", "\u270C\uD83C\uDFFB", "\u270C\uD83C\uDFFC", "\u270C\uD83C\uDFFD", "\u270C\uD83C\uDFFE", "\u270C\uD83C\uDFFF", "\uD83E\uDD1E", "\uD83E\uDD1E\uD83C\uDFFB", "\uD83E\uDD1E\uD83C\uDFFC", "\uD83E\uDD1E\uD83C\uDFFD", "\uD83E\uDD1E\uD83C\uDFFE", "\uD83E\uDD1E\uD83C\uDFFF", "\uD83E\uDD1F", "\uD83E\uDD1F\uD83C\uDFFB", "\uD83E\uDD1F\uD83C\uDFFC", "\uD83E\uDD1F\uD83C\uDFFD", "\uD83E\uDD1F\uD83C\uDFFE", "\uD83E\uDD1F\uD83C\uDFFF", "\uD83E\uDD18", "\uD83E\uDD18\uD83C\uDFFB", "\uD83E\uDD18\uD83C\uDFFC", "\uD83E\uDD18\uD83C\uDFFD", "\uD83E\uDD18\uD83C\uDFFE", "\uD83E\uDD18\uD83C\uDFFF", "\uD83E\uDD19", "\uD83E\uDD19\uD83C\uDFFB", "\uD83E\uDD19\uD83C\uDFFC", "\uD83E\uDD19\uD83C\uDFFD", "\uD83E\uDD19\uD83C\uDFFE", "\uD83E\uDD19\uD83C\uDFFF", "\uD83D\uDC48", "\uD83D\uDC48\uD83C\uDFFB", "\uD83D\uDC48\uD83C\uDFFC", "\uD83D\uDC48\uD83C\uDFFD", "\uD83D\uDC48\uD83C\uDFFE", "\uD83D\uDC48\uD83C\uDFFF", "\uD83D\uDC49", "\uD83D\uDC49\uD83C\uDFFB", "\uD83D\uDC49\uD83C\uDFFC", "\uD83D\uDC49\uD83C\uDFFD", "\uD83D\uDC49\uD83C\uDFFE", "\uD83D\uDC49\uD83C\uDFFF", "\uD83D\uDC46", "\uD83D\uDC46\uD83C\uDFFB", "\uD83D\uDC46\uD83C\uDFFC", "\uD83D\uDC46\uD83C\uDFFD", "\uD83D\uDC46\uD83C\uDFFE", "\uD83D\uDC46\uD83C\uDFFF", "\uD83D\uDD95", "\uD83D\uDD95\uD83C\uDFFB", "\uD83D\uDD95\uD83C\uDFFC", "\uD83D\uDD95\uD83C\uDFFD", "\uD83D\uDD95\uD83C\uDFFE", "\uD83D\uDD95\uD83C\uDFFF", "\uD83D\uDC47", "\uD83D\uDC47\uD83C\uDFFB", "\uD83D\uDC47\uD83C\uDFFC", "\uD83D\uDC47\uD83C\uDFFD", "\uD83D\uDC47\uD83C\uDFFE", "\uD83D\uDC47\uD83C\uDFFF", "\u261D\uFE0F", "\u261D\uD83C\uDFFB", "\u261D\uD83C\uDFFC", "\u261D\uD83C\uDFFD", "\u261D\uD83C\uDFFE", "\u261D\uD83C\uDFFF", "\uD83D\uDC4D", "\uD83D\uDC4D\uD83C\uDFFB", "\uD83D\uDC4D\uD83C\uDFFC", "\uD83D\uDC4D\uD83C\uDFFD", "\uD83D\uDC4D\uD83C\uDFFE", "\uD83D\uDC4D\uD83C\uDFFF", "\uD83D\uDC4E", "\uD83D\uDC4E\uD83C\uDFFB", "\uD83D\uDC4E\uD83C\uDFFC", "\uD83D\uDC4E\uD83C\uDFFD", "\uD83D\uDC4E\uD83C\uDFFE", "\uD83D\uDC4E\uD83C\uDFFF", "\u270A", "\u270A\uD83C\uDFFB", "\u270A\uD83C\uDFFC", "\u270A\uD83C\uDFFD", "\u270A\uD83C\uDFFE", "\u270A\uD83C\uDFFF", "\uD83D\uDC4A", "\uD83D\uDC4A\uD83C\uDFFB", "\uD83D\uDC4A\uD83C\uDFFC", "\uD83D\uDC4A\uD83C\uDFFD", "\uD83D\uDC4A\uD83C\uDFFE", "\uD83D\uDC4A\uD83C\uDFFF", "\uD83E\uDD1B", "\uD83E\uDD1B\uD83C\uDFFB", "\uD83E\uDD1B\uD83C\uDFFC", "\uD83E\uDD1B\uD83C\uDFFD", "\uD83E\uDD1B\uD83C\uDFFE", "\uD83E\uDD1B\uD83C\uDFFF", "\uD83E\uDD1C", "\uD83E\uDD1C\uD83C\uDFFB", "\uD83E\uDD1C\uD83C\uDFFC", "\uD83E\uDD1C\uD83C\uDFFD", "\uD83E\uDD1C\uD83C\uDFFE", "\uD83E\uDD1C\uD83C\uDFFF", "\uD83D\uDC4F", "\uD83D\uDC4F\uD83C\uDFFB", "\uD83D\uDC4F\uD83C\uDFFC", "\uD83D\uDC4F\uD83C\uDFFD", "\uD83D\uDC4F\uD83C\uDFFE", "\uD83D\uDC4F\uD83C\uDFFF", "\uD83D\uDE4C", "\uD83D\uDE4C\uD83C\uDFFB", "\uD83D\uDE4C\uD83C\uDFFC", "\uD83D\uDE4C\uD83C\uDFFD", "\uD83D\uDE4C\uD83C\uDFFE", "\uD83D\uDE4C\uD83C\uDFFF", "\uD83D\uDC50", "\uD83D\uDC50\uD83C\uDFFB", "\uD83D\uDC50\uD83C\uDFFC", "\uD83D\uDC50\uD83C\uDFFD", "\uD83D\uDC50\uD83C\uDFFE", "\uD83D\uDC50\uD83C\uDFFF", "\uD83E\uDD32", "\uD83E\uDD32\uD83C\uDFFB", "\uD83E\uDD32\uD83C\uDFFC", "\uD83E\uDD32\uD83C\uDFFD", "\uD83E\uDD32\uD83C\uDFFE", "\uD83E\uDD32\uD83C\uDFFF", "\uD83E\uDD1D", "\uD83D\uDE4F", "\uD83D\uDE4F\uD83C\uDFFB", "\uD83D\uDE4F\uD83C\uDFFC", "\uD83D\uDE4F\uD83C\uDFFD", "\uD83D\uDE4F\uD83C\uDFFE", "\uD83D\uDE4F\uD83C\uDFFF", "\u270D\uFE0F", "\u270D\uD83C\uDFFB", "\u270D\uD83C\uDFFC", "\u270D\uD83C\uDFFD", "\u270D\uD83C\uDFFE", "\u270D\uD83C\uDFFF", "\uD83D\uDC85", "\uD83D\uDC85\uD83C\uDFFB", "\uD83D\uDC85\uD83C\uDFFC", "\uD83D\uDC85\uD83C\uDFFD", "\uD83D\uDC85\uD83C\uDFFE", "\uD83D\uDC85\uD83C\uDFFF", "\uD83E\uDD33", "\uD83E\uDD33\uD83C\uDFFB", "\uD83E\uDD33\uD83C\uDFFC", "\uD83E\uDD33\uD83C\uDFFD", "\uD83E\uDD33\uD83C\uDFFE", "\uD83E\uDD33\uD83C\uDFFF", "\uD83D\uDCAA", "\uD83D\uDCAA\uD83C\uDFFB", "\uD83D\uDCAA\uD83C\uDFFC", "\uD83D\uDCAA\uD83C\uDFFD", "\uD83D\uDCAA\uD83C\uDFFE", "\uD83D\uDCAA\uD83C\uDFFF", "\uD83E\uDDBE", "\uD83E\uDDBF", "\uD83E\uDDB5", "\uD83E\uDDB5\uD83C\uDFFB", "\uD83E\uDDB5\uD83C\uDFFC", "\uD83E\uDDB5\uD83C\uDFFD", "\uD83E\uDDB5\uD83C\uDFFE", "\uD83E\uDDB5\uD83C\uDFFF", "\uD83E\uDDB6", "\uD83E\uDDB6\uD83C\uDFFB", "\uD83E\uDDB6\uD83C\uDFFC", "\uD83E\uDDB6\uD83C\uDFFD", "\uD83E\uDDB6\uD83C\uDFFE", "\uD83E\uDDB6\uD83C\uDFFF", "\uD83D\uDC42", "\uD83D\uDC42\uD83C\uDFFB", "\uD83D\uDC42\uD83C\uDFFC", "\uD83D\uDC42\uD83C\uDFFD", "\uD83D\uDC42\uD83C\uDFFE", "\uD83D\uDC42\uD83C\uDFFF", "\uD83E\uDDBB", "\uD83E\uDDBB\uD83C\uDFFB", "\uD83E\uDDBB\uD83C\uDFFC", "\uD83E\uDDBB\uD83C\uDFFD", "\uD83E\uDDBB\uD83C\uDFFE", "\uD83E\uDDBB\uD83C\uDFFF", "\uD83D\uDC43", "\uD83D\uDC43\uD83C\uDFFB", "\uD83D\uDC43\uD83C\uDFFC", "\uD83D\uDC43\uD83C\uDFFD", "\uD83D\uDC43\uD83C\uDFFE", "\uD83D\uDC43\uD83C\uDFFF", "\uD83E\uDDE0", "\uD83E\uDEC0", "\uD83E\uDEC1", "\uD83E\uDDB7", "\uD83E\uDDB4", "\uD83D\uDC40", "\uD83D\uDC41\uFE0F", "\uD83D\uDC45", "\uD83D\uDC44"], person: ["\uD83D\uDC76", "\uD83D\uDC76\uD83C\uDFFB", "\uD83D\uDC76\uD83C\uDFFC", "\uD83D\uDC76\uD83C\uDFFD", "\uD83D\uDC76\uD83C\uDFFE", "\uD83D\uDC76\uD83C\uDFFF", "\uD83E\uDDD2", "\uD83E\uDDD2\uD83C\uDFFB", "\uD83E\uDDD2\uD83C\uDFFC", "\uD83E\uDDD2\uD83C\uDFFD", "\uD83E\uDDD2\uD83C\uDFFE", "\uD83E\uDDD2\uD83C\uDFFF", "\uD83D\uDC66", "\uD83D\uDC66\uD83C\uDFFB", "\uD83D\uDC66\uD83C\uDFFC", "\uD83D\uDC66\uD83C\uDFFD", "\uD83D\uDC66\uD83C\uDFFE", "\uD83D\uDC66\uD83C\uDFFF", "\uD83D\uDC67", "\uD83D\uDC67\uD83C\uDFFB", "\uD83D\uDC67\uD83C\uDFFC", "\uD83D\uDC67\uD83C\uDFFD", "\uD83D\uDC67\uD83C\uDFFE", "\uD83D\uDC67\uD83C\uDFFF", "\uD83E\uDDD1", "\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFF", "\uD83D\uDC71", "\uD83D\uDC71\uD83C\uDFFB", "\uD83D\uDC71\uD83C\uDFFC", "\uD83D\uDC71\uD83C\uDFFD", "\uD83D\uDC71\uD83C\uDFFE", "\uD83D\uDC71\uD83C\uDFFF", "\uD83D\uDC68", "\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFF", "\uD83E\uDDD4", "\uD83E\uDDD4\uD83C\uDFFB", "\uD83E\uDDD4\uD83C\uDFFC", "\uD83E\uDDD4\uD83C\uDFFD", "\uD83E\uDDD4\uD83C\uDFFE", "\uD83E\uDDD4\uD83C\uDFFF", "\uD83E\uDDD4\u200D\u2642\uFE0F", "\uD83E\uDDD4\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDD4\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDD4\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDD4\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDD4\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDD4\u200D\u2640\uFE0F", "\uD83E\uDDD4\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDD4\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDD4\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDD4\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDD4\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC68\u200D\uD83E\uDDB0", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB0", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB0", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB0", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB0", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB0", "\uD83D\uDC68\u200D\uD83E\uDDB1", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB1", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB1", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB1", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB1", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB1", "\uD83D\uDC68\u200D\uD83E\uDDB3", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB3", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB3", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB3", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB3", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB3", "\uD83D\uDC68\u200D\uD83E\uDDB2", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB2", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB2", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB2", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB2", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB2", "\uD83D\uDC69", "\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\u200D\uD83E\uDDB0", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB0", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB0", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB0", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB0", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB0", "\uD83E\uDDD1\u200D\uD83E\uDDB0", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB0", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB0", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB0", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB0", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB0", "\uD83D\uDC69\u200D\uD83E\uDDB1", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB1", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB1", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB1", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB1", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB1", "\uD83E\uDDD1\u200D\uD83E\uDDB1", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB1", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB1", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB1", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB1", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB1", "\uD83D\uDC69\u200D\uD83E\uDDB3", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB3", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB3", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB3", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB3", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB3", "\uD83E\uDDD1\u200D\uD83E\uDDB3", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB3", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB3", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB3", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB3", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB3", "\uD83D\uDC69\u200D\uD83E\uDDB2", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB2", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB2", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB2", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB2", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB2", "\uD83E\uDDD1\u200D\uD83E\uDDB2", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB2", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB2", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB2", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB2", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB2", "\uD83D\uDC71\u200D\u2640\uFE0F", "\uD83D\uDC71\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC71\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC71\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC71\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC71\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC71\u200D\u2642\uFE0F", "\uD83D\uDC71\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC71\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC71\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC71\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC71\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDD3", "\uD83E\uDDD3\uD83C\uDFFB", "\uD83E\uDDD3\uD83C\uDFFC", "\uD83E\uDDD3\uD83C\uDFFD", "\uD83E\uDDD3\uD83C\uDFFE", "\uD83E\uDDD3\uD83C\uDFFF", "\uD83D\uDC74", "\uD83D\uDC74\uD83C\uDFFB", "\uD83D\uDC74\uD83C\uDFFC", "\uD83D\uDC74\uD83C\uDFFD", "\uD83D\uDC74\uD83C\uDFFE", "\uD83D\uDC74\uD83C\uDFFF", "\uD83D\uDC75", "\uD83D\uDC75\uD83C\uDFFB", "\uD83D\uDC75\uD83C\uDFFC", "\uD83D\uDC75\uD83C\uDFFD", "\uD83D\uDC75\uD83C\uDFFE", "\uD83D\uDC75\uD83C\uDFFF", "\uD83D\uDE4D", "\uD83D\uDE4D\uD83C\uDFFB", "\uD83D\uDE4D\uD83C\uDFFC", "\uD83D\uDE4D\uD83C\uDFFD", "\uD83D\uDE4D\uD83C\uDFFE", "\uD83D\uDE4D\uD83C\uDFFF", "\uD83D\uDE4D\u200D\u2642\uFE0F", "\uD83D\uDE4D\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDE4D\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDE4D\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDE4D\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDE4D\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDE4D\u200D\u2640\uFE0F", "\uD83D\uDE4D\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDE4D\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDE4D\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDE4D\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDE4D\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDE4E", "\uD83D\uDE4E\uD83C\uDFFB", "\uD83D\uDE4E\uD83C\uDFFC", "\uD83D\uDE4E\uD83C\uDFFD", "\uD83D\uDE4E\uD83C\uDFFE", "\uD83D\uDE4E\uD83C\uDFFF", "\uD83D\uDE4E\u200D\u2642\uFE0F", "\uD83D\uDE4E\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDE4E\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDE4E\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDE4E\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDE4E\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDE4E\u200D\u2640\uFE0F", "\uD83D\uDE4E\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDE4E\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDE4E\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDE4E\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDE4E\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDE45", "\uD83D\uDE45\uD83C\uDFFB", "\uD83D\uDE45\uD83C\uDFFC", "\uD83D\uDE45\uD83C\uDFFD", "\uD83D\uDE45\uD83C\uDFFE", "\uD83D\uDE45\uD83C\uDFFF", "\uD83D\uDE45\u200D\u2642\uFE0F", "\uD83D\uDE45\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDE45\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDE45\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDE45\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDE45\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDE45\u200D\u2640\uFE0F", "\uD83D\uDE45\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDE45\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDE45\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDE45\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDE45\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDE46", "\uD83D\uDE46\uD83C\uDFFB", "\uD83D\uDE46\uD83C\uDFFC", "\uD83D\uDE46\uD83C\uDFFD", "\uD83D\uDE46\uD83C\uDFFE", "\uD83D\uDE46\uD83C\uDFFF", "\uD83D\uDE46\u200D\u2642\uFE0F", "\uD83D\uDE46\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDE46\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDE46\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDE46\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDE46\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDE46\u200D\u2640\uFE0F", "\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDE46\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDE46\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDE46\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDE46\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC81", "\uD83D\uDC81\uD83C\uDFFB", "\uD83D\uDC81\uD83C\uDFFC", "\uD83D\uDC81\uD83C\uDFFD", "\uD83D\uDC81\uD83C\uDFFE", "\uD83D\uDC81\uD83C\uDFFF", "\uD83D\uDC81\u200D\u2642\uFE0F", "\uD83D\uDC81\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC81\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC81\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC81\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC81\u200D\u2640\uFE0F", "\uD83D\uDC81\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC81\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC81\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC81\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC81\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDE4B", "\uD83D\uDE4B\uD83C\uDFFB", "\uD83D\uDE4B\uD83C\uDFFC", "\uD83D\uDE4B\uD83C\uDFFD", "\uD83D\uDE4B\uD83C\uDFFE", "\uD83D\uDE4B\uD83C\uDFFF", "\uD83D\uDE4B\u200D\u2642\uFE0F", "\uD83D\uDE4B\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDE4B\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDE4B\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDE4B\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDE4B\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDE4B\u200D\u2640\uFE0F", "\uD83D\uDE4B\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDE4B\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDE4B\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDE4B\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDE4B\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDCF", "\uD83E\uDDCF\uD83C\uDFFB", "\uD83E\uDDCF\uD83C\uDFFC", "\uD83E\uDDCF\uD83C\uDFFD", "\uD83E\uDDCF\uD83C\uDFFE", "\uD83E\uDDCF\uD83C\uDFFF", "\uD83E\uDDCF\u200D\u2642\uFE0F", "\uD83E\uDDCF\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDCF\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDCF\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDCF\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDCF\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDCF\u200D\u2640\uFE0F", "\uD83E\uDDCF\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDCF\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDCF\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDCF\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDCF\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDE47", "\uD83D\uDE47\uD83C\uDFFB", "\uD83D\uDE47\uD83C\uDFFC", "\uD83D\uDE47\uD83C\uDFFD", "\uD83D\uDE47\uD83C\uDFFE", "\uD83D\uDE47\uD83C\uDFFF", "\uD83D\uDE47\u200D\u2642\uFE0F", "\uD83D\uDE47\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDE47\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDE47\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDE47\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDE47\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDE47\u200D\u2640\uFE0F", "\uD83D\uDE47\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDE47\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDE47\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDE47\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD26", "\uD83E\uDD26\uD83C\uDFFB", "\uD83E\uDD26\uD83C\uDFFC", "\uD83E\uDD26\uD83C\uDFFD", "\uD83E\uDD26\uD83C\uDFFE", "\uD83E\uDD26\uD83C\uDFFF", "\uD83E\uDD26\u200D\u2642\uFE0F", "\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD26\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD26\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD26\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD26\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD26\u200D\u2640\uFE0F", "\uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD26\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD26\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD26\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD26\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD37", "\uD83E\uDD37\uD83C\uDFFB", "\uD83E\uDD37\uD83C\uDFFC", "\uD83E\uDD37\uD83C\uDFFD", "\uD83E\uDD37\uD83C\uDFFE", "\uD83E\uDD37\uD83C\uDFFF", "\uD83E\uDD37\u200D\u2642\uFE0F", "\uD83E\uDD37\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD37\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD37\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD37\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD37\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD37\u200D\u2640\uFE0F", "\uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD37\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD37\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD37\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD37\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDD1\u200D\u2695\uFE0F", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2695\uFE0F", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2695\uFE0F", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2695\uFE0F", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2695\uFE0F", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2695\uFE0F", "\uD83D\uDC68\u200D\u2695\uFE0F", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2695\uFE0F", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2695\uFE0F", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2695\uFE0F", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2695\uFE0F", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2695\uFE0F", "\uD83D\uDC69\u200D\u2695\uFE0F", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2695\uFE0F", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2695\uFE0F", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2695\uFE0F", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2695\uFE0F", "\uD83E\uDDD1\u200D\uD83C\uDF93", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF93", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF93", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF93", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF93", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF93", "\uD83D\uDC68\u200D\uD83C\uDF93", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF93", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF93", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF93", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF93", "\uD83D\uDC69\u200D\uD83C\uDF93", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF93", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF93", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF93", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF93", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF93", "\uD83E\uDDD1\u200D\uD83C\uDFEB", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFEB", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFEB", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFEB", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFEB", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFEB", "\uD83D\uDC68\u200D\uD83C\uDFEB", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFEB", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFEB", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFEB", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFEB", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFEB", "\uD83D\uDC69\u200D\uD83C\uDFEB", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFEB", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFEB", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFEB", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFEB", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFEB", "\uD83E\uDDD1\u200D\u2696\uFE0F", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2696\uFE0F", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2696\uFE0F", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2696\uFE0F", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2696\uFE0F", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2696\uFE0F", "\uD83D\uDC68\u200D\u2696\uFE0F", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2696\uFE0F", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2696\uFE0F", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2696\uFE0F", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2696\uFE0F", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2696\uFE0F", "\uD83D\uDC69\u200D\u2696\uFE0F", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2696\uFE0F", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2696\uFE0F", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2696\uFE0F", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2696\uFE0F", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2696\uFE0F", "\uD83E\uDDD1\u200D\uD83C\uDF3E", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF3E", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF3E", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF3E", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF3E", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF3E", "\uD83D\uDC68\u200D\uD83C\uDF3E", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF3E", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF3E", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF3E", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF3E", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF3E", "\uD83D\uDC69\u200D\uD83C\uDF3E", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF3E", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF3E", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF3E", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF3E", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF3E", "\uD83E\uDDD1\u200D\uD83C\uDF73", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF73", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF73", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF73", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF73", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF73", "\uD83D\uDC68\u200D\uD83C\uDF73", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF73", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF73", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF73", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF73", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF73", "\uD83D\uDC69\u200D\uD83C\uDF73", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF73", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF73", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF73", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF73", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF73", "\uD83E\uDDD1\u200D\uD83D\uDD27", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD27", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDD27", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDD27", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDD27", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDD27", "\uD83D\uDC68\u200D\uD83D\uDD27", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD27", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD27", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD27", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD27", "\uD83D\uDC69\u200D\uD83D\uDD27", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD27", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD27", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD27", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD27", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD27", "\uD83E\uDDD1\u200D\uD83C\uDFED", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFED", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFED", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFED", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFED", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFED", "\uD83D\uDC68\u200D\uD83C\uDFED", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFED", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFED", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFED", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFED", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFED", "\uD83D\uDC69\u200D\uD83C\uDFED", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFED", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFED", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFED", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFED", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFED", "\uD83E\uDDD1\u200D\uD83D\uDCBC", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBC", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDCBC", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDCBC", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDCBC", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDCBC", "\uD83D\uDC68\u200D\uD83D\uDCBC", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBC", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBC", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBC", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBC", "\uD83D\uDC69\u200D\uD83D\uDCBC", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBC", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBC", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBC", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBC", "\uD83E\uDDD1\u200D\uD83D\uDD2C", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD2C", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDD2C", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDD2C", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDD2C", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDD2C", "\uD83D\uDC68\u200D\uD83D\uDD2C", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD2C", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD2C", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD2C", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD2C", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD2C", "\uD83D\uDC69\u200D\uD83D\uDD2C", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD2C", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD2C", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD2C", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD2C", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD2C", "\uD83E\uDDD1\u200D\uD83D\uDCBB", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDCBB", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDCBB", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDCBB", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDCBB", "\uD83D\uDC68\u200D\uD83D\uDCBB", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBB", "\uD83D\uDC69\u200D\uD83D\uDCBB", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBB", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBB", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBB", "\uD83E\uDDD1\u200D\uD83C\uDFA4", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFA4", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFA4", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFA4", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFA4", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFA4", "\uD83D\uDC68\u200D\uD83C\uDFA4", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA4", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA4", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA4", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA4", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA4", "\uD83D\uDC69\u200D\uD83C\uDFA4", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA4", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA4", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA4", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA4", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA4", "\uD83E\uDDD1\u200D\uD83C\uDFA8", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFA8", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFA8", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFA8", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFA8", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFA8", "\uD83D\uDC68\u200D\uD83C\uDFA8", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA8", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA8", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA8", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA8", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA8", "\uD83D\uDC69\u200D\uD83C\uDFA8", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA8", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA8", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA8", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA8", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA8", "\uD83E\uDDD1\u200D\u2708\uFE0F", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2708\uFE0F", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2708\uFE0F", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2708\uFE0F", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2708\uFE0F", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2708\uFE0F", "\uD83D\uDC68\u200D\u2708\uFE0F", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2708\uFE0F", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2708\uFE0F", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2708\uFE0F", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2708\uFE0F", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2708\uFE0F", "\uD83D\uDC69\u200D\u2708\uFE0F", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2708\uFE0F", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2708\uFE0F", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2708\uFE0F", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2708\uFE0F", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2708\uFE0F", "\uD83E\uDDD1\u200D\uD83D\uDE80", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDE80", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDE80", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDE80", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDE80", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDE80", "\uD83D\uDC68\u200D\uD83D\uDE80", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE80", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE80", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE80", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE80", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE80", "\uD83D\uDC69\u200D\uD83D\uDE80", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE80", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE80", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE80", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE80", "\uD83E\uDDD1\u200D\uD83D\uDE92", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDE92", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDE92", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDE92", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDE92", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDE92", "\uD83D\uDC68\u200D\uD83D\uDE92", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE92", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE92", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE92", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE92", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE92", "\uD83D\uDC69\u200D\uD83D\uDE92", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE92", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE92", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE92", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE92", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE92", "\uD83D\uDC6E", "\uD83D\uDC6E\uD83C\uDFFB", "\uD83D\uDC6E\uD83C\uDFFC", "\uD83D\uDC6E\uD83C\uDFFD", "\uD83D\uDC6E\uD83C\uDFFE", "\uD83D\uDC6E\uD83C\uDFFF", "\uD83D\uDC6E\u200D\u2642\uFE0F", "\uD83D\uDC6E\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC6E\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC6E\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC6E\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC6E\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC6E\u200D\u2640\uFE0F", "\uD83D\uDC6E\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC6E\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC6E\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC6E\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC6E\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDD75\uFE0F", "\uD83D\uDD75\uD83C\uDFFB", "\uD83D\uDD75\uD83C\uDFFC", "\uD83D\uDD75\uD83C\uDFFD", "\uD83D\uDD75\uD83C\uDFFE", "\uD83D\uDD75\uD83C\uDFFF", "\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F", "\uD83D\uDD75\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDD75\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDD75\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDD75\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDD75\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDD75\uFE0F\u200D\u2640\uFE0F", "\uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDD75\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDD75\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDD75\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC82", "\uD83D\uDC82\uD83C\uDFFB", "\uD83D\uDC82\uD83C\uDFFC", "\uD83D\uDC82\uD83C\uDFFD", "\uD83D\uDC82\uD83C\uDFFE", "\uD83D\uDC82\uD83C\uDFFF", "\uD83D\uDC82\u200D\u2642\uFE0F", "\uD83D\uDC82\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC82\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC82\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC82\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC82\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC82\u200D\u2640\uFE0F", "\uD83D\uDC82\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC82\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC82\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC82\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC82\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD77", "\uD83E\uDD77\uD83C\uDFFB", "\uD83E\uDD77\uD83C\uDFFC", "\uD83E\uDD77\uD83C\uDFFD", "\uD83E\uDD77\uD83C\uDFFE", "\uD83E\uDD77\uD83C\uDFFF", "\uD83D\uDC77", "\uD83D\uDC77\uD83C\uDFFB", "\uD83D\uDC77\uD83C\uDFFC", "\uD83D\uDC77\uD83C\uDFFD", "\uD83D\uDC77\uD83C\uDFFE", "\uD83D\uDC77\uD83C\uDFFF", "\uD83D\uDC77\u200D\u2642\uFE0F", "\uD83D\uDC77\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC77\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC77\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC77\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC77\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC77\u200D\u2640\uFE0F", "\uD83D\uDC77\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC77\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC77\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC77\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD34", "\uD83E\uDD34\uD83C\uDFFB", "\uD83E\uDD34\uD83C\uDFFC", "\uD83E\uDD34\uD83C\uDFFD", "\uD83E\uDD34\uD83C\uDFFE", "\uD83E\uDD34\uD83C\uDFFF", "\uD83D\uDC78", "\uD83D\uDC78\uD83C\uDFFB", "\uD83D\uDC78\uD83C\uDFFC", "\uD83D\uDC78\uD83C\uDFFD", "\uD83D\uDC78\uD83C\uDFFE", "\uD83D\uDC78\uD83C\uDFFF", "\uD83D\uDC73", "\uD83D\uDC73\uD83C\uDFFB", "\uD83D\uDC73\uD83C\uDFFC", "\uD83D\uDC73\uD83C\uDFFD", "\uD83D\uDC73\uD83C\uDFFE", "\uD83D\uDC73\uD83C\uDFFF", "\uD83D\uDC73\u200D\u2642\uFE0F", "\uD83D\uDC73\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC73\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC73\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC73\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC73\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC73\u200D\u2640\uFE0F", "\uD83D\uDC73\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC73\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC73\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC73\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC73\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC72", "\uD83D\uDC72\uD83C\uDFFB", "\uD83D\uDC72\uD83C\uDFFC", "\uD83D\uDC72\uD83C\uDFFD", "\uD83D\uDC72\uD83C\uDFFE", "\uD83D\uDC72\uD83C\uDFFF", "\uD83E\uDDD5", "\uD83E\uDDD5\uD83C\uDFFB", "\uD83E\uDDD5\uD83C\uDFFC", "\uD83E\uDDD5\uD83C\uDFFD", "\uD83E\uDDD5\uD83C\uDFFE", "\uD83E\uDDD5\uD83C\uDFFF", "\uD83E\uDD35", "\uD83E\uDD35\uD83C\uDFFB", "\uD83E\uDD35\uD83C\uDFFC", "\uD83E\uDD35\uD83C\uDFFD", "\uD83E\uDD35\uD83C\uDFFE", "\uD83E\uDD35\uD83C\uDFFF", "\uD83E\uDD35\u200D\u2642\uFE0F", "\uD83E\uDD35\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD35\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD35\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD35\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD35\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD35\u200D\u2640\uFE0F", "\uD83E\uDD35\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD35\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD35\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD35\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD35\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC70", "\uD83D\uDC70\uD83C\uDFFB", "\uD83D\uDC70\uD83C\uDFFC", "\uD83D\uDC70\uD83C\uDFFD", "\uD83D\uDC70\uD83C\uDFFE", "\uD83D\uDC70\uD83C\uDFFF", "\uD83D\uDC70\u200D\u2642\uFE0F", "\uD83D\uDC70\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC70\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC70\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC70\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC70\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC70\u200D\u2640\uFE0F", "\uD83D\uDC70\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC70\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC70\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC70\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC70\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD30", "\uD83E\uDD30\uD83C\uDFFB", "\uD83E\uDD30\uD83C\uDFFC", "\uD83E\uDD30\uD83C\uDFFD", "\uD83E\uDD30\uD83C\uDFFE", "\uD83E\uDD30\uD83C\uDFFF", "\uD83E\uDD31", "\uD83E\uDD31\uD83C\uDFFB", "\uD83E\uDD31\uD83C\uDFFC", "\uD83E\uDD31\uD83C\uDFFD", "\uD83E\uDD31\uD83C\uDFFE", "\uD83E\uDD31\uD83C\uDFFF", "\uD83D\uDC69\u200D\uD83C\uDF7C", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF7C", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF7C", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF7C", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF7C", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF7C", "\uD83D\uDC68\u200D\uD83C\uDF7C", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF7C", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF7C", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF7C", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF7C", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF7C", "\uD83E\uDDD1\u200D\uD83C\uDF7C", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF7C", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF7C", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF7C", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF7C", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF7C", "\uD83D\uDC7C", "\uD83D\uDC7C\uD83C\uDFFB", "\uD83D\uDC7C\uD83C\uDFFC", "\uD83D\uDC7C\uD83C\uDFFD", "\uD83D\uDC7C\uD83C\uDFFE", "\uD83D\uDC7C\uD83C\uDFFF", "\uD83C\uDF85", "\uD83C\uDF85\uD83C\uDFFB", "\uD83C\uDF85\uD83C\uDFFC", "\uD83C\uDF85\uD83C\uDFFD", "\uD83C\uDF85\uD83C\uDFFE", "\uD83C\uDF85\uD83C\uDFFF", "\uD83E\uDD36", "\uD83E\uDD36\uD83C\uDFFB", "\uD83E\uDD36\uD83C\uDFFC", "\uD83E\uDD36\uD83C\uDFFD", "\uD83E\uDD36\uD83C\uDFFE", "\uD83E\uDD36\uD83C\uDFFF", "\uD83E\uDDD1\u200D\uD83C\uDF84", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF84", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF84", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF84", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF84", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF84", "\uD83E\uDDB8", "\uD83E\uDDB8\uD83C\uDFFB", "\uD83E\uDDB8\uD83C\uDFFC", "\uD83E\uDDB8\uD83C\uDFFD", "\uD83E\uDDB8\uD83C\uDFFE", "\uD83E\uDDB8\uD83C\uDFFF", "\uD83E\uDDB8\u200D\u2642\uFE0F", "\uD83E\uDDB8\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDB8\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDB8\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDB8\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDB8\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDB8\u200D\u2640\uFE0F", "\uD83E\uDDB8\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDB8\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDB8\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDB8\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDB8\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDB9", "\uD83E\uDDB9\uD83C\uDFFB", "\uD83E\uDDB9\uD83C\uDFFC", "\uD83E\uDDB9\uD83C\uDFFD", "\uD83E\uDDB9\uD83C\uDFFE", "\uD83E\uDDB9\uD83C\uDFFF", "\uD83E\uDDB9\u200D\u2642\uFE0F", "\uD83E\uDDB9\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDB9\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDB9\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDB9\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDB9\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDB9\u200D\u2640\uFE0F", "\uD83E\uDDB9\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDB9\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDB9\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDB9\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDB9\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDD9", "\uD83E\uDDD9\uD83C\uDFFB", "\uD83E\uDDD9\uD83C\uDFFC", "\uD83E\uDDD9\uD83C\uDFFD", "\uD83E\uDDD9\uD83C\uDFFE", "\uD83E\uDDD9\uD83C\uDFFF", "\uD83E\uDDD9\u200D\u2642\uFE0F", "\uD83E\uDDD9\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDD9\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDD9\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDD9\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDD9\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDD9\u200D\u2640\uFE0F", "\uD83E\uDDD9\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDD9\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDD9\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDD9\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDD9\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDDA", "\uD83E\uDDDA\uD83C\uDFFB", "\uD83E\uDDDA\uD83C\uDFFC", "\uD83E\uDDDA\uD83C\uDFFD", "\uD83E\uDDDA\uD83C\uDFFE", "\uD83E\uDDDA\uD83C\uDFFF", "\uD83E\uDDDA\u200D\u2642\uFE0F", "\uD83E\uDDDA\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDDA\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDDA\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDDA\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDDA\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDDA\u200D\u2640\uFE0F", "\uD83E\uDDDA\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDDA\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDDA\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDDA\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDDA\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDDB", "\uD83E\uDDDB\uD83C\uDFFB", "\uD83E\uDDDB\uD83C\uDFFC", "\uD83E\uDDDB\uD83C\uDFFD", "\uD83E\uDDDB\uD83C\uDFFE", "\uD83E\uDDDB\uD83C\uDFFF", "\uD83E\uDDDB\u200D\u2642\uFE0F", "\uD83E\uDDDB\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDDB\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDDB\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDDB\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDDB\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDDB\u200D\u2640\uFE0F", "\uD83E\uDDDB\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDDB\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDDB\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDDB\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDDB\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDDC", "\uD83E\uDDDC\uD83C\uDFFB", "\uD83E\uDDDC\uD83C\uDFFC", "\uD83E\uDDDC\uD83C\uDFFD", "\uD83E\uDDDC\uD83C\uDFFE", "\uD83E\uDDDC\uD83C\uDFFF", "\uD83E\uDDDC\u200D\u2642\uFE0F", "\uD83E\uDDDC\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDDC\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDDC\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDDC\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDDC\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDDC\u200D\u2640\uFE0F", "\uD83E\uDDDC\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDDC\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDDC\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDDC\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDDC\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDDD", "\uD83E\uDDDD\uD83C\uDFFB", "\uD83E\uDDDD\uD83C\uDFFC", "\uD83E\uDDDD\uD83C\uDFFD", "\uD83E\uDDDD\uD83C\uDFFE", "\uD83E\uDDDD\uD83C\uDFFF", "\uD83E\uDDDD\u200D\u2642\uFE0F", "\uD83E\uDDDD\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDDD\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDDD\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDDD\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDDD\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDDD\u200D\u2640\uFE0F", "\uD83E\uDDDD\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDDD\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDDD\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDDD\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDDD\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDDE", "\uD83E\uDDDE\u200D\u2642\uFE0F", "\uD83E\uDDDE\u200D\u2640\uFE0F", "\uD83E\uDDDF", "\uD83E\uDDDF\u200D\u2642\uFE0F", "\uD83E\uDDDF\u200D\u2640\uFE0F", "\uD83D\uDC86", "\uD83D\uDC86\uD83C\uDFFB", "\uD83D\uDC86\uD83C\uDFFC", "\uD83D\uDC86\uD83C\uDFFD", "\uD83D\uDC86\uD83C\uDFFE", "\uD83D\uDC86\uD83C\uDFFF", "\uD83D\uDC86\u200D\u2642\uFE0F", "\uD83D\uDC86\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC86\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC86\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC86\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC86\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC86\u200D\u2640\uFE0F", "\uD83D\uDC86\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC86\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC86\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC86\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC86\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC87", "\uD83D\uDC87\uD83C\uDFFB", "\uD83D\uDC87\uD83C\uDFFC", "\uD83D\uDC87\uD83C\uDFFD", "\uD83D\uDC87\uD83C\uDFFE", "\uD83D\uDC87\uD83C\uDFFF", "\uD83D\uDC87\u200D\u2642\uFE0F", "\uD83D\uDC87\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDC87\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDC87\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDC87\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDC87\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDC87\u200D\u2640\uFE0F", "\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDC87\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDC87\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDC87\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDC87\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDEB6", "\uD83D\uDEB6\uD83C\uDFFB", "\uD83D\uDEB6\uD83C\uDFFC", "\uD83D\uDEB6\uD83C\uDFFD", "\uD83D\uDEB6\uD83C\uDFFE", "\uD83D\uDEB6\uD83C\uDFFF", "\uD83D\uDEB6\u200D\u2642\uFE0F", "\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDEB6\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDEB6\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDEB6\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDEB6\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDEB6\u200D\u2640\uFE0F", "\uD83D\uDEB6\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDEB6\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDEB6\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDEB6\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDEB6\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDCD", "\uD83E\uDDCD\uD83C\uDFFB", "\uD83E\uDDCD\uD83C\uDFFC", "\uD83E\uDDCD\uD83C\uDFFD", "\uD83E\uDDCD\uD83C\uDFFE", "\uD83E\uDDCD\uD83C\uDFFF", "\uD83E\uDDCD\u200D\u2642\uFE0F", "\uD83E\uDDCD\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDCD\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDCD\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDCD\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDCD\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDCD\u200D\u2640\uFE0F", "\uD83E\uDDCD\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDCD\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDCD\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDCD\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDCD\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDCE", "\uD83E\uDDCE\uD83C\uDFFB", "\uD83E\uDDCE\uD83C\uDFFC", "\uD83E\uDDCE\uD83C\uDFFD", "\uD83E\uDDCE\uD83C\uDFFE", "\uD83E\uDDCE\uD83C\uDFFF", "\uD83E\uDDCE\u200D\u2642\uFE0F", "\uD83E\uDDCE\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDCE\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDCE\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDCE\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDCE\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDCE\u200D\u2640\uFE0F", "\uD83E\uDDCE\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDCE\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDCE\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDCE\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDCE\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDD1\u200D\uD83E\uDDAF", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDAF", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDAF", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDAF", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDAF", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDAF", "\uD83D\uDC68\u200D\uD83E\uDDAF", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDAF", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDAF", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDAF", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDAF", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDAF", "\uD83D\uDC69\u200D\uD83E\uDDAF", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDAF", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDAF", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDAF", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDAF", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDAF", "\uD83E\uDDD1\u200D\uD83E\uDDBC", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDBC", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDBC", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDBC", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDBC", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDBC", "\uD83D\uDC68\u200D\uD83E\uDDBC", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDBC", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDBC", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDBC", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDBC", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDBC", "\uD83D\uDC69\u200D\uD83E\uDDBC", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDBC", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDBC", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDBC", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDBC", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDBC", "\uD83E\uDDD1\u200D\uD83E\uDDBD", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDBD", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDBD", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDBD", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDBD", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDBD", "\uD83D\uDC68\u200D\uD83E\uDDBD", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDBD", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDBD", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDBD", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDBD", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDBD", "\uD83D\uDC69\u200D\uD83E\uDDBD", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDBD", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDBD", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDBD", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDBD", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDBD", "\uD83C\uDFC3", "\uD83C\uDFC3\uD83C\uDFFB", "\uD83C\uDFC3\uD83C\uDFFC", "\uD83C\uDFC3\uD83C\uDFFD", "\uD83C\uDFC3\uD83C\uDFFE", "\uD83C\uDFC3\uD83C\uDFFF", "\uD83C\uDFC3\u200D\u2642\uFE0F", "\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83C\uDFC3\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83C\uDFC3\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83C\uDFC3\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83C\uDFC3\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83C\uDFC3\u200D\u2640\uFE0F", "\uD83C\uDFC3\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83C\uDFC3\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83C\uDFC3\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83C\uDFC3\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDC83", "\uD83D\uDC83\uD83C\uDFFB", "\uD83D\uDC83\uD83C\uDFFC", "\uD83D\uDC83\uD83C\uDFFD", "\uD83D\uDC83\uD83C\uDFFE", "\uD83D\uDC83\uD83C\uDFFF", "\uD83D\uDD7A", "\uD83D\uDD7A\uD83C\uDFFB", "\uD83D\uDD7A\uD83C\uDFFC", "\uD83D\uDD7A\uD83C\uDFFD", "\uD83D\uDD7A\uD83C\uDFFE", "\uD83D\uDD7A\uD83C\uDFFF", "\uD83D\uDD74\uFE0F", "\uD83D\uDD74\uD83C\uDFFB", "\uD83D\uDD74\uD83C\uDFFC", "\uD83D\uDD74\uD83C\uDFFD", "\uD83D\uDD74\uD83C\uDFFE", "\uD83D\uDD74\uD83C\uDFFF", "\uD83D\uDC6F", "\uD83D\uDC6F\u200D\u2642\uFE0F", "\uD83D\uDC6F\u200D\u2640\uFE0F", "\uD83E\uDDD6", "\uD83E\uDDD6\uD83C\uDFFB", "\uD83E\uDDD6\uD83C\uDFFC", "\uD83E\uDDD6\uD83C\uDFFD", "\uD83E\uDDD6\uD83C\uDFFE", "\uD83E\uDDD6\uD83C\uDFFF", "\uD83E\uDDD6\u200D\u2642\uFE0F", "\uD83E\uDDD6\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDD6\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDD6\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDD6\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDD6\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDD6\u200D\u2640\uFE0F", "\uD83E\uDDD6\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDD6\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDD6\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDD6\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDD6\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDD7", "\uD83E\uDDD7\uD83C\uDFFB", "\uD83E\uDDD7\uD83C\uDFFC", "\uD83E\uDDD7\uD83C\uDFFD", "\uD83E\uDDD7\uD83C\uDFFE", "\uD83E\uDDD7\uD83C\uDFFF", "\uD83E\uDDD7\u200D\u2642\uFE0F", "\uD83E\uDDD7\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDD7\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDD7\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDD7\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDD7\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDD7\u200D\u2640\uFE0F", "\uD83E\uDDD7\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDD7\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDD7\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDD7\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDD7\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD3A", "\uD83C\uDFC7", "\uD83C\uDFC7\uD83C\uDFFB", "\uD83C\uDFC7\uD83C\uDFFC", "\uD83C\uDFC7\uD83C\uDFFD", "\uD83C\uDFC7\uD83C\uDFFE", "\uD83C\uDFC7\uD83C\uDFFF", "\u26F7\uFE0F", "\uD83C\uDFC2", "\uD83C\uDFC2\uD83C\uDFFB", "\uD83C\uDFC2\uD83C\uDFFC", "\uD83C\uDFC2\uD83C\uDFFD", "\uD83C\uDFC2\uD83C\uDFFE", "\uD83C\uDFC2\uD83C\uDFFF", "\uD83C\uDFCC\uFE0F", "\uD83C\uDFCC\uD83C\uDFFB", "\uD83C\uDFCC\uD83C\uDFFC", "\uD83C\uDFCC\uD83C\uDFFD", "\uD83C\uDFCC\uD83C\uDFFE", "\uD83C\uDFCC\uD83C\uDFFF", "\uD83C\uDFCC\uFE0F\u200D\u2642\uFE0F", "\uD83C\uDFCC\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83C\uDFCC\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83C\uDFCC\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83C\uDFCC\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83C\uDFCC\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83C\uDFCC\uFE0F\u200D\u2640\uFE0F", "\uD83C\uDFCC\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83C\uDFCC\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83C\uDFCC\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83C\uDFCC\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83C\uDFCC\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83C\uDFC4", "\uD83C\uDFC4\uD83C\uDFFB", "\uD83C\uDFC4\uD83C\uDFFC", "\uD83C\uDFC4\uD83C\uDFFD", "\uD83C\uDFC4\uD83C\uDFFE", "\uD83C\uDFC4\uD83C\uDFFF", "\uD83C\uDFC4\u200D\u2642\uFE0F", "\uD83C\uDFC4\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83C\uDFC4\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83C\uDFC4\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83C\uDFC4\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83C\uDFC4\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83C\uDFC4\u200D\u2640\uFE0F", "\uD83C\uDFC4\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83C\uDFC4\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83C\uDFC4\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83C\uDFC4\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83C\uDFC4\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDEA3", "\uD83D\uDEA3\uD83C\uDFFB", "\uD83D\uDEA3\uD83C\uDFFC", "\uD83D\uDEA3\uD83C\uDFFD", "\uD83D\uDEA3\uD83C\uDFFE", "\uD83D\uDEA3\uD83C\uDFFF", "\uD83D\uDEA3\u200D\u2642\uFE0F", "\uD83D\uDEA3\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDEA3\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDEA3\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDEA3\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDEA3\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDEA3\u200D\u2640\uFE0F", "\uD83D\uDEA3\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDEA3\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDEA3\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDEA3\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDEA3\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83C\uDFCA", "\uD83C\uDFCA\uD83C\uDFFB", "\uD83C\uDFCA\uD83C\uDFFC", "\uD83C\uDFCA\uD83C\uDFFD", "\uD83C\uDFCA\uD83C\uDFFE", "\uD83C\uDFCA\uD83C\uDFFF", "\uD83C\uDFCA\u200D\u2642\uFE0F", "\uD83C\uDFCA\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83C\uDFCA\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83C\uDFCA\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83C\uDFCA\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83C\uDFCA\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83C\uDFCA\u200D\u2640\uFE0F", "\uD83C\uDFCA\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83C\uDFCA\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83C\uDFCA\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83C\uDFCA\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83C\uDFCA\uD83C\uDFFF\u200D\u2640\uFE0F", "\u26F9\uFE0F", "\u26F9\uD83C\uDFFB", "\u26F9\uD83C\uDFFC", "\u26F9\uD83C\uDFFD", "\u26F9\uD83C\uDFFE", "\u26F9\uD83C\uDFFF", "\u26F9\uFE0F\u200D\u2642\uFE0F", "\u26F9\uD83C\uDFFB\u200D\u2642\uFE0F", "\u26F9\uD83C\uDFFC\u200D\u2642\uFE0F", "\u26F9\uD83C\uDFFD\u200D\u2642\uFE0F", "\u26F9\uD83C\uDFFE\u200D\u2642\uFE0F", "\u26F9\uD83C\uDFFF\u200D\u2642\uFE0F", "\u26F9\uFE0F\u200D\u2640\uFE0F", "\u26F9\uD83C\uDFFB\u200D\u2640\uFE0F", "\u26F9\uD83C\uDFFC\u200D\u2640\uFE0F", "\u26F9\uD83C\uDFFD\u200D\u2640\uFE0F", "\u26F9\uD83C\uDFFE\u200D\u2640\uFE0F", "\u26F9\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83C\uDFCB\uFE0F", "\uD83C\uDFCB\uD83C\uDFFB", "\uD83C\uDFCB\uD83C\uDFFC", "\uD83C\uDFCB\uD83C\uDFFD", "\uD83C\uDFCB\uD83C\uDFFE", "\uD83C\uDFCB\uD83C\uDFFF", "\uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F", "\uD83C\uDFCB\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83C\uDFCB\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83C\uDFCB\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83C\uDFCB\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83C\uDFCB\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F", "\uD83C\uDFCB\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83C\uDFCB\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83C\uDFCB\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83C\uDFCB\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83C\uDFCB\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDEB4", "\uD83D\uDEB4\uD83C\uDFFB", "\uD83D\uDEB4\uD83C\uDFFC", "\uD83D\uDEB4\uD83C\uDFFD", "\uD83D\uDEB4\uD83C\uDFFE", "\uD83D\uDEB4\uD83C\uDFFF", "\uD83D\uDEB4\u200D\u2642\uFE0F", "\uD83D\uDEB4\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDEB4\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDEB4\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDEB4\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDEB4\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDEB4\u200D\u2640\uFE0F", "\uD83D\uDEB4\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDEB4\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDEB4\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDEB4\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDEB4\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDEB5", "\uD83D\uDEB5\uD83C\uDFFB", "\uD83D\uDEB5\uD83C\uDFFC", "\uD83D\uDEB5\uD83C\uDFFD", "\uD83D\uDEB5\uD83C\uDFFE", "\uD83D\uDEB5\uD83C\uDFFF", "\uD83D\uDEB5\u200D\u2642\uFE0F", "\uD83D\uDEB5\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83D\uDEB5\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83D\uDEB5\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83D\uDEB5\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83D\uDEB5\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83D\uDEB5\u200D\u2640\uFE0F", "\uD83D\uDEB5\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83D\uDEB5\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83D\uDEB5\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83D\uDEB5\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83D\uDEB5\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD38", "\uD83E\uDD38\uD83C\uDFFB", "\uD83E\uDD38\uD83C\uDFFC", "\uD83E\uDD38\uD83C\uDFFD", "\uD83E\uDD38\uD83C\uDFFE", "\uD83E\uDD38\uD83C\uDFFF", "\uD83E\uDD38\u200D\u2642\uFE0F", "\uD83E\uDD38\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD38\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD38\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD38\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD38\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD38\u200D\u2640\uFE0F", "\uD83E\uDD38\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD38\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD38\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD38\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD38\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD3C", "\uD83E\uDD3C\u200D\u2642\uFE0F", "\uD83E\uDD3C\u200D\u2640\uFE0F", "\uD83E\uDD3D", "\uD83E\uDD3D\uD83C\uDFFB", "\uD83E\uDD3D\uD83C\uDFFC", "\uD83E\uDD3D\uD83C\uDFFD", "\uD83E\uDD3D\uD83C\uDFFE", "\uD83E\uDD3D\uD83C\uDFFF", "\uD83E\uDD3D\u200D\u2642\uFE0F", "\uD83E\uDD3D\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD3D\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD3D\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD3D\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD3D\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD3D\u200D\u2640\uFE0F", "\uD83E\uDD3D\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD3D\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD3D\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD3D\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD3D\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD3E", "\uD83E\uDD3E\uD83C\uDFFB", "\uD83E\uDD3E\uD83C\uDFFC", "\uD83E\uDD3E\uD83C\uDFFD", "\uD83E\uDD3E\uD83C\uDFFE", "\uD83E\uDD3E\uD83C\uDFFF", "\uD83E\uDD3E\u200D\u2642\uFE0F", "\uD83E\uDD3E\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD3E\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD3E\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD3E\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD3E\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD3E\u200D\u2640\uFE0F", "\uD83E\uDD3E\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD3E\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD3E\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD3E\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDD39", "\uD83E\uDD39\uD83C\uDFFB", "\uD83E\uDD39\uD83C\uDFFC", "\uD83E\uDD39\uD83C\uDFFD", "\uD83E\uDD39\uD83C\uDFFE", "\uD83E\uDD39\uD83C\uDFFF", "\uD83E\uDD39\u200D\u2642\uFE0F", "\uD83E\uDD39\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDD39\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDD39\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDD39\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDD39\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDD39\u200D\u2640\uFE0F", "\uD83E\uDD39\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDD39\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDD39\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDD39\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDD39\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83E\uDDD8", "\uD83E\uDDD8\uD83C\uDFFB", "\uD83E\uDDD8\uD83C\uDFFC", "\uD83E\uDDD8\uD83C\uDFFD", "\uD83E\uDDD8\uD83C\uDFFE", "\uD83E\uDDD8\uD83C\uDFFF", "\uD83E\uDDD8\u200D\u2642\uFE0F", "\uD83E\uDDD8\uD83C\uDFFB\u200D\u2642\uFE0F", "\uD83E\uDDD8\uD83C\uDFFC\u200D\u2642\uFE0F", "\uD83E\uDDD8\uD83C\uDFFD\u200D\u2642\uFE0F", "\uD83E\uDDD8\uD83C\uDFFE\u200D\u2642\uFE0F", "\uD83E\uDDD8\uD83C\uDFFF\u200D\u2642\uFE0F", "\uD83E\uDDD8\u200D\u2640\uFE0F", "\uD83E\uDDD8\uD83C\uDFFB\u200D\u2640\uFE0F", "\uD83E\uDDD8\uD83C\uDFFC\u200D\u2640\uFE0F", "\uD83E\uDDD8\uD83C\uDFFD\u200D\u2640\uFE0F", "\uD83E\uDDD8\uD83C\uDFFE\u200D\u2640\uFE0F", "\uD83E\uDDD8\uD83C\uDFFF\u200D\u2640\uFE0F", "\uD83D\uDEC0", "\uD83D\uDEC0\uD83C\uDFFB", "\uD83D\uDEC0\uD83C\uDFFC", "\uD83D\uDEC0\uD83C\uDFFD", "\uD83D\uDEC0\uD83C\uDFFE", "\uD83D\uDEC0\uD83C\uDFFF", "\uD83D\uDECC", "\uD83D\uDECC\uD83C\uDFFB", "\uD83D\uDECC\uD83C\uDFFC", "\uD83D\uDECC\uD83C\uDFFD", "\uD83D\uDECC\uD83C\uDFFE", "\uD83D\uDECC\uD83C\uDFFF", "\uD83E\uDDD1\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83D\uDC6D", "\uD83D\uDC6D\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC6D\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC6D\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC6D\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC6D\uD83C\uDFFF", "\uD83D\uDC6B", "\uD83D\uDC6B\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC6B\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC6B\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC6B\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC6B\uD83C\uDFFF", "\uD83D\uDC6C", "\uD83D\uDC6C\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC6C\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC6C\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC6C\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC6C\uD83C\uDFFF", "\uD83D\uDC8F", "\uD83D\uDC8F\uD83C\uDFFB", "\uD83D\uDC8F\uD83C\uDFFC", "\uD83D\uDC8F\uD83C\uDFFD", "\uD83D\uDC8F\uD83C\uDFFE", "\uD83D\uDC8F\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC91", "\uD83D\uDC91\uD83C\uDFFB", "\uD83D\uDC91\uD83C\uDFFC", "\uD83D\uDC91\uD83C\uDFFD", "\uD83D\uDC91\uD83C\uDFFE", "\uD83D\uDC91\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD", "\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE", "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC68", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE", "\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF", "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE", "\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF", "\uD83D\uDC6A", "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67", "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67", "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67", "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67", "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66", "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67", "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66", "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66", "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67", "\uD83D\uDC68\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC67", "\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66", "\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67", "\uD83D\uDC69\u200D\uD83D\uDC66", "\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66", "\uD83D\uDC69\u200D\uD83D\uDC67", "\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66", "\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67", "\uD83D\uDDE3\uFE0F", "\uD83D\uDC64", "\uD83D\uDC65", "\uD83E\uDEC2", "\uD83D\uDC63"], nature: ["\uD83D\uDC35", "\uD83D\uDC12", "\uD83E\uDD8D", "\uD83E\uDDA7", "\uD83D\uDC36", "\uD83D\uDC15", "\uD83E\uDDAE", "\uD83D\uDC15\u200D\uD83E\uDDBA", "\uD83D\uDC29", "\uD83D\uDC3A", "\uD83E\uDD8A", "\uD83E\uDD9D", "\uD83D\uDC31", "\uD83D\uDC08", "\uD83D\uDC08\u200D\u2B1B", "\uD83E\uDD81", "\uD83D\uDC2F", "\uD83D\uDC05", "\uD83D\uDC06", "\uD83D\uDC34", "\uD83D\uDC0E", "\uD83E\uDD84", "\uD83E\uDD93", "\uD83E\uDD8C", "\uD83E\uDDAC", "\uD83D\uDC2E", "\uD83D\uDC02", "\uD83D\uDC03", "\uD83D\uDC04", "\uD83D\uDC37", "\uD83D\uDC16", "\uD83D\uDC17", "\uD83D\uDC3D", "\uD83D\uDC0F", "\uD83D\uDC11", "\uD83D\uDC10", "\uD83D\uDC2A", "\uD83D\uDC2B", "\uD83E\uDD99", "\uD83E\uDD92", "\uD83D\uDC18", "\uD83E\uDDA3", "\uD83E\uDD8F", "\uD83E\uDD9B", "\uD83D\uDC2D", "\uD83D\uDC01", "\uD83D\uDC00", "\uD83D\uDC39", "\uD83D\uDC30", "\uD83D\uDC07", "\uD83D\uDC3F\uFE0F", "\uD83E\uDDAB", "\uD83E\uDD94", "\uD83E\uDD87", "\uD83D\uDC3B", "\uD83D\uDC3B\u200D\u2744\uFE0F", "\uD83D\uDC28", "\uD83D\uDC3C", "\uD83E\uDDA5", "\uD83E\uDDA6", "\uD83E\uDDA8", "\uD83E\uDD98", "\uD83E\uDDA1", "\uD83D\uDC3E", "\uD83E\uDD83", "\uD83D\uDC14", "\uD83D\uDC13", "\uD83D\uDC23", "\uD83D\uDC24", "\uD83D\uDC25", "\uD83D\uDC26", "\uD83D\uDC27", "\uD83D\uDD4A\uFE0F", "\uD83E\uDD85", "\uD83E\uDD86", "\uD83E\uDDA2", "\uD83E\uDD89", "\uD83E\uDDA4", "\uD83E\uDEB6", "\uD83E\uDDA9", "\uD83E\uDD9A", "\uD83E\uDD9C", "\uD83D\uDC38", "\uD83D\uDC0A", "\uD83D\uDC22", "\uD83E\uDD8E", "\uD83D\uDC0D", "\uD83D\uDC32", "\uD83D\uDC09", "\uD83E\uDD95", "\uD83E\uDD96", "\uD83D\uDC33", "\uD83D\uDC0B", "\uD83D\uDC2C", "\uD83E\uDDAD", "\uD83D\uDC1F", "\uD83D\uDC20", "\uD83D\uDC21", "\uD83E\uDD88", "\uD83D\uDC19", "\uD83D\uDC1A", "\uD83D\uDC0C", "\uD83E\uDD8B", "\uD83D\uDC1B", "\uD83D\uDC1C", "\uD83D\uDC1D", "\uD83E\uDEB2", "\uD83D\uDC1E", "\uD83E\uDD97", "\uD83E\uDEB3", "\uD83D\uDD77\uFE0F", "\uD83D\uDD78\uFE0F", "\uD83E\uDD82", "\uD83E\uDD9F", "\uD83E\uDEB0", "\uD83E\uDEB1", "\uD83E\uDDA0", "\uD83D\uDC90", "\uD83C\uDF38", "\uD83D\uDCAE", "\uD83C\uDFF5\uFE0F", "\uD83C\uDF39", "\uD83E\uDD40", "\uD83C\uDF3A", "\uD83C\uDF3B", "\uD83C\uDF3C", "\uD83C\uDF37", "\uD83C\uDF31", "\uD83E\uDEB4", "\uD83C\uDF32", "\uD83C\uDF33", "\uD83C\uDF34", "\uD83C\uDF35", "\uD83C\uDF3E", "\uD83C\uDF3F", "\u2618\uFE0F", "\uD83C\uDF40", "\uD83C\uDF41", "\uD83C\uDF42", "\uD83C\uDF43"], food: ["\uD83C\uDF47", "\uD83C\uDF48", "\uD83C\uDF49", "\uD83C\uDF4A", "\uD83C\uDF4B", "\uD83C\uDF4C", "\uD83C\uDF4D", "\uD83E\uDD6D", "\uD83C\uDF4E", "\uD83C\uDF4F", "\uD83C\uDF50", "\uD83C\uDF51", "\uD83C\uDF52", "\uD83C\uDF53", "\uD83E\uDED0", "\uD83E\uDD5D", "\uD83C\uDF45", "\uD83E\uDED2", "\uD83E\uDD65", "\uD83E\uDD51", "\uD83C\uDF46", "\uD83E\uDD54", "\uD83E\uDD55", "\uD83C\uDF3D", "\uD83C\uDF36\uFE0F", "\uD83E\uDED1", "\uD83E\uDD52", "\uD83E\uDD6C", "\uD83E\uDD66", "\uD83E\uDDC4", "\uD83E\uDDC5", "\uD83C\uDF44", "\uD83E\uDD5C", "\uD83C\uDF30", "\uD83C\uDF5E", "\uD83E\uDD50", "\uD83E\uDD56", "\uD83E\uDED3", "\uD83E\uDD68", "\uD83E\uDD6F", "\uD83E\uDD5E", "\uD83E\uDDC7", "\uD83E\uDDC0", "\uD83C\uDF56", "\uD83C\uDF57", "\uD83E\uDD69", "\uD83E\uDD53", "\uD83C\uDF54", "\uD83C\uDF5F", "\uD83C\uDF55", "\uD83C\uDF2D", "\uD83E\uDD6A", "\uD83C\uDF2E", "\uD83C\uDF2F", "\uD83E\uDED4", "\uD83E\uDD59", "\uD83E\uDDC6", "\uD83E\uDD5A", "\uD83C\uDF73", "\uD83E\uDD58", "\uD83C\uDF72", "\uD83E\uDED5", "\uD83E\uDD63", "\uD83E\uDD57", "\uD83C\uDF7F", "\uD83E\uDDC8", "\uD83E\uDDC2", "\uD83E\uDD6B", "\uD83C\uDF71", "\uD83C\uDF58", "\uD83C\uDF59", "\uD83C\uDF5A", "\uD83C\uDF5B", "\uD83C\uDF5C", "\uD83C\uDF5D", "\uD83C\uDF60", "\uD83C\uDF62", "\uD83C\uDF63", "\uD83C\uDF64", "\uD83C\uDF65", "\uD83E\uDD6E", "\uD83C\uDF61", "\uD83E\uDD5F", "\uD83E\uDD60", "\uD83E\uDD61", "\uD83E\uDD80", "\uD83E\uDD9E", "\uD83E\uDD90", "\uD83E\uDD91", "\uD83E\uDDAA", "\uD83C\uDF66", "\uD83C\uDF67", "\uD83C\uDF68", "\uD83C\uDF69", "\uD83C\uDF6A", "\uD83C\uDF82", "\uD83C\uDF70", "\uD83E\uDDC1", "\uD83E\uDD67", "\uD83C\uDF6B", "\uD83C\uDF6C", "\uD83C\uDF6D", "\uD83C\uDF6E", "\uD83C\uDF6F", "\uD83C\uDF7C", "\uD83E\uDD5B", "\u2615", "\uD83E\uDED6", "\uD83C\uDF75", "\uD83C\uDF76", "\uD83C\uDF7E", "\uD83C\uDF77", "\uD83C\uDF78", "\uD83C\uDF79", "\uD83C\uDF7A", "\uD83C\uDF7B", "\uD83E\uDD42", "\uD83E\uDD43", "\uD83E\uDD64", "\uD83E\uDDCB", "\uD83E\uDDC3", "\uD83E\uDDC9", "\uD83E\uDDCA", "\uD83E\uDD62", "\uD83C\uDF7D\uFE0F", "\uD83C\uDF74", "\uD83E\uDD44", "\uD83D\uDD2A", "\uD83C\uDFFA"], travel: ["\uD83C\uDF0D", "\uD83C\uDF0E", "\uD83C\uDF0F", "\uD83C\uDF10", "\uD83D\uDDFA\uFE0F", "\uD83D\uDDFE", "\uD83E\uDDED", "\uD83C\uDFD4\uFE0F", "\u26F0\uFE0F", "\uD83C\uDF0B", "\uD83D\uDDFB", "\uD83C\uDFD5\uFE0F", "\uD83C\uDFD6\uFE0F", "\uD83C\uDFDC\uFE0F", "\uD83C\uDFDD\uFE0F", "\uD83C\uDFDE\uFE0F", "\uD83C\uDFDF\uFE0F", "\uD83C\uDFDB\uFE0F", "\uD83C\uDFD7\uFE0F", "\uD83E\uDDF1", "\uD83E\uDEA8", "\uD83E\uDEB5", "\uD83D\uDED6", "\uD83C\uDFD8\uFE0F", "\uD83C\uDFDA\uFE0F", "\uD83C\uDFE0", "\uD83C\uDFE1", "\uD83C\uDFE2", "\uD83C\uDFE3", "\uD83C\uDFE4", "\uD83C\uDFE5", "\uD83C\uDFE6", "\uD83C\uDFE8", "\uD83C\uDFE9", "\uD83C\uDFEA", "\uD83C\uDFEB", "\uD83C\uDFEC", "\uD83C\uDFED", "\uD83C\uDFEF", "\uD83C\uDFF0", "\uD83D\uDC92", "\uD83D\uDDFC", "\uD83D\uDDFD", "\u26EA", "\uD83D\uDD4C", "\uD83D\uDED5", "\uD83D\uDD4D", "\u26E9\uFE0F", "\uD83D\uDD4B", "\u26F2", "\u26FA", "\uD83C\uDF01", "\uD83C\uDF03", "\uD83C\uDFD9\uFE0F", "\uD83C\uDF04", "\uD83C\uDF05", "\uD83C\uDF06", "\uD83C\uDF07", "\uD83C\uDF09", "\u2668\uFE0F", "\uD83C\uDFA0", "\uD83C\uDFA1", "\uD83C\uDFA2", "\uD83D\uDC88", "\uD83C\uDFAA", "\uD83D\uDE82", "\uD83D\uDE83", "\uD83D\uDE84", "\uD83D\uDE85", "\uD83D\uDE86", "\uD83D\uDE87", "\uD83D\uDE88", "\uD83D\uDE89", "\uD83D\uDE8A", "\uD83D\uDE9D", "\uD83D\uDE9E", "\uD83D\uDE8B", "\uD83D\uDE8C", "\uD83D\uDE8D", "\uD83D\uDE8E", "\uD83D\uDE90", "\uD83D\uDE91", "\uD83D\uDE92", "\uD83D\uDE93", "\uD83D\uDE94", "\uD83D\uDE95", "\uD83D\uDE96", "\uD83D\uDE97", "\uD83D\uDE98", "\uD83D\uDE99", "\uD83D\uDEFB", "\uD83D\uDE9A", "\uD83D\uDE9B", "\uD83D\uDE9C", "\uD83C\uDFCE\uFE0F", "\uD83C\uDFCD\uFE0F", "\uD83D\uDEF5", "\uD83E\uDDBD", "\uD83E\uDDBC", "\uD83D\uDEFA", "\uD83D\uDEB2", "\uD83D\uDEF4", "\uD83D\uDEF9", "\uD83D\uDEFC", "\uD83D\uDE8F", "\uD83D\uDEE3\uFE0F", "\uD83D\uDEE4\uFE0F", "\uD83D\uDEE2\uFE0F", "\u26FD", "\uD83D\uDEA8", "\uD83D\uDEA5", "\uD83D\uDEA6", "\uD83D\uDED1", "\uD83D\uDEA7", "\u2693", "\u26F5", "\uD83D\uDEF6", "\uD83D\uDEA4", "\uD83D\uDEF3\uFE0F", "\u26F4\uFE0F", "\uD83D\uDEE5\uFE0F", "\uD83D\uDEA2", "\u2708\uFE0F", "\uD83D\uDEE9\uFE0F", "\uD83D\uDEEB", "\uD83D\uDEEC", "\uD83E\uDE82", "\uD83D\uDCBA", "\uD83D\uDE81", "\uD83D\uDE9F", "\uD83D\uDEA0", "\uD83D\uDEA1", "\uD83D\uDEF0\uFE0F", "\uD83D\uDE80", "\uD83D\uDEF8", "\uD83D\uDECE\uFE0F", "\uD83E\uDDF3", "\u231B", "\u23F3", "\u231A", "\u23F0", "\u23F1\uFE0F", "\u23F2\uFE0F", "\uD83D\uDD70\uFE0F", "\uD83D\uDD5B", "\uD83D\uDD67", "\uD83D\uDD50", "\uD83D\uDD5C", "\uD83D\uDD51", "\uD83D\uDD5D", "\uD83D\uDD52", "\uD83D\uDD5E", "\uD83D\uDD53", "\uD83D\uDD5F", "\uD83D\uDD54", "\uD83D\uDD60", "\uD83D\uDD55", "\uD83D\uDD61", "\uD83D\uDD56", "\uD83D\uDD62", "\uD83D\uDD57", "\uD83D\uDD63", "\uD83D\uDD58", "\uD83D\uDD64", "\uD83D\uDD59", "\uD83D\uDD65", "\uD83D\uDD5A", "\uD83D\uDD66", "\uD83C\uDF11", "\uD83C\uDF12", "\uD83C\uDF13", "\uD83C\uDF14", "\uD83C\uDF15", "\uD83C\uDF16", "\uD83C\uDF17", "\uD83C\uDF18", "\uD83C\uDF19", "\uD83C\uDF1A", "\uD83C\uDF1B", "\uD83C\uDF1C", "\uD83C\uDF21\uFE0F", "\u2600\uFE0F", "\uD83C\uDF1D", "\uD83C\uDF1E", "\uD83E\uDE90", "\u2B50", "\uD83C\uDF1F", "\uD83C\uDF20", "\uD83C\uDF0C", "\u2601\uFE0F", "\u26C5", "\u26C8\uFE0F", "\uD83C\uDF24\uFE0F", "\uD83C\uDF25\uFE0F", "\uD83C\uDF26\uFE0F", "\uD83C\uDF27\uFE0F", "\uD83C\uDF28\uFE0F", "\uD83C\uDF29\uFE0F", "\uD83C\uDF2A\uFE0F", "\uD83C\uDF2B\uFE0F", "\uD83C\uDF2C\uFE0F", "\uD83C\uDF00", "\uD83C\uDF08", "\uD83C\uDF02", "\u2602\uFE0F", "\u2614", "\u26F1\uFE0F", "\u26A1", "\u2744\uFE0F", "\u2603\uFE0F", "\u26C4", "\u2604\uFE0F", "\uD83D\uDD25", "\uD83D\uDCA7", "\uD83C\uDF0A"], activity: ["\uD83C\uDF83", "\uD83C\uDF84", "\uD83C\uDF86", "\uD83C\uDF87", "\uD83E\uDDE8", "\u2728", "\uD83C\uDF88", "\uD83C\uDF89", "\uD83C\uDF8A", "\uD83C\uDF8B", "\uD83C\uDF8D", "\uD83C\uDF8E", "\uD83C\uDF8F", "\uD83C\uDF90", "\uD83C\uDF91", "\uD83E\uDDE7", "\uD83C\uDF80", "\uD83C\uDF81", "\uD83C\uDF97\uFE0F", "\uD83C\uDF9F\uFE0F", "\uD83C\uDFAB", "\uD83C\uDF96\uFE0F", "\uD83C\uDFC6", "\uD83C\uDFC5", "\uD83E\uDD47", "\uD83E\uDD48", "\uD83E\uDD49", "\u26BD", "\u26BE", "\uD83E\uDD4E", "\uD83C\uDFC0", "\uD83C\uDFD0", "\uD83C\uDFC8", "\uD83C\uDFC9", "\uD83C\uDFBE", "\uD83E\uDD4F", "\uD83C\uDFB3", "\uD83C\uDFCF", "\uD83C\uDFD1", "\uD83C\uDFD2", "\uD83E\uDD4D", "\uD83C\uDFD3", "\uD83C\uDFF8", "\uD83E\uDD4A", "\uD83E\uDD4B", "\uD83E\uDD45", "\u26F3", "\u26F8\uFE0F", "\uD83C\uDFA3", "\uD83E\uDD3F", "\uD83C\uDFBD", "\uD83C\uDFBF", "\uD83D\uDEF7", "\uD83E\uDD4C", "\uD83C\uDFAF", "\uD83E\uDE80", "\uD83E\uDE81", "\uD83C\uDFB1", "\uD83D\uDD2E", "\uD83E\uDE84", "\uD83E\uDDFF", "\uD83C\uDFAE", "\uD83D\uDD79\uFE0F", "\uD83C\uDFB0", "\uD83C\uDFB2", "\uD83E\uDDE9", "\uD83E\uDDF8", "\uD83E\uDE85", "\uD83E\uDE86", "\u2660\uFE0F", "\u2665\uFE0F", "\u2666\uFE0F", "\u2663\uFE0F", "\u265F\uFE0F", "\uD83C\uDCCF", "\uD83C\uDC04", "\uD83C\uDFB4", "\uD83C\uDFAD", "\uD83D\uDDBC\uFE0F", "\uD83C\uDFA8", "\uD83E\uDDF5", "\uD83E\uDEA1", "\uD83E\uDDF6", "\uD83E\uDEA2"], object: ["\uD83D\uDC53", "\uD83D\uDD76\uFE0F", "\uD83E\uDD7D", "\uD83E\uDD7C", "\uD83E\uDDBA", "\uD83D\uDC54", "\uD83D\uDC55", "\uD83D\uDC56", "\uD83E\uDDE3", "\uD83E\uDDE4", "\uD83E\uDDE5", "\uD83E\uDDE6", "\uD83D\uDC57", "\uD83D\uDC58", "\uD83E\uDD7B", "\uD83E\uDE71", "\uD83E\uDE72", "\uD83E\uDE73", "\uD83D\uDC59", "\uD83D\uDC5A", "\uD83D\uDC5B", "\uD83D\uDC5C", "\uD83D\uDC5D", "\uD83D\uDECD\uFE0F", "\uD83C\uDF92", "\uD83E\uDE74", "\uD83D\uDC5E", "\uD83D\uDC5F", "\uD83E\uDD7E", "\uD83E\uDD7F", "\uD83D\uDC60", "\uD83D\uDC61", "\uD83E\uDE70", "\uD83D\uDC62", "\uD83D\uDC51", "\uD83D\uDC52", "\uD83C\uDFA9", "\uD83C\uDF93", "\uD83E\uDDE2", "\uD83E\uDE96", "\u26D1\uFE0F", "\uD83D\uDCFF", "\uD83D\uDC84", "\uD83D\uDC8D", "\uD83D\uDC8E", "\uD83D\uDD07", "\uD83D\uDD08", "\uD83D\uDD09", "\uD83D\uDD0A", "\uD83D\uDCE2", "\uD83D\uDCE3", "\uD83D\uDCEF", "\uD83D\uDD14", "\uD83D\uDD15", "\uD83C\uDFBC", "\uD83C\uDFB5", "\uD83C\uDFB6", "\uD83C\uDF99\uFE0F", "\uD83C\uDF9A\uFE0F", "\uD83C\uDF9B\uFE0F", "\uD83C\uDFA4", "\uD83C\uDFA7", "\uD83D\uDCFB", "\uD83C\uDFB7", "\uD83E\uDE97", "\uD83C\uDFB8", "\uD83C\uDFB9", "\uD83C\uDFBA", "\uD83C\uDFBB", "\uD83E\uDE95", "\uD83E\uDD41", "\uD83E\uDE98", "\uD83D\uDCF1", "\uD83D\uDCF2", "\u260E\uFE0F", "\uD83D\uDCDE", "\uD83D\uDCDF", "\uD83D\uDCE0", "\uD83D\uDD0B", "\uD83D\uDD0C", "\uD83D\uDCBB", "\uD83D\uDDA5\uFE0F", "\uD83D\uDDA8\uFE0F", "\u2328\uFE0F", "\uD83D\uDDB1\uFE0F", "\uD83D\uDDB2\uFE0F", "\uD83D\uDCBD", "\uD83D\uDCBE", "\uD83D\uDCBF", "\uD83D\uDCC0", "\uD83E\uDDEE", "\uD83C\uDFA5", "\uD83C\uDF9E\uFE0F", "\uD83D\uDCFD\uFE0F", "\uD83C\uDFAC", "\uD83D\uDCFA", "\uD83D\uDCF7", "\uD83D\uDCF8", "\uD83D\uDCF9", "\uD83D\uDCFC", "\uD83D\uDD0D", "\uD83D\uDD0E", "\uD83D\uDD6F\uFE0F", "\uD83D\uDCA1", "\uD83D\uDD26", "\uD83C\uDFEE", "\uD83E\uDE94", "\uD83D\uDCD4", "\uD83D\uDCD5", "\uD83D\uDCD6", "\uD83D\uDCD7", "\uD83D\uDCD8", "\uD83D\uDCD9", "\uD83D\uDCDA", "\uD83D\uDCD3", "\uD83D\uDCD2", "\uD83D\uDCC3", "\uD83D\uDCDC", "\uD83D\uDCC4", "\uD83D\uDCF0", "\uD83D\uDDDE\uFE0F", "\uD83D\uDCD1", "\uD83D\uDD16", "\uD83C\uDFF7\uFE0F", "\uD83D\uDCB0", "\uD83E\uDE99", "\uD83D\uDCB4", "\uD83D\uDCB5", "\uD83D\uDCB6", "\uD83D\uDCB7", "\uD83D\uDCB8", "\uD83D\uDCB3", "\uD83E\uDDFE", "\uD83D\uDCB9", "\u2709\uFE0F", "\uD83D\uDCE7", "\uD83D\uDCE8", "\uD83D\uDCE9", "\uD83D\uDCE4", "\uD83D\uDCE5", "\uD83D\uDCE6", "\uD83D\uDCEB", "\uD83D\uDCEA", "\uD83D\uDCEC", "\uD83D\uDCED", "\uD83D\uDCEE", "\uD83D\uDDF3\uFE0F", "\u270F\uFE0F", "\u2712\uFE0F", "\uD83D\uDD8B\uFE0F", "\uD83D\uDD8A\uFE0F", "\uD83D\uDD8C\uFE0F", "\uD83D\uDD8D\uFE0F", "\uD83D\uDCDD", "\uD83D\uDCBC", "\uD83D\uDCC1", "\uD83D\uDCC2", "\uD83D\uDDC2\uFE0F", "\uD83D\uDCC5", "\uD83D\uDCC6", "\uD83D\uDDD2\uFE0F", "\uD83D\uDDD3\uFE0F", "\uD83D\uDCC7", "\uD83D\uDCC8", "\uD83D\uDCC9", "\uD83D\uDCCA", "\uD83D\uDCCB", "\uD83D\uDCCC", "\uD83D\uDCCD", "\uD83D\uDCCE", "\uD83D\uDD87\uFE0F", "\uD83D\uDCCF", "\uD83D\uDCD0", "\u2702\uFE0F", "\uD83D\uDDC3\uFE0F", "\uD83D\uDDC4\uFE0F", "\uD83D\uDDD1\uFE0F", "\uD83D\uDD12", "\uD83D\uDD13", "\uD83D\uDD0F", "\uD83D\uDD10", "\uD83D\uDD11", "\uD83D\uDDDD\uFE0F", "\uD83D\uDD28", "\uD83E\uDE93", "\u26CF\uFE0F", "\u2692\uFE0F", "\uD83D\uDEE0\uFE0F", "\uD83D\uDDE1\uFE0F", "\u2694\uFE0F", "\uD83D\uDD2B", "\uD83E\uDE83", "\uD83C\uDFF9", "\uD83D\uDEE1\uFE0F", "\uD83E\uDE9A", "\uD83D\uDD27", "\uD83E\uDE9B", "\uD83D\uDD29", "\u2699\uFE0F", "\uD83D\uDDDC\uFE0F", "\u2696\uFE0F", "\uD83E\uDDAF", "\uD83D\uDD17", "\u26D3\uFE0F", "\uD83E\uDE9D", "\uD83E\uDDF0", "\uD83E\uDDF2", "\uD83E\uDE9C", "\u2697\uFE0F", "\uD83E\uDDEA", "\uD83E\uDDEB", "\uD83E\uDDEC", "\uD83D\uDD2C", "\uD83D\uDD2D", "\uD83D\uDCE1", "\uD83D\uDC89", "\uD83E\uDE78", "\uD83D\uDC8A", "\uD83E\uDE79", "\uD83E\uDE7A", "\uD83D\uDEAA", "\uD83D\uDED7", "\uD83E\uDE9E", "\uD83E\uDE9F", "\uD83D\uDECF\uFE0F", "\uD83D\uDECB\uFE0F", "\uD83E\uDE91", "\uD83D\uDEBD", "\uD83E\uDEA0", "\uD83D\uDEBF", "\uD83D\uDEC1", "\uD83E\uDEA4", "\uD83E\uDE92", "\uD83E\uDDF4", "\uD83E\uDDF7", "\uD83E\uDDF9", "\uD83E\uDDFA", "\uD83E\uDDFB", "\uD83E\uDEA3", "\uD83E\uDDFC", "\uD83E\uDEA5", "\uD83E\uDDFD", "\uD83E\uDDEF", "\uD83D\uDED2", "\uD83D\uDEAC", "\u26B0\uFE0F", "\uD83E\uDEA6", "\u26B1\uFE0F", "\uD83D\uDDFF", "\uD83E\uDEA7"], symbol: ["\uD83C\uDFE7", "\uD83D\uDEAE", "\uD83D\uDEB0", "\u267F", "\uD83D\uDEB9", "\uD83D\uDEBA", "\uD83D\uDEBB", "\uD83D\uDEBC", "\uD83D\uDEBE", "\uD83D\uDEC2", "\uD83D\uDEC3", "\uD83D\uDEC4", "\uD83D\uDEC5", "\u26A0\uFE0F", "\uD83D\uDEB8", "\u26D4", "\uD83D\uDEAB", "\uD83D\uDEB3", "\uD83D\uDEAD", "\uD83D\uDEAF", "\uD83D\uDEB1", "\uD83D\uDEB7", "\uD83D\uDCF5", "\uD83D\uDD1E", "\u2622\uFE0F", "\u2623\uFE0F", "\u2B06\uFE0F", "\u2197\uFE0F", "\u27A1\uFE0F", "\u2198\uFE0F", "\u2B07\uFE0F", "\u2199\uFE0F", "\u2B05\uFE0F", "\u2196\uFE0F", "\u2195\uFE0F", "\u2194\uFE0F", "\u21A9\uFE0F", "\u21AA\uFE0F", "\u2934\uFE0F", "\u2935\uFE0F", "\uD83D\uDD03", "\uD83D\uDD04", "\uD83D\uDD19", "\uD83D\uDD1A", "\uD83D\uDD1B", "\uD83D\uDD1C", "\uD83D\uDD1D", "\uD83D\uDED0", "\u269B\uFE0F", "\uD83D\uDD49\uFE0F", "\u2721\uFE0F", "\u2638\uFE0F", "\u262F\uFE0F", "\u271D\uFE0F", "\u2626\uFE0F", "\u262A\uFE0F", "\u262E\uFE0F", "\uD83D\uDD4E", "\uD83D\uDD2F", "\u2648", "\u2649", "\u264A", "\u264B", "\u264C", "\u264D", "\u264E", "\u264F", "\u2650", "\u2651", "\u2652", "\u2653", "\u26CE", "\uD83D\uDD00", "\uD83D\uDD01", "\uD83D\uDD02", "\u25B6\uFE0F", "\u23E9", "\u23ED\uFE0F", "\u23EF\uFE0F", "\u25C0\uFE0F", "\u23EA", "\u23EE\uFE0F", "\uD83D\uDD3C", "\u23EB", "\uD83D\uDD3D", "\u23EC", "\u23F8\uFE0F", "\u23F9\uFE0F", "\u23FA\uFE0F", "\u23CF\uFE0F", "\uD83C\uDFA6", "\uD83D\uDD05", "\uD83D\uDD06", "\uD83D\uDCF6", "\uD83D\uDCF3", "\uD83D\uDCF4", "\u2640\uFE0F", "\u2642\uFE0F", "\u26A7\uFE0F", "\u2716\uFE0F", "\u2795", "\u2796", "\u2797", "\u267E\uFE0F", "\u203C\uFE0F", "\u2049\uFE0F", "\u2753", "\u2754", "\u2755", "\u2757", "\u3030\uFE0F", "\uD83D\uDCB1", "\uD83D\uDCB2", "\u2695\uFE0F", "\u267B\uFE0F", "\u269C\uFE0F", "\uD83D\uDD31", "\uD83D\uDCDB", "\uD83D\uDD30", "\u2B55", "\u2705", "\u2611\uFE0F", "\u2714\uFE0F", "\u274C", "\u274E", "\u27B0", "\u27BF", "\u303D\uFE0F", "\u2733\uFE0F", "\u2734\uFE0F", "\u2747\uFE0F", "\xA9\uFE0F", "\xAE\uFE0F", "\u2122\uFE0F", "#\uFE0F\u20E3", "*\uFE0F\u20E3", "0\uFE0F\u20E3", "1\uFE0F\u20E3", "2\uFE0F\u20E3", "3\uFE0F\u20E3", "4\uFE0F\u20E3", "5\uFE0F\u20E3", "6\uFE0F\u20E3", "7\uFE0F\u20E3", "8\uFE0F\u20E3", "9\uFE0F\u20E3", "\uD83D\uDD1F", "\uD83D\uDD20", "\uD83D\uDD21", "\uD83D\uDD22", "\uD83D\uDD23", "\uD83D\uDD24", "\uD83C\uDD70\uFE0F", "\uD83C\uDD8E", "\uD83C\uDD71\uFE0F", "\uD83C\uDD91", "\uD83C\uDD92", "\uD83C\uDD93", "\u2139\uFE0F", "\uD83C\uDD94", "\u24C2\uFE0F", "\uD83C\uDD95", "\uD83C\uDD96", "\uD83C\uDD7E\uFE0F", "\uD83C\uDD97", "\uD83C\uDD7F\uFE0F", "\uD83C\uDD98", "\uD83C\uDD99", "\uD83C\uDD9A", "\uD83C\uDE01", "\uD83C\uDE02\uFE0F", "\uD83C\uDE37\uFE0F", "\uD83C\uDE36", "\uD83C\uDE2F", "\uD83C\uDE50", "\uD83C\uDE39", "\uD83C\uDE1A", "\uD83C\uDE32", "\uD83C\uDE51", "\uD83C\uDE38", "\uD83C\uDE34", "\uD83C\uDE33", "\u3297\uFE0F", "\u3299\uFE0F", "\uD83C\uDE3A", "\uD83C\uDE35", "\uD83D\uDD34", "\uD83D\uDFE0", "\uD83D\uDFE1", "\uD83D\uDFE2", "\uD83D\uDD35", "\uD83D\uDFE3", "\uD83D\uDFE4", "\u26AB", "\u26AA", "\uD83D\uDFE5", "\uD83D\uDFE7", "\uD83D\uDFE8", "\uD83D\uDFE9", "\uD83D\uDFE6", "\uD83D\uDFEA", "\uD83D\uDFEB", "\u2B1B", "\u2B1C", "\u25FC\uFE0F", "\u25FB\uFE0F", "\u25FE", "\u25FD", "\u25AA\uFE0F", "\u25AB\uFE0F", "\uD83D\uDD36", "\uD83D\uDD37", "\uD83D\uDD38", "\uD83D\uDD39", "\uD83D\uDD3A", "\uD83D\uDD3B", "\uD83D\uDCA0", "\uD83D\uDD18", "\uD83D\uDD33", "\uD83D\uDD32"], flag: ["\uD83C\uDFC1", "\uD83D\uDEA9", "\uD83C\uDF8C", "\uD83C\uDFF4", "\uD83C\uDFF3\uFE0F", "\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08", "\uD83C\uDFF3\uFE0F\u200D\u26A7\uFE0F", "\uD83C\uDFF4\u200D\u2620\uFE0F", "\uD83C\uDDE6\uD83C\uDDE8", "\uD83C\uDDE6\uD83C\uDDE9", "\uD83C\uDDE6\uD83C\uDDEA", "\uD83C\uDDE6\uD83C\uDDEB", "\uD83C\uDDE6\uD83C\uDDEC", "\uD83C\uDDE6\uD83C\uDDEE", "\uD83C\uDDE6\uD83C\uDDF1", "\uD83C\uDDE6\uD83C\uDDF2", "\uD83C\uDDE6\uD83C\uDDF4", "\uD83C\uDDE6\uD83C\uDDF6", "\uD83C\uDDE6\uD83C\uDDF7", "\uD83C\uDDE6\uD83C\uDDF8", "\uD83C\uDDE6\uD83C\uDDF9", "\uD83C\uDDE6\uD83C\uDDFA", "\uD83C\uDDE6\uD83C\uDDFC", "\uD83C\uDDE6\uD83C\uDDFD", "\uD83C\uDDE6\uD83C\uDDFF", "\uD83C\uDDE7\uD83C\uDDE6", "\uD83C\uDDE7\uD83C\uDDE7", "\uD83C\uDDE7\uD83C\uDDE9", "\uD83C\uDDE7\uD83C\uDDEA", "\uD83C\uDDE7\uD83C\uDDEB", "\uD83C\uDDE7\uD83C\uDDEC", "\uD83C\uDDE7\uD83C\uDDED", "\uD83C\uDDE7\uD83C\uDDEE", "\uD83C\uDDE7\uD83C\uDDEF", "\uD83C\uDDE7\uD83C\uDDF1", "\uD83C\uDDE7\uD83C\uDDF2", "\uD83C\uDDE7\uD83C\uDDF3", "\uD83C\uDDE7\uD83C\uDDF4", "\uD83C\uDDE7\uD83C\uDDF6", "\uD83C\uDDE7\uD83C\uDDF7", "\uD83C\uDDE7\uD83C\uDDF8", "\uD83C\uDDE7\uD83C\uDDF9", "\uD83C\uDDE7\uD83C\uDDFB", "\uD83C\uDDE7\uD83C\uDDFC", "\uD83C\uDDE7\uD83C\uDDFE", "\uD83C\uDDE7\uD83C\uDDFF", "\uD83C\uDDE8\uD83C\uDDE6", "\uD83C\uDDE8\uD83C\uDDE8", "\uD83C\uDDE8\uD83C\uDDE9", "\uD83C\uDDE8\uD83C\uDDEB", "\uD83C\uDDE8\uD83C\uDDEC", "\uD83C\uDDE8\uD83C\uDDED", "\uD83C\uDDE8\uD83C\uDDEE", "\uD83C\uDDE8\uD83C\uDDF0", "\uD83C\uDDE8\uD83C\uDDF1", "\uD83C\uDDE8\uD83C\uDDF2", "\uD83C\uDDE8\uD83C\uDDF3", "\uD83C\uDDE8\uD83C\uDDF4", "\uD83C\uDDE8\uD83C\uDDF5", "\uD83C\uDDE8\uD83C\uDDF7", "\uD83C\uDDE8\uD83C\uDDFA", "\uD83C\uDDE8\uD83C\uDDFB", "\uD83C\uDDE8\uD83C\uDDFC", "\uD83C\uDDE8\uD83C\uDDFD", "\uD83C\uDDE8\uD83C\uDDFE", "\uD83C\uDDE8\uD83C\uDDFF", "\uD83C\uDDE9\uD83C\uDDEA", "\uD83C\uDDE9\uD83C\uDDEC", "\uD83C\uDDE9\uD83C\uDDEF", "\uD83C\uDDE9\uD83C\uDDF0", "\uD83C\uDDE9\uD83C\uDDF2", "\uD83C\uDDE9\uD83C\uDDF4", "\uD83C\uDDE9\uD83C\uDDFF", "\uD83C\uDDEA\uD83C\uDDE6", "\uD83C\uDDEA\uD83C\uDDE8", "\uD83C\uDDEA\uD83C\uDDEA", "\uD83C\uDDEA\uD83C\uDDEC", "\uD83C\uDDEA\uD83C\uDDED", "\uD83C\uDDEA\uD83C\uDDF7", "\uD83C\uDDEA\uD83C\uDDF8", "\uD83C\uDDEA\uD83C\uDDF9", "\uD83C\uDDEA\uD83C\uDDFA", "\uD83C\uDDEB\uD83C\uDDEE", "\uD83C\uDDEB\uD83C\uDDEF", "\uD83C\uDDEB\uD83C\uDDF0", "\uD83C\uDDEB\uD83C\uDDF2", "\uD83C\uDDEB\uD83C\uDDF4", "\uD83C\uDDEB\uD83C\uDDF7", "\uD83C\uDDEC\uD83C\uDDE6", "\uD83C\uDDEC\uD83C\uDDE7", "\uD83C\uDDEC\uD83C\uDDE9", "\uD83C\uDDEC\uD83C\uDDEA", "\uD83C\uDDEC\uD83C\uDDEB", "\uD83C\uDDEC\uD83C\uDDEC", "\uD83C\uDDEC\uD83C\uDDED", "\uD83C\uDDEC\uD83C\uDDEE", "\uD83C\uDDEC\uD83C\uDDF1", "\uD83C\uDDEC\uD83C\uDDF2", "\uD83C\uDDEC\uD83C\uDDF3", "\uD83C\uDDEC\uD83C\uDDF5", "\uD83C\uDDEC\uD83C\uDDF6", "\uD83C\uDDEC\uD83C\uDDF7", "\uD83C\uDDEC\uD83C\uDDF8", "\uD83C\uDDEC\uD83C\uDDF9", "\uD83C\uDDEC\uD83C\uDDFA", "\uD83C\uDDEC\uD83C\uDDFC", "\uD83C\uDDEC\uD83C\uDDFE", "\uD83C\uDDED\uD83C\uDDF0", "\uD83C\uDDED\uD83C\uDDF2", "\uD83C\uDDED\uD83C\uDDF3", "\uD83C\uDDED\uD83C\uDDF7", "\uD83C\uDDED\uD83C\uDDF9", "\uD83C\uDDED\uD83C\uDDFA", "\uD83C\uDDEE\uD83C\uDDE8", "\uD83C\uDDEE\uD83C\uDDE9", "\uD83C\uDDEE\uD83C\uDDEA", "\uD83C\uDDEE\uD83C\uDDF1", "\uD83C\uDDEE\uD83C\uDDF2", "\uD83C\uDDEE\uD83C\uDDF3", "\uD83C\uDDEE\uD83C\uDDF4", "\uD83C\uDDEE\uD83C\uDDF6", "\uD83C\uDDEE\uD83C\uDDF7", "\uD83C\uDDEE\uD83C\uDDF8", "\uD83C\uDDEE\uD83C\uDDF9", "\uD83C\uDDEF\uD83C\uDDEA", "\uD83C\uDDEF\uD83C\uDDF2", "\uD83C\uDDEF\uD83C\uDDF4", "\uD83C\uDDEF\uD83C\uDDF5", "\uD83C\uDDF0\uD83C\uDDEA", "\uD83C\uDDF0\uD83C\uDDEC", "\uD83C\uDDF0\uD83C\uDDED", "\uD83C\uDDF0\uD83C\uDDEE", "\uD83C\uDDF0\uD83C\uDDF2", "\uD83C\uDDF0\uD83C\uDDF3", "\uD83C\uDDF0\uD83C\uDDF5", "\uD83C\uDDF0\uD83C\uDDF7", "\uD83C\uDDF0\uD83C\uDDFC", "\uD83C\uDDF0\uD83C\uDDFE", "\uD83C\uDDF0\uD83C\uDDFF", "\uD83C\uDDF1\uD83C\uDDE6", "\uD83C\uDDF1\uD83C\uDDE7", "\uD83C\uDDF1\uD83C\uDDE8", "\uD83C\uDDF1\uD83C\uDDEE", "\uD83C\uDDF1\uD83C\uDDF0", "\uD83C\uDDF1\uD83C\uDDF7", "\uD83C\uDDF1\uD83C\uDDF8", "\uD83C\uDDF1\uD83C\uDDF9", "\uD83C\uDDF1\uD83C\uDDFA", "\uD83C\uDDF1\uD83C\uDDFB", "\uD83C\uDDF1\uD83C\uDDFE", "\uD83C\uDDF2\uD83C\uDDE6", "\uD83C\uDDF2\uD83C\uDDE8", "\uD83C\uDDF2\uD83C\uDDE9", "\uD83C\uDDF2\uD83C\uDDEA", "\uD83C\uDDF2\uD83C\uDDEB", "\uD83C\uDDF2\uD83C\uDDEC", "\uD83C\uDDF2\uD83C\uDDED", "\uD83C\uDDF2\uD83C\uDDF0", "\uD83C\uDDF2\uD83C\uDDF1", "\uD83C\uDDF2\uD83C\uDDF2", "\uD83C\uDDF2\uD83C\uDDF3", "\uD83C\uDDF2\uD83C\uDDF4", "\uD83C\uDDF2\uD83C\uDDF5", "\uD83C\uDDF2\uD83C\uDDF6", "\uD83C\uDDF2\uD83C\uDDF7", "\uD83C\uDDF2\uD83C\uDDF8", "\uD83C\uDDF2\uD83C\uDDF9", "\uD83C\uDDF2\uD83C\uDDFA", "\uD83C\uDDF2\uD83C\uDDFB", "\uD83C\uDDF2\uD83C\uDDFC", "\uD83C\uDDF2\uD83C\uDDFD", "\uD83C\uDDF2\uD83C\uDDFE", "\uD83C\uDDF2\uD83C\uDDFF", "\uD83C\uDDF3\uD83C\uDDE6", "\uD83C\uDDF3\uD83C\uDDE8", "\uD83C\uDDF3\uD83C\uDDEA", "\uD83C\uDDF3\uD83C\uDDEB", "\uD83C\uDDF3\uD83C\uDDEC", "\uD83C\uDDF3\uD83C\uDDEE", "\uD83C\uDDF3\uD83C\uDDF1", "\uD83C\uDDF3\uD83C\uDDF4", "\uD83C\uDDF3\uD83C\uDDF5", "\uD83C\uDDF3\uD83C\uDDF7", "\uD83C\uDDF3\uD83C\uDDFA", "\uD83C\uDDF3\uD83C\uDDFF", "\uD83C\uDDF4\uD83C\uDDF2", "\uD83C\uDDF5\uD83C\uDDE6", "\uD83C\uDDF5\uD83C\uDDEA", "\uD83C\uDDF5\uD83C\uDDEB", "\uD83C\uDDF5\uD83C\uDDEC", "\uD83C\uDDF5\uD83C\uDDED", "\uD83C\uDDF5\uD83C\uDDF0", "\uD83C\uDDF5\uD83C\uDDF1", "\uD83C\uDDF5\uD83C\uDDF2", "\uD83C\uDDF5\uD83C\uDDF3", "\uD83C\uDDF5\uD83C\uDDF7", "\uD83C\uDDF5\uD83C\uDDF8", "\uD83C\uDDF5\uD83C\uDDF9", "\uD83C\uDDF5\uD83C\uDDFC", "\uD83C\uDDF5\uD83C\uDDFE", "\uD83C\uDDF6\uD83C\uDDE6", "\uD83C\uDDF7\uD83C\uDDEA", "\uD83C\uDDF7\uD83C\uDDF4", "\uD83C\uDDF7\uD83C\uDDF8", "\uD83C\uDDF7\uD83C\uDDFA", "\uD83C\uDDF7\uD83C\uDDFC", "\uD83C\uDDF8\uD83C\uDDE6", "\uD83C\uDDF8\uD83C\uDDE7", "\uD83C\uDDF8\uD83C\uDDE8", "\uD83C\uDDF8\uD83C\uDDE9", "\uD83C\uDDF8\uD83C\uDDEA", "\uD83C\uDDF8\uD83C\uDDEC", "\uD83C\uDDF8\uD83C\uDDED", "\uD83C\uDDF8\uD83C\uDDEE", "\uD83C\uDDF8\uD83C\uDDEF", "\uD83C\uDDF8\uD83C\uDDF0", "\uD83C\uDDF8\uD83C\uDDF1", "\uD83C\uDDF8\uD83C\uDDF2", "\uD83C\uDDF8\uD83C\uDDF3", "\uD83C\uDDF8\uD83C\uDDF4", "\uD83C\uDDF8\uD83C\uDDF7", "\uD83C\uDDF8\uD83C\uDDF8", "\uD83C\uDDF8\uD83C\uDDF9", "\uD83C\uDDF8\uD83C\uDDFB", "\uD83C\uDDF8\uD83C\uDDFD", "\uD83C\uDDF8\uD83C\uDDFE", "\uD83C\uDDF8\uD83C\uDDFF", "\uD83C\uDDF9\uD83C\uDDE6", "\uD83C\uDDF9\uD83C\uDDE8", "\uD83C\uDDF9\uD83C\uDDE9", "\uD83C\uDDF9\uD83C\uDDEB", "\uD83C\uDDF9\uD83C\uDDEC", "\uD83C\uDDF9\uD83C\uDDED", "\uD83C\uDDF9\uD83C\uDDEF", "\uD83C\uDDF9\uD83C\uDDF0", "\uD83C\uDDF9\uD83C\uDDF1", "\uD83C\uDDF9\uD83C\uDDF2", "\uD83C\uDDF9\uD83C\uDDF3", "\uD83C\uDDF9\uD83C\uDDF4", "\uD83C\uDDF9\uD83C\uDDF7", "\uD83C\uDDF9\uD83C\uDDF9", "\uD83C\uDDF9\uD83C\uDDFB", "\uD83C\uDDF9\uD83C\uDDFC", "\uD83C\uDDF9\uD83C\uDDFF", "\uD83C\uDDFA\uD83C\uDDE6", "\uD83C\uDDFA\uD83C\uDDEC", "\uD83C\uDDFA\uD83C\uDDF2", "\uD83C\uDDFA\uD83C\uDDF3", "\uD83C\uDDFA\uD83C\uDDF8", "\uD83C\uDDFA\uD83C\uDDFE", "\uD83C\uDDFA\uD83C\uDDFF", "\uD83C\uDDFB\uD83C\uDDE6", "\uD83C\uDDFB\uD83C\uDDE8", "\uD83C\uDDFB\uD83C\uDDEA", "\uD83C\uDDFB\uD83C\uDDEC", "\uD83C\uDDFB\uD83C\uDDEE", "\uD83C\uDDFB\uD83C\uDDF3", "\uD83C\uDDFB\uD83C\uDDFA", "\uD83C\uDDFC\uD83C\uDDEB", "\uD83C\uDDFC\uD83C\uDDF8", "\uD83C\uDDFD\uD83C\uDDF0", "\uD83C\uDDFE\uD83C\uDDEA", "\uD83C\uDDFE\uD83C\uDDF9", "\uD83C\uDDFF\uD83C\uDDE6", "\uD83C\uDDFF\uD83C\uDDF2", "\uD83C\uDDFF\uD83C\uDDFC"] };
var cr2 = { informational: [100, 101, 102, 103], success: [200, 201, 202, 203, 204, 205, 206, 207, 208, 226], redirection: [300, 301, 302, 303, 304, 305, 306, 307, 308], clientError: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451], serverError: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511] };
var lr2 = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "PS256", "PS384", "PS512", "none"];
var mr2 = ['Mozilla/5.0 (compatible; MSIE {{number.int({"min":6,"max":10})}}.0; Windows NT {{helpers.arrayElement(["5.1","5.2","6.0","6.1","6.2","6.3","10.0"])}}; Trident/{{number.int({"min":4,"max":7})}}.0)', 'Mozilla/5.0 (Windows NT {{helpers.arrayElement(["5.1","5.2","6.0","6.1","6.2","6.3","10.0"])}}; Win64; x64) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} Edg/{{number.int({"min":110,"max":131})}}.{{system.semver}}', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Version/16.1 Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:{{number.int({"min":75, "max":133})}}.0) Gecko/20100101 Firefox/{{number.int({"min":75, "max":133})}}.0', 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_15_7) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (X11; Linux x86_64; rv:{{number.int({"min":75,"max":133})}}.0) Gecko/20100101 Firefox/{{number.int({"min":75,"max":133})}}.0', "FakerBot/{{system.semver}}", "Googlebot/2.1 (+http://www.google.com/bot.html)", 'Mozilla/5.0 (iPhone; CPU iPhone OS {{number.int({"min":10,"max":18})}}_{{number.int({"min":0,"max":4})}} like Mac OS X) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Version/{{number.int({"min":10,"max":18})}}_{{number.int({"min":0,"max":4})}} Mobile/15E148 Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Linux; Android {{number.int({"min":5,"max":13})}}; {{helpers.arrayElement(["SM-G998U","SM-G998B","SM-G998N","SM-G998P","SM-T800"])}}) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Mobile Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}'];
var tt = { emoji: sr2, http_status_code: cr2, jwt_algorithm: lr2, user_agent_pattern: mr2 };
var ur2 = tt;
var pr2 = [{ alpha2: "AD", alpha3: "AND", numeric: "020" }, { alpha2: "AE", alpha3: "ARE", numeric: "784" }, { alpha2: "AF", alpha3: "AFG", numeric: "004" }, { alpha2: "AG", alpha3: "ATG", numeric: "028" }, { alpha2: "AI", alpha3: "AIA", numeric: "660" }, { alpha2: "AL", alpha3: "ALB", numeric: "008" }, { alpha2: "AM", alpha3: "ARM", numeric: "051" }, { alpha2: "AO", alpha3: "AGO", numeric: "024" }, { alpha2: "AQ", alpha3: "ATA", numeric: "010" }, { alpha2: "AR", alpha3: "ARG", numeric: "032" }, { alpha2: "AS", alpha3: "ASM", numeric: "016" }, { alpha2: "AT", alpha3: "AUT", numeric: "040" }, { alpha2: "AU", alpha3: "AUS", numeric: "036" }, { alpha2: "AW", alpha3: "ABW", numeric: "533" }, { alpha2: "AX", alpha3: "ALA", numeric: "248" }, { alpha2: "AZ", alpha3: "AZE", numeric: "031" }, { alpha2: "BA", alpha3: "BIH", numeric: "070" }, { alpha2: "BB", alpha3: "BRB", numeric: "052" }, { alpha2: "BD", alpha3: "BGD", numeric: "050" }, { alpha2: "BE", alpha3: "BEL", numeric: "056" }, { alpha2: "BF", alpha3: "BFA", numeric: "854" }, { alpha2: "BG", alpha3: "BGR", numeric: "100" }, { alpha2: "BH", alpha3: "BHR", numeric: "048" }, { alpha2: "BI", alpha3: "BDI", numeric: "108" }, { alpha2: "BJ", alpha3: "BEN", numeric: "204" }, { alpha2: "BL", alpha3: "BLM", numeric: "652" }, { alpha2: "BM", alpha3: "BMU", numeric: "060" }, { alpha2: "BN", alpha3: "BRN", numeric: "096" }, { alpha2: "BO", alpha3: "BOL", numeric: "068" }, { alpha2: "BQ", alpha3: "BES", numeric: "535" }, { alpha2: "BR", alpha3: "BRA", numeric: "076" }, { alpha2: "BS", alpha3: "BHS", numeric: "044" }, { alpha2: "BT", alpha3: "BTN", numeric: "064" }, { alpha2: "BV", alpha3: "BVT", numeric: "074" }, { alpha2: "BW", alpha3: "BWA", numeric: "072" }, { alpha2: "BY", alpha3: "BLR", numeric: "112" }, { alpha2: "BZ", alpha3: "BLZ", numeric: "084" }, { alpha2: "CA", alpha3: "CAN", numeric: "124" }, { alpha2: "CC", alpha3: "CCK", numeric: "166" }, { alpha2: "CD", alpha3: "COD", numeric: "180" }, { alpha2: "CF", alpha3: "CAF", numeric: "140" }, { alpha2: "CG", alpha3: "COG", numeric: "178" }, { alpha2: "CH", alpha3: "CHE", numeric: "756" }, { alpha2: "CI", alpha3: "CIV", numeric: "384" }, { alpha2: "CK", alpha3: "COK", numeric: "184" }, { alpha2: "CL", alpha3: "CHL", numeric: "152" }, { alpha2: "CM", alpha3: "CMR", numeric: "120" }, { alpha2: "CN", alpha3: "CHN", numeric: "156" }, { alpha2: "CO", alpha3: "COL", numeric: "170" }, { alpha2: "CR", alpha3: "CRI", numeric: "188" }, { alpha2: "CU", alpha3: "CUB", numeric: "192" }, { alpha2: "CV", alpha3: "CPV", numeric: "132" }, { alpha2: "CW", alpha3: "CUW", numeric: "531" }, { alpha2: "CX", alpha3: "CXR", numeric: "162" }, { alpha2: "CY", alpha3: "CYP", numeric: "196" }, { alpha2: "CZ", alpha3: "CZE", numeric: "203" }, { alpha2: "DE", alpha3: "DEU", numeric: "276" }, { alpha2: "DJ", alpha3: "DJI", numeric: "262" }, { alpha2: "DK", alpha3: "DNK", numeric: "208" }, { alpha2: "DM", alpha3: "DMA", numeric: "212" }, { alpha2: "DO", alpha3: "DOM", numeric: "214" }, { alpha2: "DZ", alpha3: "DZA", numeric: "012" }, { alpha2: "EC", alpha3: "ECU", numeric: "218" }, { alpha2: "EE", alpha3: "EST", numeric: "233" }, { alpha2: "EG", alpha3: "EGY", numeric: "818" }, { alpha2: "EH", alpha3: "ESH", numeric: "732" }, { alpha2: "ER", alpha3: "ERI", numeric: "232" }, { alpha2: "ES", alpha3: "ESP", numeric: "724" }, { alpha2: "ET", alpha3: "ETH", numeric: "231" }, { alpha2: "FI", alpha3: "FIN", numeric: "246" }, { alpha2: "FJ", alpha3: "FJI", numeric: "242" }, { alpha2: "FK", alpha3: "FLK", numeric: "238" }, { alpha2: "FM", alpha3: "FSM", numeric: "583" }, { alpha2: "FO", alpha3: "FRO", numeric: "234" }, { alpha2: "FR", alpha3: "FRA", numeric: "250" }, { alpha2: "GA", alpha3: "GAB", numeric: "266" }, { alpha2: "GB", alpha3: "GBR", numeric: "826" }, { alpha2: "GD", alpha3: "GRD", numeric: "308" }, { alpha2: "GE", alpha3: "GEO", numeric: "268" }, { alpha2: "GF", alpha3: "GUF", numeric: "254" }, { alpha2: "GG", alpha3: "GGY", numeric: "831" }, { alpha2: "GH", alpha3: "GHA", numeric: "288" }, { alpha2: "GI", alpha3: "GIB", numeric: "292" }, { alpha2: "GL", alpha3: "GRL", numeric: "304" }, { alpha2: "GM", alpha3: "GMB", numeric: "270" }, { alpha2: "GN", alpha3: "GIN", numeric: "324" }, { alpha2: "GP", alpha3: "GLP", numeric: "312" }, { alpha2: "GQ", alpha3: "GNQ", numeric: "226" }, { alpha2: "GR", alpha3: "GRC", numeric: "300" }, { alpha2: "GS", alpha3: "SGS", numeric: "239" }, { alpha2: "GT", alpha3: "GTM", numeric: "320" }, { alpha2: "GU", alpha3: "GUM", numeric: "316" }, { alpha2: "GW", alpha3: "GNB", numeric: "624" }, { alpha2: "GY", alpha3: "GUY", numeric: "328" }, { alpha2: "HK", alpha3: "HKG", numeric: "344" }, { alpha2: "HM", alpha3: "HMD", numeric: "334" }, { alpha2: "HN", alpha3: "HND", numeric: "340" }, { alpha2: "HR", alpha3: "HRV", numeric: "191" }, { alpha2: "HT", alpha3: "HTI", numeric: "332" }, { alpha2: "HU", alpha3: "HUN", numeric: "348" }, { alpha2: "ID", alpha3: "IDN", numeric: "360" }, { alpha2: "IE", alpha3: "IRL", numeric: "372" }, { alpha2: "IL", alpha3: "ISR", numeric: "376" }, { alpha2: "IM", alpha3: "IMN", numeric: "833" }, { alpha2: "IN", alpha3: "IND", numeric: "356" }, { alpha2: "IO", alpha3: "IOT", numeric: "086" }, { alpha2: "IQ", alpha3: "IRQ", numeric: "368" }, { alpha2: "IR", alpha3: "IRN", numeric: "364" }, { alpha2: "IS", alpha3: "ISL", numeric: "352" }, { alpha2: "IT", alpha3: "ITA", numeric: "380" }, { alpha2: "JE", alpha3: "JEY", numeric: "832" }, { alpha2: "JM", alpha3: "JAM", numeric: "388" }, { alpha2: "JO", alpha3: "JOR", numeric: "400" }, { alpha2: "JP", alpha3: "JPN", numeric: "392" }, { alpha2: "KE", alpha3: "KEN", numeric: "404" }, { alpha2: "KG", alpha3: "KGZ", numeric: "417" }, { alpha2: "KH", alpha3: "KHM", numeric: "116" }, { alpha2: "KI", alpha3: "KIR", numeric: "296" }, { alpha2: "KM", alpha3: "COM", numeric: "174" }, { alpha2: "KN", alpha3: "KNA", numeric: "659" }, { alpha2: "KP", alpha3: "PRK", numeric: "408" }, { alpha2: "KR", alpha3: "KOR", numeric: "410" }, { alpha2: "KW", alpha3: "KWT", numeric: "414" }, { alpha2: "KY", alpha3: "CYM", numeric: "136" }, { alpha2: "KZ", alpha3: "KAZ", numeric: "398" }, { alpha2: "LA", alpha3: "LAO", numeric: "418" }, { alpha2: "LB", alpha3: "LBN", numeric: "422" }, { alpha2: "LC", alpha3: "LCA", numeric: "662" }, { alpha2: "LI", alpha3: "LIE", numeric: "438" }, { alpha2: "LK", alpha3: "LKA", numeric: "144" }, { alpha2: "LR", alpha3: "LBR", numeric: "430" }, { alpha2: "LS", alpha3: "LSO", numeric: "426" }, { alpha2: "LT", alpha3: "LTU", numeric: "440" }, { alpha2: "LU", alpha3: "LUX", numeric: "442" }, { alpha2: "LV", alpha3: "LVA", numeric: "428" }, { alpha2: "LY", alpha3: "LBY", numeric: "434" }, { alpha2: "MA", alpha3: "MAR", numeric: "504" }, { alpha2: "MC", alpha3: "MCO", numeric: "492" }, { alpha2: "MD", alpha3: "MDA", numeric: "498" }, { alpha2: "ME", alpha3: "MNE", numeric: "499" }, { alpha2: "MF", alpha3: "MAF", numeric: "663" }, { alpha2: "MG", alpha3: "MDG", numeric: "450" }, { alpha2: "MH", alpha3: "MHL", numeric: "584" }, { alpha2: "MK", alpha3: "MKD", numeric: "807" }, { alpha2: "ML", alpha3: "MLI", numeric: "466" }, { alpha2: "MM", alpha3: "MMR", numeric: "104" }, { alpha2: "MN", alpha3: "MNG", numeric: "496" }, { alpha2: "MO", alpha3: "MAC", numeric: "446" }, { alpha2: "MP", alpha3: "MNP", numeric: "580" }, { alpha2: "MQ", alpha3: "MTQ", numeric: "474" }, { alpha2: "MR", alpha3: "MRT", numeric: "478" }, { alpha2: "MS", alpha3: "MSR", numeric: "500" }, { alpha2: "MT", alpha3: "MLT", numeric: "470" }, { alpha2: "MU", alpha3: "MUS", numeric: "480" }, { alpha2: "MV", alpha3: "MDV", numeric: "462" }, { alpha2: "MW", alpha3: "MWI", numeric: "454" }, { alpha2: "MX", alpha3: "MEX", numeric: "484" }, { alpha2: "MY", alpha3: "MYS", numeric: "458" }, { alpha2: "MZ", alpha3: "MOZ", numeric: "508" }, { alpha2: "NA", alpha3: "NAM", numeric: "516" }, { alpha2: "NC", alpha3: "NCL", numeric: "540" }, { alpha2: "NE", alpha3: "NER", numeric: "562" }, { alpha2: "NF", alpha3: "NFK", numeric: "574" }, { alpha2: "NG", alpha3: "NGA", numeric: "566" }, { alpha2: "NI", alpha3: "NIC", numeric: "558" }, { alpha2: "NL", alpha3: "NLD", numeric: "528" }, { alpha2: "NO", alpha3: "NOR", numeric: "578" }, { alpha2: "NP", alpha3: "NPL", numeric: "524" }, { alpha2: "NR", alpha3: "NRU", numeric: "520" }, { alpha2: "NU", alpha3: "NIU", numeric: "570" }, { alpha2: "NZ", alpha3: "NZL", numeric: "554" }, { alpha2: "OM", alpha3: "OMN", numeric: "512" }, { alpha2: "PA", alpha3: "PAN", numeric: "591" }, { alpha2: "PE", alpha3: "PER", numeric: "604" }, { alpha2: "PF", alpha3: "PYF", numeric: "258" }, { alpha2: "PG", alpha3: "PNG", numeric: "598" }, { alpha2: "PH", alpha3: "PHL", numeric: "608" }, { alpha2: "PK", alpha3: "PAK", numeric: "586" }, { alpha2: "PL", alpha3: "POL", numeric: "616" }, { alpha2: "PM", alpha3: "SPM", numeric: "666" }, { alpha2: "PN", alpha3: "PCN", numeric: "612" }, { alpha2: "PR", alpha3: "PRI", numeric: "630" }, { alpha2: "PS", alpha3: "PSE", numeric: "275" }, { alpha2: "PT", alpha3: "PRT", numeric: "620" }, { alpha2: "PW", alpha3: "PLW", numeric: "585" }, { alpha2: "PY", alpha3: "PRY", numeric: "600" }, { alpha2: "QA", alpha3: "QAT", numeric: "634" }, { alpha2: "RE", alpha3: "REU", numeric: "638" }, { alpha2: "RO", alpha3: "ROU", numeric: "642" }, { alpha2: "RS", alpha3: "SRB", numeric: "688" }, { alpha2: "RU", alpha3: "RUS", numeric: "643" }, { alpha2: "RW", alpha3: "RWA", numeric: "646" }, { alpha2: "SA", alpha3: "SAU", numeric: "682" }, { alpha2: "SB", alpha3: "SLB", numeric: "090" }, { alpha2: "SC", alpha3: "SYC", numeric: "690" }, { alpha2: "SD", alpha3: "SDN", numeric: "729" }, { alpha2: "SE", alpha3: "SWE", numeric: "752" }, { alpha2: "SG", alpha3: "SGP", numeric: "702" }, { alpha2: "SH", alpha3: "SHN", numeric: "654" }, { alpha2: "SI", alpha3: "SVN", numeric: "705" }, { alpha2: "SJ", alpha3: "SJM", numeric: "744" }, { alpha2: "SK", alpha3: "SVK", numeric: "703" }, { alpha2: "SL", alpha3: "SLE", numeric: "694" }, { alpha2: "SM", alpha3: "SMR", numeric: "674" }, { alpha2: "SN", alpha3: "SEN", numeric: "686" }, { alpha2: "SO", alpha3: "SOM", numeric: "706" }, { alpha2: "SR", alpha3: "SUR", numeric: "740" }, { alpha2: "SS", alpha3: "SSD", numeric: "728" }, { alpha2: "ST", alpha3: "STP", numeric: "678" }, { alpha2: "SV", alpha3: "SLV", numeric: "222" }, { alpha2: "SX", alpha3: "SXM", numeric: "534" }, { alpha2: "SY", alpha3: "SYR", numeric: "760" }, { alpha2: "SZ", alpha3: "SWZ", numeric: "748" }, { alpha2: "TC", alpha3: "TCA", numeric: "796" }, { alpha2: "TD", alpha3: "TCD", numeric: "148" }, { alpha2: "TF", alpha3: "ATF", numeric: "260" }, { alpha2: "TG", alpha3: "TGO", numeric: "768" }, { alpha2: "TH", alpha3: "THA", numeric: "764" }, { alpha2: "TJ", alpha3: "TJK", numeric: "762" }, { alpha2: "TK", alpha3: "TKL", numeric: "772" }, { alpha2: "TL", alpha3: "TLS", numeric: "626" }, { alpha2: "TM", alpha3: "TKM", numeric: "795" }, { alpha2: "TN", alpha3: "TUN", numeric: "788" }, { alpha2: "TO", alpha3: "TON", numeric: "776" }, { alpha2: "TR", alpha3: "TUR", numeric: "792" }, { alpha2: "TT", alpha3: "TTO", numeric: "780" }, { alpha2: "TV", alpha3: "TUV", numeric: "798" }, { alpha2: "TW", alpha3: "TWN", numeric: "158" }, { alpha2: "TZ", alpha3: "TZA", numeric: "834" }, { alpha2: "UA", alpha3: "UKR", numeric: "804" }, { alpha2: "UG", alpha3: "UGA", numeric: "800" }, { alpha2: "UM", alpha3: "UMI", numeric: "581" }, { alpha2: "US", alpha3: "USA", numeric: "840" }, { alpha2: "UY", alpha3: "URY", numeric: "858" }, { alpha2: "UZ", alpha3: "UZB", numeric: "860" }, { alpha2: "VA", alpha3: "VAT", numeric: "336" }, { alpha2: "VC", alpha3: "VCT", numeric: "670" }, { alpha2: "VE", alpha3: "VEN", numeric: "862" }, { alpha2: "VG", alpha3: "VGB", numeric: "092" }, { alpha2: "VI", alpha3: "VIR", numeric: "850" }, { alpha2: "VN", alpha3: "VNM", numeric: "704" }, { alpha2: "VU", alpha3: "VUT", numeric: "548" }, { alpha2: "WF", alpha3: "WLF", numeric: "876" }, { alpha2: "WS", alpha3: "WSM", numeric: "882" }, { alpha2: "YE", alpha3: "YEM", numeric: "887" }, { alpha2: "YT", alpha3: "MYT", numeric: "175" }, { alpha2: "ZA", alpha3: "ZAF", numeric: "710" }, { alpha2: "ZM", alpha3: "ZMB", numeric: "894" }, { alpha2: "ZW", alpha3: "ZWE", numeric: "716" }];
var at = { country_code: pr2, time_zone: $2 };
var hr2 = at;
var nt = { title: "Base", code: "base" };
var fr2 = nt;
var br2 = ["/Applications", "/bin", "/boot", "/boot/defaults", "/dev", "/etc", "/etc/defaults", "/etc/mail", "/etc/namedb", "/etc/periodic", "/etc/ppp", "/home", "/home/user", "/home/user/dir", "/lib", "/Library", "/lost+found", "/media", "/mnt", "/net", "/Network", "/opt", "/opt/bin", "/opt/include", "/opt/lib", "/opt/sbin", "/opt/share", "/private", "/private/tmp", "/private/var", "/proc", "/rescue", "/root", "/sbin", "/selinux", "/srv", "/sys", "/System", "/tmp", "/Users", "/usr", "/usr/X11R6", "/usr/bin", "/usr/include", "/usr/lib", "/usr/libdata", "/usr/libexec", "/usr/local/bin", "/usr/local/src", "/usr/obj", "/usr/ports", "/usr/sbin", "/usr/share", "/usr/src", "/var", "/var/log", "/var/mail", "/var/spool", "/var/tmp", "/var/yp"];
var dr2 = { "application/epub+zip": { extensions: ["epub"] }, "application/gzip": { extensions: ["gz"] }, "application/java-archive": { extensions: ["jar", "war", "ear"] }, "application/json": { extensions: ["json", "map"] }, "application/ld+json": { extensions: ["jsonld"] }, "application/msword": { extensions: ["doc", "dot"] }, "application/octet-stream": { extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] }, "application/ogg": { extensions: ["ogx"] }, "application/pdf": { extensions: ["pdf"] }, "application/rtf": { extensions: ["rtf"] }, "application/vnd.amazon.ebook": { extensions: ["azw"] }, "application/vnd.apple.installer+xml": { extensions: ["mpkg"] }, "application/vnd.mozilla.xul+xml": { extensions: ["xul"] }, "application/vnd.ms-excel": { extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] }, "application/vnd.ms-fontobject": { extensions: ["eot"] }, "application/vnd.ms-powerpoint": { extensions: ["ppt", "pps", "pot"] }, "application/vnd.oasis.opendocument.presentation": { extensions: ["odp"] }, "application/vnd.oasis.opendocument.spreadsheet": { extensions: ["ods"] }, "application/vnd.oasis.opendocument.text": { extensions: ["odt"] }, "application/vnd.openxmlformats-officedocument.presentationml.presentation": { extensions: ["pptx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { extensions: ["xlsx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { extensions: ["docx"] }, "application/vnd.rar": { extensions: ["rar"] }, "application/vnd.visio": { extensions: ["vsd", "vst", "vss", "vsw"] }, "application/x-7z-compressed": { extensions: ["7z"] }, "application/x-abiword": { extensions: ["abw"] }, "application/x-bzip": { extensions: ["bz"] }, "application/x-bzip2": { extensions: ["bz2", "boz"] }, "application/x-csh": { extensions: ["csh"] }, "application/x-freearc": { extensions: ["arc"] }, "application/x-httpd-php": { extensions: ["php"] }, "application/x-sh": { extensions: ["sh"] }, "application/x-tar": { extensions: ["tar"] }, "application/xhtml+xml": { extensions: ["xhtml", "xht"] }, "application/xml": { extensions: ["xml", "xsl", "xsd", "rng"] }, "application/zip": { extensions: ["zip"] }, "audio/3gpp": { extensions: ["3gpp"] }, "audio/3gpp2": { extensions: ["3g2"] }, "audio/aac": { extensions: ["aac"] }, "audio/midi": { extensions: ["mid", "midi", "kar", "rmi"] }, "audio/mpeg": { extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] }, "audio/ogg": { extensions: ["oga", "ogg", "spx", "opus"] }, "audio/opus": { extensions: ["opus"] }, "audio/wav": { extensions: ["wav"] }, "audio/webm": { extensions: ["weba"] }, "font/otf": { extensions: ["otf"] }, "font/ttf": { extensions: ["ttf"] }, "font/woff": { extensions: ["woff"] }, "font/woff2": { extensions: ["woff2"] }, "image/avif": { extensions: ["avif"] }, "image/bmp": { extensions: ["bmp"] }, "image/gif": { extensions: ["gif"] }, "image/jpeg": { extensions: ["jpeg", "jpg", "jpe"] }, "image/png": { extensions: ["png"] }, "image/svg+xml": { extensions: ["svg", "svgz"] }, "image/tiff": { extensions: ["tif", "tiff"] }, "image/vnd.microsoft.icon": { extensions: ["ico"] }, "image/webp": { extensions: ["webp"] }, "text/calendar": { extensions: ["ics", "ifb"] }, "text/css": { extensions: ["css"] }, "text/csv": { extensions: ["csv"] }, "text/html": { extensions: ["html", "htm", "shtml"] }, "text/javascript": { extensions: ["js", "mjs"] }, "text/plain": { extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] }, "video/3gpp": { extensions: ["3gp", "3gpp"] }, "video/3gpp2": { extensions: ["3g2"] }, "video/mp2t": { extensions: ["ts"] }, "video/mp4": { extensions: ["mp4", "mp4v", "mpg4"] }, "video/mpeg": { extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] }, "video/ogg": { extensions: ["ogv"] }, "video/webm": { extensions: ["webm"] }, "video/x-msvideo": { extensions: ["avi"] } };
var it = { directory_path: br2, mime_type: dr2 };
var gr2 = it;
var ot = { color: qe2, database: ar2, date: nr2, hacker: or2, internet: ur2, location: hr2, metadata: fr2, system: gr2 };
var Fi = ot;

// node_modules/@faker-js/faker/dist/chunk-X5AUZP7O.js
var f2 = new Xe2({ locale: [ys, Fi] });

// src/testing/fake/index.ts
var fake = {
  name: () => f2.person.fullName(),
  words: (min, max) => f2.lorem.words({ min, max }),
  id: () => unique(f2.string.alpha({ length: { min: 24, max: 24 }, casing: "lower" })),
  boolean: () => f2.datatype.boolean(),
  integer: (min, max) => f2.number.int({ min, max }),
  float: (min, max) => f2.number.float({ min, max }),
  string: (min, max) => f2.string.alpha({ length: { min, max } }),
  email: () => unique(f2.internet.email),
  ip: () => f2.internet.ip(),
  url: () => f2.internet.url(),
  randomInArray: (array) => f2.helpers.arrayElement(array),
  randomsInArray: (array, count) => f2.helpers.arrayElements(array, count),
  date: {
    anytime: () => f2.date.anytime(),
    past: (days, refDate) => f2.date.recent({ days, refDate }),
    future: (days, refDate) => f2.date.soon({ days, refDate }),
    between: (start, end) => f2.date.between({ from: start, to: end }),
    timezone: () => f2.location.timeZone()
  }
};

// src/testing/testModel/index.ts
var {expect, test } = globalThis.Bun.jest(import.meta.path);

// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var exports_value = {};
__export(exports_value, {
  IsUndefined: () => IsUndefined,
  IsUint8Array: () => IsUint8Array,
  IsSymbol: () => IsSymbol,
  IsString: () => IsString,
  IsRegExp: () => IsRegExp,
  IsObject: () => IsObject,
  IsNumber: () => IsNumber,
  IsNull: () => IsNull,
  IsIterator: () => IsIterator,
  IsFunction: () => IsFunction,
  IsDate: () => IsDate,
  IsBoolean: () => IsBoolean,
  IsBigInt: () => IsBigInt,
  IsAsyncIterator: () => IsAsyncIterator,
  IsArray: () => IsArray,
  HasPropertyKey: () => HasPropertyKey
});
function HasPropertyKey(value, key) {
  return key in value;
}
function IsAsyncIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
function IsArray(value) {
  return Array.isArray(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsDate(value) {
  return value instanceof globalThis.Date;
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
function IsNull(value) {
  return value === null;
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsObject(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString(value) {
  return typeof value === "string";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined(value) {
  return value === undefined;
}

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray(value) ? ArrayType(value) : IsDate(value) ? DateType(value) : IsUint8Array(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneRest(schemas) {
  return schemas.map((schema) => CloneType(schema));
}
function CloneType(schema, options) {
  return options === undefined ? Clone(schema) : Clone({ ...options, ...schema });
}

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.asyncIterator in value;
}
function IsIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.iterator in value;
}
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
function IsDate2(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey2(value, key) {
  return key in value;
}
function IsObject2(value) {
  return value !== null && typeof value === "object";
}
function IsArray2(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
function IsUndefined2(value) {
  return value === undefined;
}
function IsNull2(value) {
  return value === null;
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsString2(value) {
  return typeof value === "string";
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNull2(value) || IsNumber2(value) || IsString2(value) || IsSymbol2(value) || IsUndefined2(value);
}

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.InstanceMode = "default";
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject2(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray2(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber2(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined2(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value2) => Immutable(value2));
}
function ImmutableDate(value) {
  return value;
}
function ImmutableUint8Array(value) {
  return value;
}
function ImmutableRegExp(value) {
  return value;
}
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
function Immutable(value) {
  return IsArray(value) ? ImmutableArray(value) : IsDate(value) ? ImmutableDate(value) : IsUint8Array(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject(value) ? ImmutableObject(value) : value;
}

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== undefined ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}

// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
var exports_kind = {};
__export(exports_kind, {
  IsVoid: () => IsVoid,
  IsUnsafe: () => IsUnsafe,
  IsUnknown: () => IsUnknown,
  IsUnion: () => IsUnion,
  IsUndefined: () => IsUndefined3,
  IsUint8Array: () => IsUint8Array3,
  IsTuple: () => IsTuple,
  IsTransform: () => IsTransform,
  IsThis: () => IsThis,
  IsTemplateLiteral: () => IsTemplateLiteral,
  IsSymbol: () => IsSymbol3,
  IsString: () => IsString3,
  IsSchema: () => IsSchema,
  IsRegExp: () => IsRegExp2,
  IsRef: () => IsRef,
  IsRecursive: () => IsRecursive,
  IsRecord: () => IsRecord,
  IsReadonly: () => IsReadonly,
  IsProperties: () => IsProperties,
  IsPromise: () => IsPromise2,
  IsOptional: () => IsOptional,
  IsObject: () => IsObject3,
  IsNumber: () => IsNumber3,
  IsNull: () => IsNull3,
  IsNot: () => IsNot,
  IsNever: () => IsNever,
  IsMappedResult: () => IsMappedResult,
  IsMappedKey: () => IsMappedKey,
  IsLiteralValue: () => IsLiteralValue,
  IsLiteralString: () => IsLiteralString,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteral: () => IsLiteral,
  IsKindOf: () => IsKindOf,
  IsKind: () => IsKind,
  IsIterator: () => IsIterator3,
  IsIntersect: () => IsIntersect,
  IsInteger: () => IsInteger2,
  IsImport: () => IsImport,
  IsFunction: () => IsFunction3,
  IsDate: () => IsDate3,
  IsConstructor: () => IsConstructor,
  IsComputed: () => IsComputed,
  IsBoolean: () => IsBoolean3,
  IsBigInt: () => IsBigInt3,
  IsAsyncIterator: () => IsAsyncIterator3,
  IsArray: () => IsArray3,
  IsArgument: () => IsArgument,
  IsAny: () => IsAny
});

// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArgument(value) {
  return IsKindOf(value, "Argument");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsImport(value) {
  return IsKindOf(value, "Import");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsProperties(value) {
  return IsObject(value);
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral(value) && IsString(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral(value) && IsNumber(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral(value) && IsBoolean(value.const);
}
function IsLiteralValue(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRecursive(value) {
  return IsObject(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArgument(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}
// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var exports_type = {};
__export(exports_type, {
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError,
  IsVoid: () => IsVoid2,
  IsUnsafe: () => IsUnsafe2,
  IsUnknown: () => IsUnknown2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnion: () => IsUnion2,
  IsUndefined: () => IsUndefined4,
  IsUint8Array: () => IsUint8Array4,
  IsTuple: () => IsTuple2,
  IsTransform: () => IsTransform2,
  IsThis: () => IsThis2,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsSymbol: () => IsSymbol4,
  IsString: () => IsString4,
  IsSchema: () => IsSchema2,
  IsRegExp: () => IsRegExp3,
  IsRef: () => IsRef2,
  IsRecursive: () => IsRecursive2,
  IsRecord: () => IsRecord2,
  IsReadonly: () => IsReadonly2,
  IsProperties: () => IsProperties2,
  IsPromise: () => IsPromise3,
  IsOptional: () => IsOptional2,
  IsObject: () => IsObject4,
  IsNumber: () => IsNumber4,
  IsNull: () => IsNull4,
  IsNot: () => IsNot2,
  IsNever: () => IsNever2,
  IsMappedResult: () => IsMappedResult2,
  IsMappedKey: () => IsMappedKey2,
  IsLiteralValue: () => IsLiteralValue2,
  IsLiteralString: () => IsLiteralString2,
  IsLiteralNumber: () => IsLiteralNumber2,
  IsLiteralBoolean: () => IsLiteralBoolean2,
  IsLiteral: () => IsLiteral2,
  IsKindOf: () => IsKindOf2,
  IsKind: () => IsKind2,
  IsIterator: () => IsIterator4,
  IsIntersect: () => IsIntersect2,
  IsInteger: () => IsInteger3,
  IsImport: () => IsImport2,
  IsFunction: () => IsFunction4,
  IsDate: () => IsDate4,
  IsConstructor: () => IsConstructor2,
  IsComputed: () => IsComputed2,
  IsBoolean: () => IsBoolean4,
  IsBigInt: () => IsBigInt4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsArray: () => IsArray4,
  IsArgument: () => IsArgument2,
  IsAny: () => IsAny2
});
class TypeGuardUnknownTypeError extends TypeBoxError {
}
var KnownTypes = [
  "Argument",
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString(value))
    return false;
  for (let i2 = 0;i2 < value.length; i2++) {
    const code = value.charCodeAt(i2);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined(value) || IsBigInt(value);
}
function IsOptionalNumber(value) {
  return IsUndefined(value) || IsNumber(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined(value) || IsBoolean(value);
}
function IsOptionalString(value) {
  return IsUndefined(value) || IsString(value);
}
function IsOptionalPattern(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined(value) || IsSchema2(value);
}
function IsReadonly2(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional2(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArgument2(value) {
  return IsKindOf2(value, "Argument") && IsNumber(value.index);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString(value.target) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsImport2(value) {
  return IsKindOf2(value, "Import") && HasPropertyKey(value, "$defs") && IsObject(value.$defs) && IsProperties2(value.$defs) && HasPropertyKey(value, "$ref") && IsString(value.$ref) && value.$ref in value.$defs;
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties2(value) {
  return IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString(value.type) && value.type !== "object" ? false : true) && IsArray(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString2(value) {
  return IsLiteral2(value) && IsString(value.const);
}
function IsLiteralNumber2(value) {
  return IsLiteral2(value) && IsNumber(value.const);
}
function IsLiteralBoolean2(value) {
  return IsLiteral2(value) && IsBoolean(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
function IsLiteralValue2(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray(value.keys) && value.keys.every((key) => IsNumber(key) || IsString(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties2(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties2(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
function IsRecursive2(value) {
  return IsObject(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString(value.source) && IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsTransform2(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber(value.minItems) && IsNumber(value.maxItems) && value.minItems === value.maxItems && (IsUndefined(value.items) && IsUndefined(value.additionalItems) && value.minItems === 0 || IsArray(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString2(schema) || IsLiteralNumber2(schema));
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject(value) && IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject(value) && (IsAny2(value) || IsArgument2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}
// node_modules/@sinclair/typebox/build/esm/type/helpers/helpers.mjs
function Increment(T3) {
  return (parseInt(T3) + 1).toString();
}

// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var exports_format = {};
__export(exports_format, {
  Set: () => Set2,
  Has: () => Has,
  Get: () => Get,
  Entries: () => Entries,
  Delete: () => Delete,
  Clear: () => Clear
});
var map = new Map;
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var exports_type2 = {};
__export(exports_type2, {
  Set: () => Set3,
  Has: () => Has2,
  Get: () => Get2,
  Entries: () => Entries2,
  Delete: () => Delete2,
  Clear: () => Clear2
});
var map2 = new Map;
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T3, S3) {
  return T3.includes(S3);
}
function SetIsSubset(T3, S3) {
  return T3.every((L3) => SetIncludes(S3, L3));
}
function SetDistinct(T3) {
  return [...new Set(T3)];
}
function SetIntersect(T3, S3) {
  return T3.filter((L3) => S3.includes(L3));
}
function SetUnion(T3, S3) {
  return [...T3, ...S3];
}
function SetComplement(T3, S3) {
  return T3.filter((L3) => !S3.includes(L3));
}
function SetIntersectManyResolve(T3, Init) {
  return T3.reduce((Acc, L3) => {
    return SetIntersect(Acc, L3);
  }, Init);
}
function SetIntersectMany(T3) {
  return T3.length === 1 ? T3[0] : T3.length > 1 ? SetIntersectManyResolve(T3.slice(1), T3[0]) : [];
}
function SetUnionMany(T3) {
  const Acc = [];
  for (const L3 of T3)
    Acc.push(...L3);
  return Acc;
}

// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/argument/argument.mjs
function Argument(index) {
  return CreateType({ [Kind]: "Argument", index });
}

// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _2, ...rest } = value;
  return rest;
}
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}

// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-key.mjs
function MappedKey(T3) {
  return CreateType({
    [Kind]: "MappedKey",
    keys: T3
  });
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}

// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T3, options) {
  return CreateType({ [Kind]: "Union", anyOf: T3 }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type) => IsOptional(type));
}
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
function RemoveOptionalFromType(T3) {
  return Discard(T3, [OptionalKind]);
}
function ResolveUnion(types, options) {
  const isOptional = IsUnionOptional(types);
  return isOptional ? Optional(UnionCreate(RemoveOptionalFromRest(types), options)) : UnionCreate(RemoveOptionalFromRest(types), options);
}
function UnionEvaluated(T3, options) {
  return T3.length === 1 ? CreateType(T3[0], options) : T3.length === 0 ? Never(options) : ResolveUnion(T3, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
class TemplateLiteralParserError extends TypeBoxError {
}
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or2(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index;scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or2(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
class TemplateLiteralFiniteError extends TypeBoxError {
}
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
class TemplateLiteralGenerateError extends TypeBoxError {
}
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L3 = Literal("$");
    const R3 = FromSyntax(syntax.slice(1));
    return yield* [L3, ...R3];
  }
  for (let i2 = 2;i2 < syntax.length; i2++) {
    if (syntax[i2] === "}") {
      const L3 = FromUnion(syntax.slice(2, i2));
      const R3 = FromSyntax(syntax.slice(i2 + 1));
      return yield* [...L3, ...R3];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i2 = 0;i2 < syntax.length; i2++) {
    if (syntax[i2] === "$") {
      const L3 = Literal(syntax.slice(0, i2));
      const R3 = FromTerminal(syntax.slice(i2));
      return yield* [L3, ...R3];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
class TemplateLiteralPatternError extends TypeBoxError {
}
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R3 = TemplateLiteralGenerate(schema);
  const L3 = R3.map((S3) => Literal(S3));
  return UnionEvaluated(L3);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options) {
  const pattern = IsString(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys = TemplateLiteralGenerate(templateLiteral);
  return keys.map((key) => key.toString());
}
function FromUnion2(types) {
  const result = [];
  for (const type of types)
    result.push(...IndexPropertyKeys(type));
  return result;
}
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
function IndexPropertyKeys(type) {
  return [...new Set(IsTemplateLiteral(type) ? FromTemplateLiteral(type) : IsUnion(type) ? FromUnion2(type.anyOf) : IsLiteral(type) ? FromLiteral(type.const) : IsNumber3(type) ? ["[number]"] : IsInteger2(type) ? ["[number]"] : [])];
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties(type, properties, options) {
  const result = {};
  for (const K22 of Object.getOwnPropertyNames(properties)) {
    result[K22] = Index(type, IndexPropertyKeys(properties[K22]), options);
  }
  return result;
}
function FromMappedResult(type, mappedResult, options) {
  return FromProperties(type, mappedResult.properties, options);
}
function IndexFromMappedResult(type, mappedResult, options) {
  const properties = FromMappedResult(type, mappedResult, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type) => IndexFromPropertyKey(type, key));
}
function FromIntersectRest(types) {
  return types.filter((type) => !IsNever(type));
}
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
function FromUnionRest(types) {
  return types.some((L3) => IsNever(L3)) ? [] : types;
}
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
function FromArray(type, key) {
  return key === "[number]" ? type : Never();
}
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
function IndexFromPropertyKey(type, propertyKey) {
  return IsIntersect(type) ? FromIntersect(type.allOf, propertyKey) : IsUnion(type) ? FromUnion3(type.anyOf, propertyKey) : IsTuple(type) ? FromTuple(type.items ?? [], propertyKey) : IsArray3(type) ? FromArray(type.items, propertyKey) : IsObject3(type) ? FromProperty(type.properties, propertyKey) : Never();
}
function IndexFromPropertyKeys(type, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
function FromSchema(type, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
function IndexFromComputed(type, key) {
  return Computed("Index", [type, key]);
}
function Index(type, key, options) {
  if (IsRef(type) || IsRef(key)) {
    const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type) || !IsSchema(key))
      throw new TypeBoxError(error);
    return Computed("Index", [type, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
  return { [key]: Index(type, [key], Clone(options)) };
}
function MappedIndexPropertyKeys(type, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type, left, options) };
  }, {});
}
function MappedIndexProperties(type, mappedKey, options) {
  return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
function IndexFromMappedKey(type, mappedKey, options) {
  const properties = MappedIndexProperties(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function RequiredKeys(properties) {
  const keys = [];
  for (let key in properties) {
    if (!IsOptional(properties[key]))
      keys.push(key);
  }
  return keys;
}
function _Object(properties, options) {
  const required = RequiredKeys(properties);
  const schematic = required.length > 0 ? { [Kind]: "Object", type: "object", properties, required } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schematic, options);
}
var Object2 = _Object;

// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
function ReadonlyWithFlag(schema, F3) {
  return F3 === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F3 = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F3) : ReadonlyWithFlag(schema, F3);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties2(K3, F3) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(K3))
    Acc[K22] = Readonly(K3[K22], F3);
  return Acc;
}
function FromMappedResult2(R3, F3) {
  return FromProperties2(R3.properties, F3);
}
function ReadonlyFromMappedResult(R3, F3) {
  const P3 = FromMappedResult2(R3, F3);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult3(K3, P3) {
  return K3 in P3 ? FromSchemaType(K3, P3[K3]) : MappedResult(P3);
}
function MappedKeyToKnownMappedResultProperties(K3) {
  return { [K3]: Literal(K3) };
}
function MappedKeyToUnknownMappedResultProperties(P3) {
  const Acc = {};
  for (const L3 of P3)
    Acc[L3] = Literal(L3);
  return Acc;
}
function MappedKeyToMappedResultProperties(K3, P3) {
  return SetIncludes(P3, K3) ? MappedKeyToKnownMappedResultProperties(K3) : MappedKeyToUnknownMappedResultProperties(P3);
}
function FromMappedKey(K3, P3) {
  const R3 = MappedKeyToMappedResultProperties(K3, P3);
  return FromMappedResult3(K3, R3);
}
function FromRest2(K3, T3) {
  return T3.map((L3) => FromSchemaType(K3, L3));
}
function FromProperties3(K3, T3) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(T3))
    Acc[K22] = FromSchemaType(K3, T3[K22]);
  return Acc;
}
function FromSchemaType(K3, T3) {
  const options = { ...T3 };
  return IsOptional(T3) ? Optional(FromSchemaType(K3, Discard(T3, [OptionalKind]))) : IsReadonly(T3) ? Readonly(FromSchemaType(K3, Discard(T3, [ReadonlyKind]))) : IsMappedResult(T3) ? FromMappedResult3(K3, T3.properties) : IsMappedKey(T3) ? FromMappedKey(K3, T3.keys) : IsConstructor(T3) ? Constructor(FromRest2(K3, T3.parameters), FromSchemaType(K3, T3.returns), options) : IsFunction3(T3) ? Function(FromRest2(K3, T3.parameters), FromSchemaType(K3, T3.returns), options) : IsAsyncIterator3(T3) ? AsyncIterator(FromSchemaType(K3, T3.items), options) : IsIterator3(T3) ? Iterator(FromSchemaType(K3, T3.items), options) : IsIntersect(T3) ? Intersect(FromRest2(K3, T3.allOf), options) : IsUnion(T3) ? Union(FromRest2(K3, T3.anyOf), options) : IsTuple(T3) ? Tuple(FromRest2(K3, T3.items ?? []), options) : IsObject3(T3) ? Object2(FromProperties3(K3, T3.properties), options) : IsArray3(T3) ? Array2(FromSchemaType(K3, T3.items), options) : IsPromise2(T3) ? Promise2(FromSchemaType(K3, T3.item), options) : T3;
}
function MappedFunctionReturnType(K3, T3) {
  const Acc = {};
  for (const L3 of K3)
    Acc[L3] = FromSchemaType(L3, T3);
  return Acc;
}
function Mapped(key, map3, options) {
  const K3 = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K3 });
  const R3 = MappedFunctionReturnType(K3, RT);
  return Object2(R3, options);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
function OptionalWithFlag(schema, F3) {
  return F3 === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F3 = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F3) : OptionalWithFlag(schema, F3);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties4(P3, F3) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P3))
    Acc[K22] = Optional(P3[K22], F3);
  return Acc;
}
function FromMappedResult4(R3, F3) {
  return FromProperties4(R3.properties, F3);
}
function OptionalFromMappedResult(R3, F3) {
  const P3 = FromMappedResult4(R3, F3);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T3, options = {}) {
  const allObjects = T3.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T3 } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T3 }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
function RemoveOptionalFromType2(type) {
  return Discard(type, [OptionalKind]);
}
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest2(types), options)) : IntersectCreate(RemoveOptionalFromRest2(types), options);
}
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
function FromRef($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
function FromIntersect2(types) {
  return Intersect(FromRest3(types));
}
function FromUnion4(types) {
  return Union(FromRest3(types));
}
function FromPromise(type) {
  return Awaited(type);
}
function FromRest3(types) {
  return types.map((type) => Awaited(type));
}
function Awaited(type, options) {
  return CreateType(IsComputed(type) ? FromComputed(type.target, type.parameters) : IsIntersect(type) ? FromIntersect2(type.allOf) : IsUnion(type) ? FromUnion4(type.anyOf) : IsPromise2(type) ? FromPromise(type.item) : IsRef(type) ? FromRef(type.$ref) : type, options);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest4(types) {
  const result = [];
  for (const L3 of types)
    result.push(KeyOfPropertyKeys(L3));
  return result;
}
function FromIntersect3(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
function FromUnion5(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
function FromTuple2(types) {
  return types.map((_2, indexer) => indexer.toString());
}
function FromArray2(_2) {
  return ["[number]"];
}
function FromProperties5(T3) {
  return globalThis.Object.getOwnPropertyNames(T3);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(type) {
  return IsIntersect(type) ? FromIntersect3(type.allOf) : IsUnion(type) ? FromUnion5(type.anyOf) : IsTuple(type) ? FromTuple2(type.items ?? []) : IsArray3(type) ? FromArray2(type.items) : IsObject3(type) ? FromProperties5(type.properties) : IsRecord(type) ? FromPatternProperties(type.patternProperties) : [];
}
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed2(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
function FromRef2($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
function KeyOfFromType(type, options) {
  const propertyKeys = KeyOfPropertyKeys(type);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L3) => L3 === "[number]" ? Number2() : Literal(L3));
}
function KeyOf(type, options) {
  return IsComputed(type) ? FromComputed2(type.target, type.parameters) : IsRef(type) ? FromRef2(type.$ref) : IsMappedResult(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(properties))
    result[K22] = KeyOf(properties[K22], Clone(options));
  return result;
}
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_2, index) => [keys[index], schemas[index]]);
}

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T3) {
  const Acc = [];
  for (const L3 of T3)
    Acc.push(...KeyOfPropertyKeys(L3));
  return SetDistinct(Acc);
}
function FilterNever(T3) {
  return T3.filter((L3) => !IsNever(L3));
}
function CompositeProperty(T3, K3) {
  const Acc = [];
  for (const L3 of T3)
    Acc.push(...IndexFromPropertyKeys(L3, [K3]));
  return FilterNever(Acc);
}
function CompositeProperties(T3, K3) {
  const Acc = {};
  for (const L3 of K3) {
    Acc[L3] = IntersectEvaluated(CompositeProperty(T3, L3));
  }
  return Acc;
}
function Composite(T3, options) {
  const K3 = CompositeKeys(T3);
  const P3 = CompositeProperties(T3, K3);
  const R3 = Object2(P3, options);
  return R3;
}

// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray3(T3) {
  return T3.map((L3) => FromValue(L3, false));
}
function FromProperties7(value) {
  const Acc = {};
  for (const K3 of globalThis.Object.getOwnPropertyNames(value))
    Acc[K3] = Readonly(FromValue(value[K3], false));
  return Acc;
}
function ConditionalReadonly(T3, root) {
  return root === true ? T3 : Readonly(T3);
}
function FromValue(value, root) {
  return IsAsyncIterator(value) ? ConditionalReadonly(Any(), root) : IsIterator(value) ? ConditionalReadonly(Any(), root) : IsArray(value) ? Readonly(Tuple(FromArray3(value))) : IsUint8Array(value) ? Uint8Array2() : IsDate(value) ? Date2() : IsObject(value) ? ConditionalReadonly(Object2(FromProperties7(value)), root) : IsFunction(value) ? ConditionalReadonly(Function([], Unknown()), root) : IsUndefined(value) ? Undefined() : IsNull(value) ? Null() : IsSymbol(value) ? Symbol2() : IsBigInt(value) ? BigInt2() : IsNumber(value) ? Literal(value) : IsBoolean(value) ? Literal(value) : IsString(value) ? Literal(value) : Object2({});
}
function Const(T3, options) {
  return CreateType(FromValue(T3, true), options);
}

// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options) {
  if (IsUndefined(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return exports_type.IsNever(right) || exports_type.IsIntersect(right) || exports_type.IsUnion(right) || exports_type.IsUnknown(right) || exports_type.IsAny(right);
}
function StructuralRight(left, right) {
  return exports_type.IsNever(right) ? FromNeverRight(left, right) : exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) ? FromUnionRight(left, right) : exports_type.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny(left, right) {
  return exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) && right.anyOf.some((schema) => exports_type.IsAny(schema) || exports_type.IsUnknown(schema)) ? ExtendsResult.True : exports_type.IsUnion(right) ? ExtendsResult.Union : exports_type.IsUnknown(right) ? ExtendsResult.True : exports_type.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return exports_type.IsUnknown(left) ? ExtendsResult.False : exports_type.IsAny(left) ? ExtendsResult.Union : exports_type.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return exports_type.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return exports_type.IsLiteralBoolean(left) ? ExtendsResult.True : exports_type.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : !exports_type.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : !exports_type.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return exports_type.IsLiteral(left) && exports_value.IsNumber(left.const) ? ExtendsResult.True : exports_type.IsNumber(left) || exports_type.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger(left, right) {
  return exports_type.IsInteger(right) || exports_type.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromLiteral2(left, right) {
  return exports_type.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsString(right) ? FromStringRight(left, right) : exports_type.IsNumber(right) ? FromNumberRight(left, right) : exports_type.IsInteger(right) ? FromIntegerRight(left, right) : exports_type.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!exports_type.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot(left, right) {
  return exports_type.IsNot(left) ? Visit3(UnwrapTNot(left), right) : exports_type.IsNot(right) ? Visit3(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return exports_type.IsLiteralNumber(left) ? ExtendsResult.True : exports_type.IsNumber(left) || exports_type.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsInteger(right) || exports_type.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && exports_type.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (exports_type.IsString(schema.properties.description.anyOf[0]) && exports_type.IsUndefined(schema.properties.description.anyOf[1]) || exports_type.IsString(schema.properties.description.anyOf[1]) && exports_type.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit3(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit3(left, right) === ExtendsResult.False ? ExtendsResult.False : exports_type.IsOptional(left) && !exports_type.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return exports_type.IsUnknown(left) ? ExtendsResult.False : exports_type.IsAny(left) ? ExtendsResult.Union : exports_type.IsNever(left) || exports_type.IsLiteralString(left) && IsObjectStringLike(right) || exports_type.IsLiteralNumber(left) && IsObjectNumberLike(right) || exports_type.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || exports_type.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type.IsBigInt(left) && IsObjectBigIntLike(right) || exports_type.IsString(left) && IsObjectStringLike(right) || exports_type.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type.IsNumber(left) && IsObjectNumberLike(right) || exports_type.IsInteger(left) && IsObjectNumberLike(right) || exports_type.IsBoolean(left) && IsObjectBooleanLike(right) || exports_type.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || exports_type.IsDate(left) && IsObjectDateLike(right) || exports_type.IsConstructor(left) && IsObjectConstructorLike(right) || exports_type.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : exports_type.IsRecord(left) && exports_type.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : exports_type.IsRecord(left) && exports_type.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : !exports_type.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !exports_type.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (exports_type.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !exports_type.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return exports_type.IsLiteralString(left) && exports_type.IsNumber(Key) && IntoBooleanResult(Visit3(left, Value)) === ExtendsResult.True ? ExtendsResult.True : exports_type.IsUint8Array(left) && exports_type.IsNumber(Key) ? Visit3(left, Value) : exports_type.IsString(left) && exports_type.IsNumber(Key) ? Visit3(left, Value) : exports_type.IsArray(left) && exports_type.IsNumber(Key) ? Visit3(left, Value) : exports_type.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : !exports_type.IsRecord(right) ? ExtendsResult.False : Visit3(RecordValue(left), RecordValue(right));
}
function FromRegExp(left, right) {
  const L3 = exports_type.IsRegExp(left) ? String2() : left;
  const R3 = exports_type.IsRegExp(right) ? String2() : right;
  return Visit3(L3, R3);
}
function FromStringRight(left, right) {
  return exports_type.IsLiteral(left) && exports_value.IsString(left.const) ? ExtendsResult.True : exports_type.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral2(left, right) {
  return exports_type.IsTemplateLiteral(left) ? Visit3(TemplateLiteralToUnion(left), right) : exports_type.IsTemplateLiteral(right) ? Visit3(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return exports_type.IsArray(right) && left.items !== undefined && left.items.every((schema) => Visit3(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return exports_type.IsNever(left) ? ExtendsResult.True : exports_type.IsUnknown(left) ? ExtendsResult.False : exports_type.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : exports_type.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !exports_type.IsTuple(right) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) || !exports_value.IsUndefined(left.items) && exports_value.IsUndefined(right.items) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit3(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsVoid(right) ? FromVoidRight(left, right) : exports_type.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown(left, right) {
  return exports_type.IsNever(right) ? FromNeverRight(left, right) : exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) ? FromUnionRight(left, right) : exports_type.IsAny(right) ? FromAnyRight(left, right) : exports_type.IsString(right) ? FromStringRight(left, right) : exports_type.IsNumber(right) ? FromNumberRight(left, right) : exports_type.IsInteger(right) ? FromIntegerRight(left, right) : exports_type.IsBoolean(right) ? FromBooleanRight(left, right) : exports_type.IsArray(right) ? FromArrayRight(left, right) : exports_type.IsTuple(right) ? FromTupleRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return exports_type.IsUndefined(left) ? ExtendsResult.True : exports_type.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid(left, right) {
  return exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) ? FromUnionRight(left, right) : exports_type.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type.IsAny(right) ? FromAnyRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit3(left, right) {
  return exports_type.IsTemplateLiteral(left) || exports_type.IsTemplateLiteral(right) ? FromTemplateLiteral2(left, right) : exports_type.IsRegExp(left) || exports_type.IsRegExp(right) ? FromRegExp(left, right) : exports_type.IsNot(left) || exports_type.IsNot(right) ? FromNot(left, right) : exports_type.IsAny(left) ? FromAny(left, right) : exports_type.IsArray(left) ? FromArray4(left, right) : exports_type.IsBigInt(left) ? FromBigInt(left, right) : exports_type.IsBoolean(left) ? FromBoolean(left, right) : exports_type.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : exports_type.IsConstructor(left) ? FromConstructor(left, right) : exports_type.IsDate(left) ? FromDate(left, right) : exports_type.IsFunction(left) ? FromFunction(left, right) : exports_type.IsInteger(left) ? FromInteger(left, right) : exports_type.IsIntersect(left) ? FromIntersect4(left, right) : exports_type.IsIterator(left) ? FromIterator(left, right) : exports_type.IsLiteral(left) ? FromLiteral2(left, right) : exports_type.IsNever(left) ? FromNever(left, right) : exports_type.IsNull(left) ? FromNull(left, right) : exports_type.IsNumber(left) ? FromNumber(left, right) : exports_type.IsObject(left) ? FromObject(left, right) : exports_type.IsRecord(left) ? FromRecord(left, right) : exports_type.IsString(left) ? FromString(left, right) : exports_type.IsSymbol(left) ? FromSymbol(left, right) : exports_type.IsTuple(left) ? FromTuple3(left, right) : exports_type.IsPromise(left) ? FromPromise2(left, right) : exports_type.IsUint8Array(left) ? FromUint8Array(left, right) : exports_type.IsUndefined(left) ? FromUndefined(left, right) : exports_type.IsUnion(left) ? FromUnion6(left, right) : exports_type.IsUnknown(left) ? FromUnknown(left, right) : exports_type.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
  return Visit3(left, right);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties8(P3, Right, True, False, options) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P3))
    Acc[K22] = Extends(P3[K22], Right, True, False, Clone(options));
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties8(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P3 = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R3 = ExtendsCheck(left, right);
  return R3 === ExtendsResult.Union ? Union([trueType, falseType]) : R3 === ExtendsResult.True ? trueType : falseType;
}
function Extends(L3, R3, T3, F3, options) {
  return IsMappedResult(L3) ? ExtendsFromMappedResult(L3, R3, T3, F3, options) : IsMappedKey(L3) ? CreateType(ExtendsFromMappedKey(L3, R3, T3, F3, options)) : CreateType(ExtendsResolve(L3, R3, T3, F3), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K3, U3, L3, R3, options) {
  return {
    [K3]: Extends(Literal(K3), U3, L3, R3, Clone(options))
  };
}
function FromPropertyKeys(K3, U3, L3, R3, options) {
  return K3.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U3, L3, R3, options) };
  }, {});
}
function FromMappedKey2(K3, U3, L3, R3, options) {
  return FromPropertyKeys(K3.keys, U3, L3, R3, options);
}
function ExtendsFromMappedKey(T3, U3, L3, R3, options) {
  const P3 = FromMappedKey2(T3, U3, L3, R3, options);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L3, R3) {
  return Exclude(TemplateLiteralToUnion(L3), R3);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L3, R3) {
  const excluded = L3.filter((inner) => ExtendsCheck(inner, R3) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L3, R3, options = {}) {
  if (IsTemplateLiteral(L3))
    return CreateType(ExcludeFromTemplateLiteral(L3, R3), options);
  if (IsMappedResult(L3))
    return CreateType(ExcludeFromMappedResult(L3, R3), options);
  return CreateType(IsUnion(L3) ? ExcludeRest(L3.anyOf, R3) : ExtendsCheck(L3, R3) !== ExtendsResult.False ? Never() : L3, options);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P3, U3) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P3))
    Acc[K22] = Exclude(P3[K22], U3);
  return Acc;
}
function FromMappedResult7(R3, T3) {
  return FromProperties9(R3.properties, T3);
}
function ExcludeFromMappedResult(R3, T3) {
  const P3 = FromMappedResult7(R3, T3);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L3, R3) {
  return Extract(TemplateLiteralToUnion(L3), R3);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L3, R3) {
  const extracted = L3.filter((inner) => ExtendsCheck(inner, R3) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L3, R3, options) {
  if (IsTemplateLiteral(L3))
    return CreateType(ExtractFromTemplateLiteral(L3, R3), options);
  if (IsMappedResult(L3))
    return CreateType(ExtractFromMappedResult(L3, R3), options);
  return CreateType(IsUnion(L3) ? ExtractRest(L3.anyOf, R3) : ExtendsCheck(L3, R3) !== ExtendsResult.False ? L3 : Never(), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P3, T3) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P3))
    Acc[K22] = Extract(P3[K22], T3);
  return Acc;
}
function FromMappedResult8(R3, T3) {
  return FromProperties10(R3.properties, T3);
}
function ExtractFromMappedResult(R3, T3) {
  const P3 = FromMappedResult8(R3, T3);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}

// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern, T3, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T3 } }, options);
}
function RecordCreateFromKeys(K3, T3, options) {
  const result = {};
  for (const K22 of K3)
    result[K22] = T3;
  return Object2(result, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K3, T3, options) {
  return IsTemplateLiteralFinite(K3) ? RecordCreateFromKeys(IndexPropertyKeys(K3), T3, options) : RecordCreateFromPattern(K3.pattern, T3, options);
}
function FromUnionKey(key, type, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
function FromLiteralKey(key, type, options) {
  return RecordCreateFromKeys([key.toString()], type, options);
}
function FromRegExpKey(key, type, options) {
  return RecordCreateFromPattern(key.source, type, options);
}
function FromStringKey(key, type, options) {
  const pattern = IsUndefined(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type, options);
}
function FromAnyKey(_2, type, options) {
  return RecordCreateFromPattern(PatternStringExact, type, options);
}
function FromNeverKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNeverExact, type, options);
}
function FromBooleanKey(_key, type, options) {
  return Object2({ true: type, false: type }, options);
}
function FromIntegerKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function FromNumberKey(_2, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function Record(key, type, options = {}) {
  return IsUnion(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral(key) ? FromLiteralKey(key.const, type, options) : IsBoolean3(key) ? FromBooleanKey(key, type, options) : IsInteger2(key) ? FromIntegerKey(key, type, options) : IsNumber3(key) ? FromNumberKey(key, type, options) : IsRegExp2(key) ? FromRegExpKey(key, type, options) : IsString3(key) ? FromStringKey(key, type, options) : IsAny(key) ? FromAnyKey(key, type, options) : IsNever(key) ? FromNeverKey(key, type, options) : Never(options);
}
function RecordPattern(record) {
  return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
function RecordKey2(type) {
  const pattern = RecordPattern(type);
  return pattern === PatternStringExact ? String2() : pattern === PatternNumberExact ? Number2() : String2({ pattern });
}
function RecordValue2(type) {
  return type.patternProperties[RecordPattern(type)];
}

// node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromFunction2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromIntersect5(args, type) {
  type.allOf = FromTypes(args, type.allOf);
  return type;
}
function FromUnion7(args, type) {
  type.anyOf = FromTypes(args, type.anyOf);
  return type;
}
function FromTuple4(args, type) {
  if (IsUndefined(type.items))
    return type;
  type.items = FromTypes(args, type.items);
  return type;
}
function FromArray5(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromAsyncIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromPromise3(args, type) {
  type.item = FromType(args, type.item);
  return type;
}
function FromObject2(args, type) {
  const mappedProperties = FromProperties11(args, type.properties);
  return { ...type, ...Object2(mappedProperties) };
}
function FromRecord2(args, type) {
  const mappedKey = FromType(args, RecordKey2(type));
  const mappedValue = FromType(args, RecordValue2(type));
  const result = Record(mappedKey, mappedValue);
  return { ...type, ...result };
}
function FromArgument(args, argument) {
  return argument.index in args ? args[argument.index] : Unknown();
}
function FromProperty2(args, type) {
  const isReadonly = IsReadonly(type);
  const isOptional = IsOptional(type);
  const mapped = FromType(args, type);
  return isReadonly && isOptional ? ReadonlyOptional(mapped) : isReadonly && !isOptional ? Readonly(mapped) : !isReadonly && isOptional ? Optional(mapped) : mapped;
}
function FromProperties11(args, properties) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
    return { ...result, [key]: FromProperty2(args, properties[key]) };
  }, {});
}
function FromTypes(args, types) {
  return types.map((type) => FromType(args, type));
}
function FromType(args, type) {
  return IsConstructor(type) ? FromConstructor2(args, type) : IsFunction3(type) ? FromFunction2(args, type) : IsIntersect(type) ? FromIntersect5(args, type) : IsUnion(type) ? FromUnion7(args, type) : IsTuple(type) ? FromTuple4(args, type) : IsArray3(type) ? FromArray5(args, type) : IsAsyncIterator3(type) ? FromAsyncIterator2(args, type) : IsIterator3(type) ? FromIterator2(args, type) : IsPromise2(type) ? FromPromise3(args, type) : IsObject3(type) ? FromObject2(args, type) : IsRecord(type) ? FromRecord2(args, type) : IsArgument(type) ? FromArgument(args, type) : type;
}
function Instantiate(type, args) {
  return FromType(args, CloneType(type));
}

// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K3, M3, options) {
  return {
    [K3]: Intrinsic(Literal(K3), M3, Clone(options))
  };
}
function MappedIntrinsicPropertyKeys(K3, M3, options) {
  const result = K3.reduce((Acc, L3) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L3, M3, options) };
  }, {});
  return result;
}
function MappedIntrinsicProperties(T3, M3, options) {
  return MappedIntrinsicPropertyKeys(T3["keys"], M3, options);
}
function IntrinsicFromMappedKey(T3, M3, options) {
  const P3 = MappedIntrinsicProperties(T3, M3, options);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value) {
  return value.toUpperCase();
}
function ApplyLowercase(value) {
  return value.toLowerCase();
}
function FromTemplateLiteral3(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
function FromRest5(T3, M3) {
  return T3.map((L3) => Intrinsic(L3, M3));
}
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral3(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : CreateType(schema, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T3, options = {}) {
  return Intrinsic(T3, "Capitalize", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T3, options = {}) {
  return Intrinsic(T3, "Lowercase", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T3, options = {}) {
  return Intrinsic(T3, "Uncapitalize", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T3, options = {}) {
  return Intrinsic(T3, "Uppercase", options);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(properties, propertyKeys, options) {
  const result = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(properties))
    result[K22] = Omit(properties[K22], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties12(mappedResult.properties, propertyKeys, options);
}
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect6(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromUnion8(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromProperty3(properties, key) {
  const { [key]: _2, ...R3 } = properties;
  return R3;
}
function FromProperties13(properties, propertyKeys) {
  return propertyKeys.reduce((T3, K22) => FromProperty3(T3, K22), properties);
}
function FromObject3(properties, propertyKeys) {
  const options = Discard(properties, [TransformKind, "$id", "required", "properties"]);
  const omittedProperties = FromProperties13(properties["properties"], propertyKeys);
  return Object2(omittedProperties, options);
}
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function OmitResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect6(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion8(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject3(properties, propertyKeys) : Object2({});
}
function Omit(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({ ...OmitResolve(type, propertyKeys), ...options });
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type, key, options) {
  return { [key]: Omit(type, [key], Clone(options)) };
}
function FromPropertyKeys2(type, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type, LK, options) };
  }, {});
}
function FromMappedKey3(type, mappedKey, options) {
  return FromPropertyKeys2(type, mappedKey.keys, options);
}
function OmitFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey3(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties14(properties, propertyKeys, options) {
  const result = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(properties))
    result[K22] = Pick(properties[K22], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties14(mappedResult.properties, propertyKeys, options);
}
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect7(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromUnion9(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromProperties15(properties, propertyKeys) {
  const result = {};
  for (const K22 of propertyKeys)
    if (K22 in properties)
      result[K22] = properties[K22];
  return result;
}
function FromObject4(T3, K3) {
  const options = Discard(T3, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties15(T3["properties"], K3);
  return Object2(properties, options);
}
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function PickResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect7(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion9(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject4(properties, propertyKeys) : Object2({});
}
function Pick(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({ ...PickResolve(type, propertyKeys), ...options });
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type, key, options) {
  return {
    [key]: Pick(type, [key], Clone(options))
  };
}
function FromPropertyKeys3(type, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type, leftKey, options) };
  }, {});
}
function FromMappedKey4(type, mappedKey, options) {
  return FromPropertyKeys3(type, mappedKey.keys, options);
}
function PickFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey4(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
function FromRef3($ref) {
  return Computed("Partial", [Ref($ref)]);
}
function FromProperties16(properties) {
  const partialProperties = {};
  for (const K3 of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K3] = Optional(properties[K3]);
  return partialProperties;
}
function FromObject5(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties16(type["properties"]);
  return Object2(properties, options);
}
function FromRest6(types) {
  return types.map((type) => PartialResolve(type));
}
function PartialResolve(type) {
  return IsComputed(type) ? FromComputed3(type.target, type.parameters) : IsRef(type) ? FromRef3(type.$ref) : IsIntersect(type) ? Intersect(FromRest6(type.allOf)) : IsUnion(type) ? Union(FromRest6(type.anyOf)) : IsObject3(type) ? FromObject5(type) : IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : Object2({});
}
function Partial(type, options) {
  if (IsMappedResult(type)) {
    return PartialFromMappedResult(type, options);
  } else {
    return CreateType({ ...PartialResolve(type), ...options });
  }
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties17(K3, options) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(K3))
    Acc[K22] = Partial(K3[K22], Clone(options));
  return Acc;
}
function FromMappedResult11(R3, options) {
  return FromProperties17(R3.properties, options);
}
function PartialFromMappedResult(R3, options) {
  const P3 = FromMappedResult11(R3, options);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
function FromRef4($ref) {
  return Computed("Required", [Ref($ref)]);
}
function FromProperties18(properties) {
  const requiredProperties = {};
  for (const K3 of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K3] = Discard(properties[K3], [OptionalKind]);
  return requiredProperties;
}
function FromObject6(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties18(type["properties"]);
  return Object2(properties, options);
}
function FromRest7(types) {
  return types.map((type) => RequiredResolve(type));
}
function RequiredResolve(type) {
  return IsComputed(type) ? FromComputed4(type.target, type.parameters) : IsRef(type) ? FromRef4(type.$ref) : IsIntersect(type) ? Intersect(FromRest7(type.allOf)) : IsUnion(type) ? Union(FromRest7(type.anyOf)) : IsObject3(type) ? FromObject6(type) : IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : Object2({});
}
function Required(type, options) {
  if (IsMappedResult(type)) {
    return RequiredFromMappedResult(type, options);
  } else {
    return CreateType({ ...RequiredResolve(type), ...options });
  }
}

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P3, options) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P3))
    Acc[K22] = Required(P3[K22], options);
  return Acc;
}
function FromMappedResult12(R3, options) {
  return FromProperties19(R3.properties, options);
}
function RequiredFromMappedResult(R3, options) {
  const P3 = FromMappedResult12(R3, options);
  return MappedResult(P3);
}

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
  return types.map((type) => {
    return IsRef(type) ? Dereference(moduleProperties, type.$ref) : FromType2(moduleProperties, type);
  });
}
function Dereference(moduleProperties, ref) {
  return ref in moduleProperties ? IsRef(moduleProperties[ref]) ? Dereference(moduleProperties, moduleProperties[ref].$ref) : FromType2(moduleProperties, moduleProperties[ref]) : Never();
}
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
function FromRequired(parameters) {
  return Required(parameters[0]);
}
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DereferenceParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
function FromArray6(moduleProperties, type) {
  return Array2(FromType2(moduleProperties, type));
}
function FromAsyncIterator3(moduleProperties, type) {
  return AsyncIterator(FromType2(moduleProperties, type));
}
function FromConstructor3(moduleProperties, parameters, instanceType) {
  return Constructor(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, instanceType));
}
function FromFunction3(moduleProperties, parameters, returnType) {
  return Function(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, returnType));
}
function FromIntersect8(moduleProperties, types) {
  return Intersect(FromTypes2(moduleProperties, types));
}
function FromIterator3(moduleProperties, type) {
  return Iterator(FromType2(moduleProperties, type));
}
function FromObject7(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType2(moduleProperties, properties[key]) };
  }, {}));
}
function FromRecord3(moduleProperties, type) {
  const [value, pattern] = [FromType2(moduleProperties, RecordValue2(type)), RecordPattern(type)];
  const result = CloneType(type);
  result.patternProperties[pattern] = value;
  return result;
}
function FromTransform(moduleProperties, transform) {
  return IsRef(transform) ? { ...Dereference(moduleProperties, transform.$ref), [TransformKind]: transform[TransformKind] } : transform;
}
function FromTuple5(moduleProperties, types) {
  return Tuple(FromTypes2(moduleProperties, types));
}
function FromUnion10(moduleProperties, types) {
  return Union(FromTypes2(moduleProperties, types));
}
function FromTypes2(moduleProperties, types) {
  return types.map((type) => FromType2(moduleProperties, type));
}
function FromType2(moduleProperties, type) {
  return IsOptional(type) ? CreateType(FromType2(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType2(moduleProperties, Discard(type, [ReadonlyKind])), type) : IsTransform(type) ? CreateType(FromTransform(moduleProperties, type), type) : IsArray3(type) ? CreateType(FromArray6(moduleProperties, type.items), type) : IsAsyncIterator3(type) ? CreateType(FromAsyncIterator3(moduleProperties, type.items), type) : IsComputed(type) ? CreateType(FromComputed5(moduleProperties, type.target, type.parameters)) : IsConstructor(type) ? CreateType(FromConstructor3(moduleProperties, type.parameters, type.returns), type) : IsFunction3(type) ? CreateType(FromFunction3(moduleProperties, type.parameters, type.returns), type) : IsIntersect(type) ? CreateType(FromIntersect8(moduleProperties, type.allOf), type) : IsIterator3(type) ? CreateType(FromIterator3(moduleProperties, type.items), type) : IsObject3(type) ? CreateType(FromObject7(moduleProperties, type.properties), type) : IsRecord(type) ? CreateType(FromRecord3(moduleProperties, type)) : IsTuple(type) ? CreateType(FromTuple5(moduleProperties, type.items || []), type) : IsUnion(type) ? CreateType(FromUnion10(moduleProperties, type.anyOf), type) : type;
}
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType2(moduleProperties, moduleProperties[key]) : Never();
}
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
class TModule {
  constructor($defs) {
    const computed = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed);
    this.$defs = identified;
  }
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
}
function Module(properties) {
  return new TModule(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(type, options) {
  return CreateType({ [Kind]: "Not", not: type }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}

// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options) {
  const expr = IsString(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T3) {
  return IsIntersect(T3) ? T3.allOf : IsUnion(T3) ? T3.anyOf : IsTuple(T3) ? T3.items ?? [] : [];
}
function Rest(T3) {
  return RestResolve(T3);
}

// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
class TransformDecodeBuilder {
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode) {
    return new TransformEncodeBuilder(this.schema, decode);
  }
}

class TransformEncodeBuilder {
  constructor(schema, decode) {
    this.schema = schema;
    this.decode = decode;
  }
  EncodeTransform(encode, schema) {
    const Encode = (value) => schema[TransformKind].Encode(encode(value));
    const Decode = (value) => this.decode(schema[TransformKind].Decode(value));
    const Codec = { Encode, Decode };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
}
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}

// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/type/json.mjs
class JsonTypeBuilder {
  ReadonlyOptional(type) {
    return ReadonlyOptional(type);
  }
  Readonly(type, enable) {
    return Readonly(type, enable ?? true);
  }
  Optional(type, enable) {
    return Optional(type, enable ?? true);
  }
  Any(options) {
    return Any(options);
  }
  Array(items, options) {
    return Array2(items, options);
  }
  Boolean(options) {
    return Boolean(options);
  }
  Capitalize(schema, options) {
    return Capitalize(schema, options);
  }
  Composite(schemas, options) {
    return Composite(schemas, options);
  }
  Const(value, options) {
    return Const(value, options);
  }
  Enum(item, options) {
    return Enum(item, options);
  }
  Exclude(unionType, excludedMembers, options) {
    return Exclude(unionType, excludedMembers, options);
  }
  Extends(L3, R3, T3, F3, options) {
    return Extends(L3, R3, T3, F3, options);
  }
  Extract(type, union, options) {
    return Extract(type, union, options);
  }
  Index(type, key, options) {
    return Index(type, key, options);
  }
  Integer(options) {
    return Integer(options);
  }
  Intersect(types, options) {
    return Intersect(types, options);
  }
  KeyOf(type, options) {
    return KeyOf(type, options);
  }
  Literal(literalValue, options) {
    return Literal(literalValue, options);
  }
  Lowercase(type, options) {
    return Lowercase(type, options);
  }
  Mapped(key, map3, options) {
    return Mapped(key, map3, options);
  }
  Module(properties) {
    return Module(properties);
  }
  Never(options) {
    return Never(options);
  }
  Not(type, options) {
    return Not2(type, options);
  }
  Null(options) {
    return Null(options);
  }
  Number(options) {
    return Number2(options);
  }
  Object(properties, options) {
    return Object2(properties, options);
  }
  Omit(schema, selector, options) {
    return Omit(schema, selector, options);
  }
  Partial(type, options) {
    return Partial(type, options);
  }
  Pick(type, key, options) {
    return Pick(type, key, options);
  }
  Record(key, value, options) {
    return Record(key, value, options);
  }
  Recursive(callback, options) {
    return Recursive(callback, options);
  }
  Ref(...args) {
    return Ref(args[0], args[1]);
  }
  Required(type, options) {
    return Required(type, options);
  }
  Rest(type) {
    return Rest(type);
  }
  String(options) {
    return String2(options);
  }
  TemplateLiteral(unresolved, options) {
    return TemplateLiteral(unresolved, options);
  }
  Transform(type) {
    return Transform(type);
  }
  Tuple(types, options) {
    return Tuple(types, options);
  }
  Uncapitalize(type, options) {
    return Uncapitalize(type, options);
  }
  Union(types, options) {
    return Union(types, options);
  }
  Unknown(options) {
    return Unknown(options);
  }
  Unsafe(options) {
    return Unsafe(options);
  }
  Uppercase(schema, options) {
    return Uppercase(schema, options);
  }
}
// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Void: () => Void,
  Uppercase: () => Uppercase,
  Unsafe: () => Unsafe,
  Unknown: () => Unknown,
  Union: () => Union,
  Undefined: () => Undefined,
  Uncapitalize: () => Uncapitalize,
  Uint8Array: () => Uint8Array2,
  Tuple: () => Tuple,
  Transform: () => Transform,
  TemplateLiteral: () => TemplateLiteral,
  Symbol: () => Symbol2,
  String: () => String2,
  ReturnType: () => ReturnType,
  Rest: () => Rest,
  Required: () => Required,
  RegExp: () => RegExp2,
  Ref: () => Ref,
  Recursive: () => Recursive,
  Record: () => Record,
  ReadonlyOptional: () => ReadonlyOptional,
  Readonly: () => Readonly,
  Promise: () => Promise2,
  Pick: () => Pick,
  Partial: () => Partial,
  Parameters: () => Parameters,
  Optional: () => Optional,
  Omit: () => Omit,
  Object: () => Object2,
  Number: () => Number2,
  Null: () => Null,
  Not: () => Not2,
  Never: () => Never,
  Module: () => Module,
  Mapped: () => Mapped,
  Lowercase: () => Lowercase,
  Literal: () => Literal,
  KeyOf: () => KeyOf,
  Iterator: () => Iterator,
  Intersect: () => Intersect,
  Integer: () => Integer,
  Instantiate: () => Instantiate,
  InstanceType: () => InstanceType,
  Index: () => Index,
  Function: () => Function,
  Extract: () => Extract,
  Extends: () => Extends,
  Exclude: () => Exclude,
  Enum: () => Enum,
  Date: () => Date2,
  ConstructorParameters: () => ConstructorParameters,
  Constructor: () => Constructor,
  Const: () => Const,
  Composite: () => Composite,
  Capitalize: () => Capitalize,
  Boolean: () => Boolean,
  BigInt: () => BigInt2,
  Awaited: () => Awaited,
  AsyncIterator: () => AsyncIterator,
  Array: () => Array2,
  Argument: () => Argument,
  Any: () => Any
});

// node_modules/@sinclair/typebox/build/esm/type/type/javascript.mjs
class JavaScriptTypeBuilder extends JsonTypeBuilder {
  Argument(index) {
    return Argument(index);
  }
  AsyncIterator(items, options) {
    return AsyncIterator(items, options);
  }
  Awaited(schema, options) {
    return Awaited(schema, options);
  }
  BigInt(options) {
    return BigInt2(options);
  }
  ConstructorParameters(schema, options) {
    return ConstructorParameters(schema, options);
  }
  Constructor(parameters, instanceType, options) {
    return Constructor(parameters, instanceType, options);
  }
  Date(options = {}) {
    return Date2(options);
  }
  Function(parameters, returnType, options) {
    return Function(parameters, returnType, options);
  }
  InstanceType(schema, options) {
    return InstanceType(schema, options);
  }
  Instantiate(schema, parameters) {
    return Instantiate(schema, parameters);
  }
  Iterator(items, options) {
    return Iterator(items, options);
  }
  Parameters(schema, options) {
    return Parameters(schema, options);
  }
  Promise(item, options) {
    return Promise2(item, options);
  }
  RegExp(unresolved, options) {
    return RegExp2(unresolved, options);
  }
  ReturnType(type, options) {
    return ReturnType(type, options);
  }
  Symbol(options) {
    return Symbol2(options);
  }
  Undefined(options) {
    return Undefined(options);
  }
  Uint8Array(options) {
    return Uint8Array2(options);
  }
  Void(options) {
    return Void(options);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = exports_type3;
// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error) {
  switch (error.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
class TypeDereferenceError extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
}
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === undefined)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Pushref(schema, references) {
  if (!IsString2(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
class ValueHashError extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
}
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("18446744073709551616")];
var Bytes = Array.from({ length: 256 }).map((_2, i2) => BigInt(i2));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i2 = 0;i2 < byteCount; i2++) {
    yield value >> 8 * (byteCount - 1 - i2) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit4(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit4(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit4(key);
    Visit4(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i2 = 0;i2 < value.length; i2++) {
    for (const byte of NumberToBytes(value.charCodeAt(i2))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit4(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i2 = 0;i2 < value.length; i2++) {
    FNV1A64(value[i2]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit4(value) {
  if (IsArray2(value))
    return ArrayType2(value);
  if (IsBoolean2(value))
    return BooleanType(value);
  if (IsBigInt2(value))
    return BigIntType(value);
  if (IsDate2(value))
    return DateType2(value);
  if (IsNull2(value))
    return NullType(value);
  if (IsNumber2(value))
    return NumberType(value);
  if (IsObject2(value))
    return ObjectType2(value);
  if (IsString2(value))
    return StringType(value);
  if (IsSymbol2(value))
    return SymbolType(value);
  if (IsUint8Array2(value))
    return Uint8ArrayType2(value);
  if (IsUndefined2(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit4(value);
  return Accumulator;
}

// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
class ValueCheckUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined(value) {
  return value !== undefined;
}
function FromAny2(schema, references, value) {
  return true;
}
function FromArgument2(schema, references, value) {
  return true;
}
function FromArray7(schema, references, value) {
  if (!IsArray2(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit5(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set.has(hashed)) {
        return false;
      } else {
        set.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit5(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator4(schema, references, value) {
  return IsAsyncIterator2(value);
}
function FromBigInt2(schema, references, value) {
  if (!IsBigInt2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean2(schema, references, value) {
  return IsBoolean2(value);
}
function FromConstructor4(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
function FromDate2(schema, references, value) {
  if (!IsDate2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction4(schema, references, value) {
  return IsFunction2(value);
}
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect9(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit5(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator4(schema, references, value) {
  return IsIterator2(value);
}
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
function FromNever2(schema, references, value) {
  return false;
}
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
function FromNull2(schema, references, value) {
  return IsNull2(value);
}
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject8(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise4(schema, references, value) {
  return IsPromise(value);
}
function FromRecord4(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex.test(key) ? Visit5(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex.test(key) ? Visit5(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef5(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromRegExp2(schema, references, value) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex.test(value);
}
function FromString2(schema, references, value) {
  if (!IsString2(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!exports_format.Has(schema.format))
      return false;
    const func = exports_format.Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol2(schema, references, value) {
  return IsSymbol2(value);
}
function FromTemplateLiteral4(schema, references, value) {
  return IsString2(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromTuple6(schema, references, value) {
  if (!IsArray2(value)) {
    return false;
  }
  if (schema.items === undefined && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i2 = 0;i2 < schema.items.length; i2++) {
    if (!Visit5(schema.items[i2], references, value[i2]))
      return false;
  }
  return true;
}
function FromUndefined2(schema, references, value) {
  return IsUndefined2(value);
}
function FromUnion11(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array2(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown2(schema, references, value) {
  return true;
}
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
  if (!exports_type2.Has(schema[Kind]))
    return false;
  const func = exports_type2.Get(schema[Kind]);
  return func(schema, value);
}
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Argument":
      return FromArgument2(schema_, references_, value);
    case "Array":
      return FromArray7(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor4(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction4(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Iterator":
      return FromIterator4(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Promise":
      return FromPromise4(schema_, references_, value);
    case "Record":
      return FromRecord4(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple6(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!exports_type2.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined2(value) {
  return value !== undefined;
}

class ValueErrorIterator {
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
function Create(errorType, schema, path, value, errors = []) {
  return {
    type: errorType,
    schema,
    path,
    value,
    message: GetErrorFunction()({ errorType, path, schema, value, errors }),
    errors
  };
}
function* FromAny3(schema, references, path, value) {
}
function* FromArgument3(schema, references, path, value) {
}
function* FromArray8(schema, references, path, value) {
  if (!IsArray2(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i2 = 0;i2 < value.length; i2++) {
    yield* Visit6(schema.items, references, `${path}/${i2}`, value[i2]);
  }
  if (schema.uniqueItems === true && !function() {
    const set = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set.has(hashed)) {
        return false;
      } else {
        set.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit6(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
function* FromAsyncIterator5(schema, references, path, value) {
  if (!IsAsyncIterator2(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt3(schema, references, path, value) {
  if (!IsBigInt2(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
function* FromBoolean3(schema, references, path, value) {
  if (!IsBoolean2(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor5(schema, references, path, value) {
  yield* Visit6(schema.returns, references, path, value.prototype);
}
function* FromDate3(schema, references, path, value) {
  if (!IsDate2(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
function* FromFunction5(schema, references, path, value) {
  if (!IsFunction2(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromImport2(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path, value);
}
function* FromInteger3(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
function* FromIntersect10(schema, references, path, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error of Visit6(inner, references, path, value)) {
      hasError = true;
      yield error;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit6(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator5(schema, references, path, value) {
  if (!IsIterator2(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral4(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever3(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot3(schema, references, path, value) {
  if (Visit6(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull3(schema, references, path, value) {
  if (!IsNull2(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
function* FromObject9(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise5(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord5(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef6(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromRegExp3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
function* FromString3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString2(schema.format)) {
    if (!exports_format.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = exports_format.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
function* FromSymbol3(schema, references, path, value) {
  if (!IsSymbol2(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral5(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
function* FromThis2(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromTuple7(schema, references, path, value) {
  if (!IsArray2(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === undefined && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i2 = 0;i2 < schema.items.length; i2++) {
    yield* Visit6(schema.items[i2], references, `${path}/${i2}`, value[i2]);
  }
}
function* FromUndefined3(schema, references, path, value) {
  if (!IsUndefined2(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion12(schema, references, path, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path, value)));
  yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* FromUint8Array3(schema, references, path, value) {
  if (!IsUint8Array2(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
function* FromUnknown3(schema, references, path, value) {
}
function* FromVoid3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind2(schema, references, path, value) {
  const check = exports_type2.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit6(schema, references, path, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path, value);
    case "Argument":
      return yield* FromArgument3(schema_, references_, path, value);
    case "Array":
      return yield* FromArray8(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator5(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor5(schema_, references_, path, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction5(schema_, references_, path, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect10(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator5(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path, value);
    case "Object":
      return yield* FromObject9(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise5(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord5(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef6(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path, value);
    case "String":
      return yield* FromString3(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral5(schema_, references_, path, value);
    case "This":
      return yield* FromThis2(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple7(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion12(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path, value);
    default:
      if (!exports_type2.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path, value);
  }
}
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}
// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
class TransformDecodeCheckError extends TypeBoxError {
  constructor(schema, value, error) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
}

class TransformDecodeError extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(error instanceof Error ? error.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
}
function Default(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error) {
    throw new TransformDecodeError(schema, path, value, error);
  }
}
function FromArray9(schema, references, path, value) {
  return IsArray2(value) ? Default(schema, path, value.map((value2, index) => Visit7(schema.items, references, `${path}/${index}`, value2))) : Default(schema, path, value);
}
function FromIntersect11(schema, references, path, value) {
  if (!IsObject2(value) || IsValueType(value))
    return Default(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit7(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
function FromImport3(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Visit7(target, [...references, ...additional], path, value);
  return Default(schema, path, result);
}
function FromNot4(schema, references, path, value) {
  return Default(schema, path, Visit7(schema.not, references, path, value));
}
function FromObject10(schema, references, path, value) {
  if (!IsObject2(value))
    return Default(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit7(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
function FromRecord6(schema, references, path, value) {
  if (!IsObject2(value))
    return Default(schema, path, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit7(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
function FromRef7(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default(schema, path, Visit7(target, references, path, value));
}
function FromThis3(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default(schema, path, Visit7(target, references, path, value));
}
function FromTuple8(schema, references, path, value) {
  return IsArray2(value) && IsArray2(schema.items) ? Default(schema, path, schema.items.map((schema2, index) => Visit7(schema2, references, `${path}/${index}`, value[index]))) : Default(schema, path, value);
}
function FromUnion13(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit7(subschema, references, path, value);
    return Default(schema, path, decoded);
  }
  return Default(schema, path, value);
}
function Visit7(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, path, value);
    case "Import":
      return FromImport3(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect11(schema_, references_, path, value);
    case "Not":
      return FromNot4(schema_, references_, path, value);
    case "Object":
      return FromObject10(schema_, references_, path, value);
    case "Record":
      return FromRecord6(schema_, references_, path, value);
    case "Ref":
      return FromRef7(schema_, references_, path, value);
    case "Symbol":
      return Default(schema_, path, value);
    case "This":
      return FromThis3(schema_, references_, path, value);
    case "Tuple":
      return FromTuple8(schema_, references_, path, value);
    case "Union":
      return FromUnion13(schema_, references_, path, value);
    default:
      return Default(schema_, path, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit7(schema, references, "", value);
}

// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
class TransformEncodeCheckError extends TypeBoxError {
  constructor(schema, value, error) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
}

class TransformEncodeError extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(`${error instanceof Error ? error.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
}
function Default2(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error) {
    throw new TransformEncodeError(schema, path, value, error);
  }
}
function FromArray10(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  return IsArray2(defaulted) ? defaulted.map((value2, index) => Visit8(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
function FromImport4(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Default2(schema, path, value);
  return Visit8(target, [...references, ...additional], path, result);
}
function FromIntersect12(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit8(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default2(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot5(schema, references, path, value) {
  return Default2(schema.not, path, Default2(schema, path, value));
}
function FromObject11(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit8(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default2(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord7(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit8(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default2(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef8(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit8(target, references, path, value);
  return Default2(schema, path, resolved);
}
function FromThis4(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit8(target, references, path, value);
  return Default2(schema, path, resolved);
}
function FromTuple9(schema, references, path, value) {
  const value1 = Default2(schema, path, value);
  return IsArray2(schema.items) ? schema.items.map((schema2, index) => Visit8(schema2, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion14(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit8(subschema, references, path, value);
    return Default2(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit8(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default2(schema, path, value1);
  }
  return Default2(schema, path, value);
}
function Visit8(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray10(schema_, references_, path, value);
    case "Import":
      return FromImport4(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject11(schema_, references_, path, value);
    case "Record":
      return FromRecord7(schema_, references_, path, value);
    case "Ref":
      return FromRef8(schema_, references_, path, value);
    case "This":
      return FromThis4(schema_, references_, path, value);
    case "Tuple":
      return FromTuple9(schema_, references_, path, value);
    case "Union":
      return FromUnion14(schema_, references_, path, value);
    default:
      return Default2(schema_, path, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit8(schema, references, "", value);
}

// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray11(schema, references) {
  return IsTransform(schema) || Visit9(schema.items, references);
}
function FromAsyncIterator6(schema, references) {
  return IsTransform(schema) || Visit9(schema.items, references);
}
function FromConstructor6(schema, references) {
  return IsTransform(schema) || Visit9(schema.returns, references) || schema.parameters.some((schema2) => Visit9(schema2, references));
}
function FromFunction6(schema, references) {
  return IsTransform(schema) || Visit9(schema.returns, references) || schema.parameters.some((schema2) => Visit9(schema2, references));
}
function FromIntersect13(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit9(schema2, references));
}
function FromImport5(schema, references) {
  const additional = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => [...result, schema.$defs[key]], []);
  const target = schema.$defs[schema.$ref];
  return IsTransform(schema) || Visit9(target, [...additional, ...references]);
}
function FromIterator6(schema, references) {
  return IsTransform(schema) || Visit9(schema.items, references);
}
function FromNot6(schema, references) {
  return IsTransform(schema) || Visit9(schema.not, references);
}
function FromObject12(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit9(schema2, references)) || IsSchema(schema.additionalProperties) && Visit9(schema.additionalProperties, references);
}
function FromPromise6(schema, references) {
  return IsTransform(schema) || Visit9(schema.item, references);
}
function FromRecord8(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit9(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
function FromRef9(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit9(Deref(schema, references), references);
}
function FromThis5(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit9(Deref(schema, references), references);
}
function FromTuple10(schema, references) {
  return IsTransform(schema) || !IsUndefined2(schema.items) && schema.items.some((schema2) => Visit9(schema2, references));
}
function FromUnion15(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit9(schema2, references));
}
function Visit9(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator6(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Function":
      return FromFunction6(schema_, references_);
    case "Import":
      return FromImport5(schema_, references_);
    case "Intersect":
      return FromIntersect13(schema_, references_);
    case "Iterator":
      return FromIterator6(schema_, references_);
    case "Not":
      return FromNot6(schema_, references_);
    case "Object":
      return FromObject12(schema_, references_);
    case "Promise":
      return FromPromise6(schema_, references_);
    case "Record":
      return FromRecord8(schema_, references_);
    case "Ref":
      return FromRef9(schema_, references_);
    case "This":
      return FromThis5(schema_, references_);
    case "Tuple":
      return FromTuple10(schema_, references_);
    case "Union":
      return FromUnion15(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
var visited = new Set;
function HasTransform(schema, references) {
  visited.clear();
  return Visit9(schema, references);
}

// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
class TypeCheck {
  constructor(schema, references, checkFunc, code) {
    this.schema = schema;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema, references);
  }
  Code() {
    return this.code;
  }
  Schema() {
    return this.schema;
  }
  References() {
    return this.references;
  }
  Errors(value) {
    return Errors(this.schema, this.references, value);
  }
  Check(value) {
    return this.checkFunc(value);
  }
  Decode(value) {
    if (!this.checkFunc(value))
      throw new TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value) : value;
  }
  Encode(value) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value) : value;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
    return encoded;
  }
}
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value) {
    if (value.length === 0)
      return false;
    return Character.IsNumeric(value.charCodeAt(0));
  }
  function IsAccessor(value) {
    if (IsFirstCharacterNumeric(value))
      return false;
    for (let i2 = 0;i2 < value.length; i2++) {
      const code = value.charCodeAt(i2);
      const check = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check)
        return false;
    }
    return true;
  }
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  function Encode(object, key) {
    return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
  }
  MemberExpression2.Encode = Encode;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode($id) {
    const buffer = [];
    for (let i2 = 0;i2 < $id.length; i2++) {
      const code = $id.charCodeAt(i2);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i2));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier2.Encode = Encode;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape2(content) {
    return content.replace(/'/g, "\\'");
  }
  LiteralString2.Escape = Escape2;
})(LiteralString || (LiteralString = {}));

class TypeCompilerUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  constructor(schema) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema;
  }
}
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
  }
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
  }
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
  }
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value} === 'number'` : `Number.isFinite(${value})`;
  }
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
  }
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema) {
    return schema[Kind] === "Any" || schema[Kind] === "Unknown";
  }
  function* FromAny4(schema, references, value) {
    yield "true";
  }
  function* FromArgument4(schema, references, value) {
    yield "true";
  }
  function* FromArray12(schema, references, value) {
    yield `Array.isArray(${value})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber2(schema.maxItems))
      yield `${value}.length <= ${schema.maxItems}`;
    if (IsNumber2(schema.minItems))
      yield `${value}.length >= ${schema.minItems}`;
    const elementExpression = CreateExpression(schema.items, references, "value");
    yield `${value}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains)) {
      const containsSchema = IsSchema2(schema.contains) ? schema.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber2(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
      const checkMaxContains = IsNumber2(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
    }
    if (schema.uniqueItems === true) {
      const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check} }`;
      yield `((${parameter}) => { ${block} )(${value})`;
    }
  }
  function* FromAsyncIterator7(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
  }
  function* FromBigInt4(schema, references, value) {
    yield `(typeof ${value} === 'bigint')`;
    if (IsBigInt2(schema.exclusiveMaximum))
      yield `${value} < BigInt(${schema.exclusiveMaximum})`;
    if (IsBigInt2(schema.exclusiveMinimum))
      yield `${value} > BigInt(${schema.exclusiveMinimum})`;
    if (IsBigInt2(schema.maximum))
      yield `${value} <= BigInt(${schema.maximum})`;
    if (IsBigInt2(schema.minimum))
      yield `${value} >= BigInt(${schema.minimum})`;
    if (IsBigInt2(schema.multipleOf))
      yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
  }
  function* FromBoolean4(schema, references, value) {
    yield `(typeof ${value} === 'boolean')`;
  }
  function* FromConstructor7(schema, references, value) {
    yield* Visit10(schema.returns, references, `${value}.prototype`);
  }
  function* FromDate4(schema, references, value) {
    yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
    if (IsNumber2(schema.exclusiveMaximumTimestamp))
      yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
    if (IsNumber2(schema.exclusiveMinimumTimestamp))
      yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
    if (IsNumber2(schema.maximumTimestamp))
      yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
    if (IsNumber2(schema.minimumTimestamp))
      yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
    if (IsNumber2(schema.multipleOfTimestamp))
      yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction7(schema, references, value) {
    yield `(typeof ${value} === 'function')`;
  }
  function* FromImport6(schema, references, value) {
    const members = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => {
      return [...result, schema.$defs[key]];
    }, []);
    yield* Visit10(Ref(schema.$ref), [...references, ...members], value);
  }
  function* FromInteger4(schema, references, value) {
    yield `Number.isInteger(${value})`;
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  function* FromIntersect14(schema, references, value) {
    const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
    if (schema.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check2})`;
    } else if (IsSchema2(schema.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
      yield `(${check1} && ${check2})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator7(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
  }
  function* FromLiteral5(schema, references, value) {
    if (typeof schema.const === "number" || typeof schema.const === "boolean") {
      yield `(${value} === ${schema.const})`;
    } else {
      yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
    }
  }
  function* FromNever4(schema, references, value) {
    yield `false`;
  }
  function* FromNot7(schema, references, value) {
    const expression = CreateExpression(schema.not, references, value);
    yield `(!${expression})`;
  }
  function* FromNull4(schema, references, value) {
    yield `(${value} === null)`;
  }
  function* FromNumber4(schema, references, value) {
    yield Policy.IsNumberLike(value);
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  function* FromObject13(schema, references, value) {
    yield Policy.IsObjectLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value, knownKey);
      const property = schema.properties[knownKey];
      if (schema.required && schema.required.includes(knownKey)) {
        yield* Visit10(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value, knownKey, expression);
      }
    }
    if (schema.additionalProperties === false) {
      if (schema.required && schema.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema.additionalProperties === "object") {
      const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise7(schema, references, value) {
    yield `${value} instanceof Promise`;
  }
  function* FromRecord9(schema, references, value) {
    yield Policy.IsRecordLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check2 = IsSchema2(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
    yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef10(schema, references, value) {
    const target = Deref(schema, references);
    if (state.functions.has(schema.$ref))
      return yield `${CreateFunctionName(schema.$ref)}(${value})`;
    yield* Visit10(target, references, value);
  }
  function* FromRegExp4(schema, references, value) {
    const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    yield `${variable}.test(${value})`;
  }
  function* FromString4(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    if (schema.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
      yield `${variable}.test(${value})`;
    }
    if (schema.format !== undefined) {
      yield `format('${schema.format}', ${value})`;
    }
  }
  function* FromSymbol4(schema, references, value) {
    yield `(typeof ${value} === 'symbol')`;
  }
  function* FromTemplateLiteral6(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
    yield `${variable}.test(${value})`;
  }
  function* FromThis6(schema, references, value) {
    yield `${CreateFunctionName(schema.$ref)}(${value})`;
  }
  function* FromTuple11(schema, references, value) {
    yield `Array.isArray(${value})`;
    if (schema.items === undefined)
      return yield `${value}.length === 0`;
    yield `(${value}.length === ${schema.maxItems})`;
    for (let i2 = 0;i2 < schema.items.length; i2++) {
      const expression = CreateExpression(schema.items[i2], references, `${value}[${i2}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined4(schema, references, value) {
    yield `${value} === undefined`;
  }
  function* FromUnion16(schema, references, value) {
    const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array4(schema, references, value) {
    yield `${value} instanceof Uint8Array`;
    if (IsNumber2(schema.maxByteLength))
      yield `(${value}.length <= ${schema.maxByteLength})`;
    if (IsNumber2(schema.minByteLength))
      yield `(${value}.length >= ${schema.minByteLength})`;
  }
  function* FromUnknown4(schema, references, value) {
    yield "true";
  }
  function* FromVoid4(schema, references, value) {
    yield Policy.IsVoidLike(value);
  }
  function* FromKind3(schema, references, value) {
    const instance = state.instances.size;
    state.instances.set(instance, schema);
    yield `kind('${schema[Kind]}', ${instance}, ${value})`;
  }
  function* Visit10(schema, references, value, useHoisting = true) {
    const references_ = IsString2(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    if (useHoisting && IsString2(schema.$id)) {
      const functionName = CreateFunctionName(schema.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value})`;
      } else {
        state.functions.set(functionName, "<deferred>");
        const functionCode = CreateFunction(functionName, schema, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny4(schema_, references_, value);
      case "Argument":
        return yield* FromArgument4(schema_, references_, value);
      case "Array":
        return yield* FromArray12(schema_, references_, value);
      case "AsyncIterator":
        return yield* FromAsyncIterator7(schema_, references_, value);
      case "BigInt":
        return yield* FromBigInt4(schema_, references_, value);
      case "Boolean":
        return yield* FromBoolean4(schema_, references_, value);
      case "Constructor":
        return yield* FromConstructor7(schema_, references_, value);
      case "Date":
        return yield* FromDate4(schema_, references_, value);
      case "Function":
        return yield* FromFunction7(schema_, references_, value);
      case "Import":
        return yield* FromImport6(schema_, references_, value);
      case "Integer":
        return yield* FromInteger4(schema_, references_, value);
      case "Intersect":
        return yield* FromIntersect14(schema_, references_, value);
      case "Iterator":
        return yield* FromIterator7(schema_, references_, value);
      case "Literal":
        return yield* FromLiteral5(schema_, references_, value);
      case "Never":
        return yield* FromNever4(schema_, references_, value);
      case "Not":
        return yield* FromNot7(schema_, references_, value);
      case "Null":
        return yield* FromNull4(schema_, references_, value);
      case "Number":
        return yield* FromNumber4(schema_, references_, value);
      case "Object":
        return yield* FromObject13(schema_, references_, value);
      case "Promise":
        return yield* FromPromise7(schema_, references_, value);
      case "Record":
        return yield* FromRecord9(schema_, references_, value);
      case "Ref":
        return yield* FromRef10(schema_, references_, value);
      case "RegExp":
        return yield* FromRegExp4(schema_, references_, value);
      case "String":
        return yield* FromString4(schema_, references_, value);
      case "Symbol":
        return yield* FromSymbol4(schema_, references_, value);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral6(schema_, references_, value);
      case "This":
        return yield* FromThis6(schema_, references_, value);
      case "Tuple":
        return yield* FromTuple11(schema_, references_, value);
      case "Undefined":
        return yield* FromUndefined4(schema_, references_, value);
      case "Union":
        return yield* FromUnion16(schema_, references_, value);
      case "Uint8Array":
        return yield* FromUint8Array4(schema_, references_, value);
      case "Unknown":
        return yield* FromUnknown4(schema_, references_, value);
      case "Void":
        return yield* FromVoid4(schema_, references_, value);
      default:
        if (!exports_type2.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema);
        return yield* FromKind3(schema_, references_, value);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema, references, value, useHoisting = true) {
    return `(${[...Visit10(schema, references, value, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema, references, value, useHoisting = true) {
    const [newline, pad] = [`
`, (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit10(schema, references, value, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
  }
  function CreateParameter(name, type) {
    const annotation = state.language === "typescript" ? `: ${type}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type) {
    return state.language === "typescript" ? `: ${type}` : "";
  }
  function Build(schema, references, options) {
    const functionCode = CreateFunction("check", schema, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString2(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join(`
`);
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema, references, options] = args.length === 2 && IsArray2(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray2(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema))
      throw new TypeCompilerTypeGuardError(schema);
    for (const schema2 of references)
      if (!IsSchema2(schema2))
        throw new TypeCompilerTypeGuardError(schema2);
    return Build(schema, references, options);
  }
  TypeCompiler2.Code = Code;
  function Compile(schema, references = []) {
    const generatedCode = Code(schema, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value) {
      if (!exports_type2.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = exports_type2.Get(kind);
      const schema2 = instances.get(instance);
      return checkFunc(schema2, value);
    }
    function formatRegistryFunction(format, value) {
      if (!exports_format.Has(format))
        return false;
      const checkFunc = exports_format.Get(format);
      return checkFunc(value);
    }
    function hashFunction(value) {
      return Hash(value);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema, references, checkFunction, generatedCode);
  }
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));
// src/utils/tryOrFail/index.ts
var tryOrFailSync = (cb) => {
  try {
    const result = cb();
    return [undefined, result];
  } catch (error) {
    return [error, undefined];
  }
};
var tryOrFail = async (cb) => {
  try {
    const result = await cb();
    return [undefined, result];
  } catch (error) {
    return [error, undefined];
  }
};

// src/validation/formats/date.ts
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
function IsLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function isDate(value) {
  const matches = DATE.exec(value);
  if (!matches)
    return false;
  const year = +matches[1];
  const month = +matches[2];
  const day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && IsLeapYear(year) ? 29 : DAYS[month]);
}

// src/validation/formats/time.ts
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function isTime(value, strictTimeZone) {
  const matches = TIME.exec(value);
  if (!matches)
    return false;
  const hr3 = +matches[1];
  const min = +matches[2];
  const sec = +matches[3];
  const tz = matches[4];
  const tzSign = matches[5] === "-" ? -1 : 1;
  const tzH = +(matches[6] || 0);
  const tzM = +(matches[7] || 0);
  if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
    return false;
  if (hr3 <= 23 && min <= 59 && sec < 60)
    return true;
  const utcMin = min - tzM * tzSign;
  const utcHr = hr3 - tzH * tzSign - (utcMin < 0 ? 1 : 0);
  return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
}

// src/validation/formats/date-time.ts
var DATE_TIME_SEPARATOR = /t|\s/i;
function isDateTime(value, strictTimeZone) {
  const dateTime = value.split(DATE_TIME_SEPARATOR);
  return dateTime.length === 2 && isDate(dateTime[0]) && isTime(dateTime[1], strictTimeZone);
}

// src/validation/formats/email.ts
var Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function isEmail(value) {
  return Email.test(value);
}

// src/validation/formats/ip.ts
var IPv4 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
var IPv6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
function isIPv4(value) {
  return IPv4.test(value);
}
function isIPv6(value) {
  return IPv6.test(value);
}

// src/validation/formats/url.ts
var Url = /^(?:https?|wss?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
function isUrl(value) {
  return Url.test(value);
}

// src/validation/index.ts
var cuid2Regex = /^[a-z0-9]{24}$/;
var iniValidationsAdvanced = () => {
  exports_format.Set("email", (value) => isEmail(value));
  exports_format.Set("date-time", (value) => isDateTime(value));
  exports_format.Set("time", (value) => isTime(value));
  exports_format.Set("date", (value) => isDate(value));
  exports_format.Set("ipv4", (value) => isIPv4(value));
  exports_format.Set("ipv6", (value) => isIPv6(value));
  exports_format.Set("url", (value) => isUrl(value));
  exports_format.Set("cuid2", (value) => cuid2Regex.test(value));
};
function parseOrFail(validator, value) {
  return tryOrFailSync(() => {
    if (!validator.Check(value)) {
      const errors = [...validator.Errors(value)];
      throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
    return value;
  });
}
function parseOrThrow(validator, value) {
  const [error, result] = parseOrFail(validator, value);
  if (error) {
    throw error;
  }
  return result;
}

// src/testing/testModel/index.ts
var testModel = (tests) => {
  for (const { testName, goodValues, badValues, check } of tests) {
    for (const goodValue of goodValues) {
      test(`${testName} - Check returns true for good value: ${JSON.stringify(goodValue)}`, () => {
        expect(check.Check(goodValue)).toBe(true);
      });
      test(`${testName} - validateOrThrow does not throw for good value: ${JSON.stringify(goodValue)}`, () => {
        const [error, value] = parseOrFail(check, goodValue);
        expect(error).toBeUndefined();
        expect(value).toEqual(goodValue);
      });
    }
    for (const badValue of badValues) {
      test(`${testName} - Check returns false for bad value: ${JSON.stringify(badValue)}`, () => {
        expect(check.Check(badValue)).toBe(false);
      });
      test(`${testName} - validateOrThrow throws for bad value: ${JSON.stringify(badValue)}`, () => {
        const [error, value] = parseOrFail(check, badValue);
        expect(value).toBeUndefined();
        expect(error).toBeInstanceOf(Error);
      });
    }
  }
};
// node_modules/@paralleldrive/cuid2/index.js
var { createId, init, getConstants, isCuid } = require_src();
var $createId = createId;
var $isCuid = isCuid;

// src/utils/id/index.ts
var createUniqueId = () => {
  return $createId();
};
var isValidId = (id) => {
  return $isCuid(id);
};

// src/utils/misc/sleep.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// node_modules/fractional-indexing/src/index.js
var BASE_62_DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function midpoint(a2, b2, digits) {
  const zero = digits[0];
  if (b2 != null && a2 >= b2) {
    throw new Error(a2 + " >= " + b2);
  }
  if (a2.slice(-1) === zero || b2 && b2.slice(-1) === zero) {
    throw new Error("trailing zero");
  }
  if (b2) {
    let n2 = 0;
    while ((a2[n2] || zero) === b2[n2]) {
      n2++;
    }
    if (n2 > 0) {
      return b2.slice(0, n2) + midpoint(a2.slice(n2), b2.slice(n2), digits);
    }
  }
  const digitA = a2 ? digits.indexOf(a2[0]) : 0;
  const digitB = b2 != null ? digits.indexOf(b2[0]) : digits.length;
  if (digitB - digitA > 1) {
    const midDigit = Math.round(0.5 * (digitA + digitB));
    return digits[midDigit];
  } else {
    if (b2 && b2.length > 1) {
      return b2.slice(0, 1);
    } else {
      return digits[digitA] + midpoint(a2.slice(1), null, digits);
    }
  }
}
function validateInteger(int) {
  if (int.length !== getIntegerLength(int[0])) {
    throw new Error("invalid integer part of order key: " + int);
  }
}
function getIntegerLength(head) {
  if (head >= "a" && head <= "z") {
    return head.charCodeAt(0) - 97 + 2;
  } else if (head >= "A" && head <= "Z") {
    return 90 - head.charCodeAt(0) + 2;
  } else {
    throw new Error("invalid order key head: " + head);
  }
}
function getIntegerPart(key) {
  const integerPartLength = getIntegerLength(key[0]);
  if (integerPartLength > key.length) {
    throw new Error("invalid order key: " + key);
  }
  return key.slice(0, integerPartLength);
}
function validateOrderKey(key, digits) {
  if (key === "A" + digits[0].repeat(26)) {
    throw new Error("invalid order key: " + key);
  }
  const i2 = getIntegerPart(key);
  const f3 = key.slice(i2.length);
  if (f3.slice(-1) === digits[0]) {
    throw new Error("invalid order key: " + key);
  }
}
function incrementInteger(x3, digits) {
  validateInteger(x3);
  const [head, ...digs] = x3.split("");
  let carry = true;
  for (let i2 = digs.length - 1;carry && i2 >= 0; i2--) {
    const d2 = digits.indexOf(digs[i2]) + 1;
    if (d2 === digits.length) {
      digs[i2] = digits[0];
    } else {
      digs[i2] = digits[d2];
      carry = false;
    }
  }
  if (carry) {
    if (head === "Z") {
      return "a" + digits[0];
    }
    if (head === "z") {
      return null;
    }
    const h2 = String.fromCharCode(head.charCodeAt(0) + 1);
    if (h2 > "a") {
      digs.push(digits[0]);
    } else {
      digs.pop();
    }
    return h2 + digs.join("");
  } else {
    return head + digs.join("");
  }
}
function decrementInteger(x3, digits) {
  validateInteger(x3);
  const [head, ...digs] = x3.split("");
  let borrow = true;
  for (let i2 = digs.length - 1;borrow && i2 >= 0; i2--) {
    const d2 = digits.indexOf(digs[i2]) - 1;
    if (d2 === -1) {
      digs[i2] = digits.slice(-1);
    } else {
      digs[i2] = digits[d2];
      borrow = false;
    }
  }
  if (borrow) {
    if (head === "a") {
      return "Z" + digits.slice(-1);
    }
    if (head === "A") {
      return null;
    }
    const h2 = String.fromCharCode(head.charCodeAt(0) - 1);
    if (h2 < "Z") {
      digs.push(digits.slice(-1));
    } else {
      digs.pop();
    }
    return h2 + digs.join("");
  } else {
    return head + digs.join("");
  }
}
function generateKeyBetween(a2, b2, digits = BASE_62_DIGITS) {
  if (a2 != null) {
    validateOrderKey(a2, digits);
  }
  if (b2 != null) {
    validateOrderKey(b2, digits);
  }
  if (a2 != null && b2 != null && a2 >= b2) {
    throw new Error(a2 + " >= " + b2);
  }
  if (a2 == null) {
    if (b2 == null) {
      return "a" + digits[0];
    }
    const ib2 = getIntegerPart(b2);
    const fb2 = b2.slice(ib2.length);
    if (ib2 === "A" + digits[0].repeat(26)) {
      return ib2 + midpoint("", fb2, digits);
    }
    if (ib2 < b2) {
      return ib2;
    }
    const res = decrementInteger(ib2, digits);
    if (res == null) {
      throw new Error("cannot decrement any more");
    }
    return res;
  }
  if (b2 == null) {
    const ia3 = getIntegerPart(a2);
    const fa4 = a2.slice(ia3.length);
    const i3 = incrementInteger(ia3, digits);
    return i3 == null ? ia3 + midpoint(fa4, null, digits) : i3;
  }
  const ia2 = getIntegerPart(a2);
  const fa3 = a2.slice(ia2.length);
  const ib = getIntegerPart(b2);
  const fb = b2.slice(ib.length);
  if (ia2 === ib) {
    return ia2 + midpoint(fa3, fb, digits);
  }
  const i2 = incrementInteger(ia2, digits);
  if (i2 == null) {
    throw new Error("cannot increment any more");
  }
  if (i2 < b2) {
    return i2;
  }
  return ia2 + midpoint(fa3, null, digits);
}
function generateNKeysBetween(a2, b2, n2, digits = BASE_62_DIGITS) {
  if (n2 === 0) {
    return [];
  }
  if (n2 === 1) {
    return [generateKeyBetween(a2, b2, digits)];
  }
  if (b2 == null) {
    let c3 = generateKeyBetween(a2, b2, digits);
    const result = [c3];
    for (let i2 = 0;i2 < n2 - 1; i2++) {
      c3 = generateKeyBetween(c3, b2, digits);
      result.push(c3);
    }
    return result;
  }
  if (a2 == null) {
    let c3 = generateKeyBetween(a2, b2, digits);
    const result = [c3];
    for (let i2 = 0;i2 < n2 - 1; i2++) {
      c3 = generateKeyBetween(a2, c3, digits);
      result.push(c3);
    }
    result.reverse();
    return result;
  }
  const mid = Math.floor(n2 / 2);
  const c2 = generateKeyBetween(a2, b2, digits);
  return [
    ...generateNKeysBetween(a2, c2, mid, digits),
    c2,
    ...generateNKeysBetween(c2, b2, n2 - mid - 1, digits)
  ];
}

// src/utils/position/index.ts
var generatePositionsFirst = (n2) => {
  return generateNKeysBetween(null, null, n2);
};
var generatePositionAfter = (after, n2) => {
  return generateNKeysBetween(after, null, n2);
};
var generatePositionBefore = (before, n2) => {
  return generateNKeysBetween(null, before, n2);
};
var generatePositionBetween = (a2, b2, n2) => {
  return generateNKeysBetween(a2, b2, n2);
};
function sortItemsByPosition(items) {
  return items.sort((a2, b2) => {
    if (a2.position < b2.position)
      return -1;
    if (a2.position > b2.position)
      return 1;
    return 0;
  });
}
function getFirst(items) {
  return items[0];
}
function getLast(items) {
  return items.length > 0 ? items[items.length - 1] : undefined;
}
function getNext(items, current) {
  const index = items.findIndex((item) => item.id === current.id);
  return index >= 0 && index < items.length - 1 ? items[index + 1] : undefined;
}
function getPrevious(items, current) {
  const index = items.findIndex((item) => item.id === current.id);
  return index > 0 ? items[index - 1] : undefined;
}
function getRange(items, start, end) {
  const startIndex = items.findIndex((item) => item.id === start.id);
  const endIndex = items.findIndex((item) => item.id === end.id);
  if (startIndex === -1 || endIndex === -1)
    return [];
  const [from, to] = startIndex <= endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
  return items.slice(from, to + 1);
}
function getItemById(items, id) {
  return items.find((item) => item.id === id);
}
function getIndexByItem(items, current) {
  return items.findIndex((item) => item.id === current.id);
}
export {
  useUnmount,
  useMount,
  useEvent,
  useDidUpdateEffect,
  tryOrFailSync,
  tryOrFail,
  testModel,
  sortItemsByPosition,
  sleep,
  parseOrThrow,
  parseOrFail,
  isValidId,
  iniValidationsAdvanced,
  getRange,
  getPrevious,
  getNext,
  getLast,
  getItemById,
  getIndexByItem,
  getFirst,
  generatePositionsFirst,
  generatePositionBetween,
  generatePositionBefore,
  generatePositionAfter,
  fake,
  cuid2Regex,
  createUniqueId,
  Void,
  exports_value as ValueGuard,
  ValueErrorType,
  ValueErrorIterator,
  Uppercase,
  Unsafe,
  Unknown,
  UnionEvaluated,
  Union,
  Undefined,
  Uncapitalize,
  Uint8Array2 as Uint8Array,
  exports_type2 as TypeRegistry,
  exports_type as TypeGuard,
  TypeCompilerUnknownTypeError,
  TypeCompilerTypeGuardError,
  TypeCompiler,
  TypeCheck,
  TypeBoxError,
  Type,
  Tuple,
  TransformKind,
  TransformEncodeBuilder,
  TransformDecodeBuilder,
  Transform,
  TemplateLiteralToUnion,
  TemplateLiteralSyntax,
  TemplateLiteralPatternError,
  TemplateLiteralPattern,
  TemplateLiteralParserError,
  TemplateLiteralParseExact,
  TemplateLiteralParse,
  TemplateLiteralGenerateError,
  TemplateLiteralGenerate,
  TemplateLiteralFiniteError,
  TemplateLiteralExpressionGenerate,
  TemplateLiteral,
  TModule,
  Symbol2 as Symbol,
  String2 as String,
  SetUnionMany,
  SetUnion,
  SetIsSubset,
  SetIntersectMany,
  SetIntersect,
  SetIncludes,
  SetDistinct,
  SetComplement,
  ReturnType,
  Rest,
  RequiredFromMappedResult,
  Required,
  RegExp2 as RegExp,
  Ref,
  Recursive,
  RecordValue2 as RecordValue,
  RecordPattern,
  RecordKey2 as RecordKey,
  Record,
  ReadonlyOptional,
  ReadonlyKind,
  ReadonlyFromMappedResult,
  Readonly,
  Promise2 as Promise,
  Policy,
  PickFromMappedResult,
  PickFromMappedKey,
  Pick,
  PatternStringExact,
  PatternString,
  PatternNumberExact,
  PatternNumber,
  PatternNeverExact,
  PatternNever,
  PatternBooleanExact,
  PatternBoolean,
  PartialFromMappedResult,
  Partial,
  Parameters,
  OptionalKind,
  OptionalFromMappedResult,
  Optional,
  OmitFromMappedResult,
  OmitFromMappedKey,
  Omit,
  Object2 as Object,
  Number2 as Number,
  Null,
  Not2 as Not,
  Never,
  Module,
  MappedResult,
  MappedKey,
  MappedFunctionReturnType,
  Mapped,
  Lowercase,
  Literal,
  exports_kind as KindGuard,
  Kind,
  KeyOfPropertyKeysToRest,
  KeyOfPropertyKeys,
  KeyOfPropertyEntries,
  KeyOfPattern,
  KeyOfFromMappedResult,
  KeyOf,
  JsonTypeBuilder,
  JavaScriptTypeBuilder,
  Iterator,
  IsTemplateLiteralFinite,
  IsTemplateLiteralExpressionFinite,
  IntrinsicFromMappedKey,
  Intrinsic,
  IntersectEvaluated,
  Intersect,
  Integer,
  Instantiate,
  InstanceType,
  IndexPropertyKeys,
  IndexFromPropertyKeys,
  IndexFromPropertyKey,
  IndexFromMappedResult,
  IndexFromMappedKey,
  IndexFromComputed,
  Index,
  Increment,
  Hint,
  Function,
  FromTypes,
  exports_format as FormatRegistry,
  ExtractFromTemplateLiteral,
  ExtractFromMappedResult,
  Extract,
  ExtendsUndefinedCheck,
  ExtendsResult,
  ExtendsResolverError,
  ExtendsFromMappedResult,
  ExtendsFromMappedKey,
  ExtendsCheck,
  Extends,
  ExcludeFromTemplateLiteral,
  ExcludeFromMappedResult,
  Exclude,
  Enum,
  DateTime,
  Date2 as Date,
  CreateType,
  ConstructorParameters,
  Constructor,
  Const,
  Composite,
  CloneType,
  CloneRest,
  Clone,
  Capitalize,
  Boolean,
  BigInt2 as BigInt,
  Awaited,
  AsyncIterator,
  Array2 as Array,
  Argument,
  Any
};
